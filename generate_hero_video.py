import sys, os, math, subprocess
import numpy as np
from PIL import Image, ImageFilter

print("Initializing Cinema Generator for Taif Rose...")

# 1. Load and upscale source images to high-res canvas (2752 x 1536)
SRC_W, SRC_H = 2752, 1536
OUT_W, OUT_H = 1920, 1080
FPS = 45
DUR_SCENE = 5.0 # seconds per scene
FRAMES_SCENE = int(FPS * DUR_SCENE) # 225 frames
FADE_FRAMES = int(FPS * 1.2) # 54 frames crossfade

rose_src = Image.open('public/heritage/hero-dewy-roses.jpg').convert('RGB')
fields_src = Image.open('public/heritage/taif-fields.jpg').convert('RGB')

rose_hr = np.array(rose_src.resize((SRC_W, SRC_H), Image.Resampling.LANCZOS), dtype=np.float32)
fields_hr = np.array(fields_src.resize((SRC_W, SRC_H), Image.Resampling.LANCZOS), dtype=np.float32)

print(f"Loaded assets. Generating {FRAMES_SCENE * 2} total frames at {FPS} fps...")

# Precompute mist flow noise grid for timelapse
grid_y, grid_x = np.mgrid[0:OUT_H, 0:OUT_W]

# Function to crop and scale with center and zoom
def get_cropped_frame(img_hr, center_x, center_y, zoom):
    # zoom >= 1.0
    crop_w = int(OUT_W / zoom)
    crop_h = int(OUT_H / zoom)
    
    x1 = int(center_x - crop_w // 2)
    y1 = int(center_y - crop_h // 2)
    
    # Boundary clamps
    x1 = max(0, min(x1, SRC_W - crop_w))
    y1 = max(0, min(y1, SRC_H - crop_h))
    x2 = x1 + crop_w
    y2 = y1 + crop_h
    
    crop = img_hr[y1:y2, x1:x2]
    pil_crop = Image.fromarray(crop.astype(np.uint8))
    # resize back to OUT_W, OUT_H
    resized = pil_crop.resize((OUT_W, OUT_H), Image.Resampling.BILINEAR)
    return np.array(resized, dtype=np.float32)

# Start ffmpeg process pipe
ffmpeg_cmd = [
    'ffmpeg', '-y',
    '-f', 'rawvideo',
    '-vcodec', 'rawvideo',
    '-s', f'{OUT_W}x{OUT_H}',
    '-pix_fmt', 'rgb24',
    '-r', str(FPS),
    '-i', '-',
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '17',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    'public/videos/taif-rose-hero.mp4'
]

proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

# -------------------------------------------------------------
# Part 1: Rose Slow-Motion Macro Zoom-In ("مشهد الورده زوم ان وسلوموشن")
# -------------------------------------------------------------
print("Rendering Scene 1: Macro Rose Slow-Motion Zoom-In & Sparkle...")
rose_frames = []

# Target center on the flower
center_flower_x = SRC_W * 0.48
center_flower_y = SRC_H * 0.43

for f in range(FRAMES_SCENE):
    progress = f / float(FRAMES_SCENE - 1)
    
    # Smooth easing for zoom (starts gentle, accelerates, settles into extreme close up)
    # zoom from 1.0 to 1.58
    zoom = 1.0 + 0.58 * (0.5 - 0.5 * math.cos(progress * math.pi))
    
    # Organic slow-motion breathing (wind swaying the stem by a few pixels)
    sway_x = math.sin(progress * 2.5 * math.pi) * 8.0
    sway_y = math.cos(progress * 2.0 * math.pi) * 5.0
    
    cx = center_flower_x + sway_x
    cy = center_flower_y + sway_y
    
    frame = get_cropped_frame(rose_hr, cx, cy, zoom)
    
    # Glistening dew drops: subtle dynamic specular highlights
    glint_phase = math.sin(progress * 8.0 * math.pi)
    if glint_phase > 0.3:
        # Boost bright dewdrop highlights slightly
        mask_dew = (frame[:, :, 0] > 215) & (frame[:, :, 1] > 180) & (frame[:, :, 2] > 180)
        boost = (glint_phase - 0.3) * 45.0
        frame[mask_dew, 0] = np.clip(frame[mask_dew, 0] + boost, 0, 255)
        frame[mask_dew, 1] = np.clip(frame[mask_dew, 1] + boost * 0.9, 0, 255)
        frame[mask_dew, 2] = np.clip(frame[mask_dew, 2] + boost * 0.8, 0, 255)

    # Soft golden morning flare in top right
    flare_intensity = 0.08 + 0.05 * math.sin(progress * 3.0 * math.pi)
    dist_sun = np.sqrt((grid_x - OUT_W * 0.85)**2 + (grid_y - OUT_H * 0.15)**2)
    flare_map = np.clip(1.0 - dist_sun / (OUT_W * 0.75), 0, 1) ** 2
    frame[:, :, 0] = np.clip(frame[:, :, 0] + flare_map * (flare_intensity * 255 * 1.0), 0, 255)
    frame[:, :, 1] = np.clip(frame[:, :, 1] + flare_map * (flare_intensity * 255 * 0.85), 0, 255)
    frame[:, :, 2] = np.clip(frame[:, :, 2] + flare_map * (flare_intensity * 255 * 0.5), 0, 255)
    
    rose_frames.append(frame.astype(np.uint8))

# -------------------------------------------------------------
# Part 2: Mountain Terraces Sunrise Timelapse ("مشهد الجبال والاراضي تايم لابس")
# -------------------------------------------------------------
print("Rendering Scene 2: Mountain & Terraced Fields Sunrise Timelapse...")
fields_frames = []

for f in range(FRAMES_SCENE):
    progress = f / float(FRAMES_SCENE - 1)
    
    # Timelapse camera pan: slow sweeping pan across the mountain terraces
    # from left (cx = SRC_W * 0.44) to right (cx = SRC_W * 0.56)
    pan_x = SRC_W * 0.44 + (SRC_W * 0.12) * progress
    pan_y = SRC_H * 0.48
    zoom = 1.15 - 0.05 * math.sin(progress * math.pi) # slight panoramic breathe
    
    frame = get_cropped_frame(fields_hr, pan_x, pan_y, zoom)
    
    # Timelapse Effect 1: Rolling, drifting morning mist across the valley
    # Drifting coordinate for clouds
    mist_drift = f * 14.0 # rapid timelapse cloud movement
    
    # Multi-frequency drifting wave for rolling clouds
    wave1 = np.sin((grid_x + mist_drift) * 0.008 + grid_y * 0.005)
    wave2 = np.cos((grid_x * 0.8 - mist_drift * 1.3) * 0.012 + grid_y * 0.009)
    wave3 = np.sin((grid_x * 1.5 + mist_drift * 0.7) * 0.02 + grid_y * 0.015)
    raw_mist = (wave1 * 0.5 + wave2 * 0.35 + wave3 * 0.15 + 1.0) / 2.0 # 0 to 1
    
    # Restrict mist to valley & mountain horizon (upper-middle right region)
    # y between 0.15 and 0.65, x between 0.3 and 1.0
    valley_mask_y = np.clip(1.0 - np.abs(grid_y - OUT_H * 0.38) / (OUT_H * 0.28), 0, 1) ** 1.5
    valley_mask_x = np.clip((grid_x - OUT_W * 0.25) / (OUT_W * 0.5), 0, 1)
    valley_region = valley_mask_y * valley_mask_x
    
    mist_intensity = raw_mist * valley_region * 0.38
    
    # Add luminous morning fog color (warm soft white-peach)
    frame[:, :, 0] = np.clip(frame[:, :, 0] + mist_intensity * 230, 0, 255)
    frame[:, :, 1] = np.clip(frame[:, :, 1] + mist_intensity * 215, 0, 255)
    frame[:, :, 2] = np.clip(frame[:, :, 2] + mist_intensity * 205, 0, 255)
    
    # Timelapse Effect 2: Rising Sun Ray Pulsation & Daylight wash
    # Sun center around (OUT_W * 0.52, OUT_H * 0.20)
    sun_x = OUT_W * 0.50 + (f * 0.2)
    sun_y = OUT_H * 0.20 - (f * 0.08) # sun climbs slightly
    
    angle = np.arctan2(grid_y - sun_y, grid_x - sun_x)
    ray_pattern = (np.sin(angle * 12.0 + f * 0.15) + 1.0) / 2.0
    sun_dist = np.sqrt((grid_x - sun_x)**2 + (grid_y - sun_y)**2)
    sun_falloff = np.clip(1.0 - sun_dist / (OUT_W * 0.65), 0, 1) ** 2
    
    sun_rays = ray_pattern * sun_falloff * (0.12 + 0.08 * math.sin(progress * math.pi))
    
    # Sun warmth
    frame[:, :, 0] = np.clip(frame[:, :, 0] + sun_rays * 255 * 1.0, 0, 255)
    frame[:, :, 1] = np.clip(frame[:, :, 1] + sun_rays * 255 * 0.85, 0, 255)
    frame[:, :, 2] = np.clip(frame[:, :, 2] + sun_rays * 255 * 0.5, 0, 255)
    
    # General daylight increase as sun rises
    daylight_boost = progress * 16.0
    frame[:, :, 0] = np.clip(frame[:, :, 0] + daylight_boost * 1.1, 0, 255)
    frame[:, :, 1] = np.clip(frame[:, :, 1] + daylight_boost * 0.95, 0, 255)
    frame[:, :, 2] = np.clip(frame[:, :, 2] + daylight_boost * 0.7, 0, 255)
    
    fields_frames.append(frame.astype(np.uint8))

# -------------------------------------------------------------
# Part 3: Combine with smooth cross-dissolve & write to ffmpeg
# -------------------------------------------------------------
print("Compositing cinematic sequence and piping to H.264 encoder...")

# Sequence order:
# 1. Rose Slow-Mo Zoom (from 0 to FRAMES_SCENE - FADE_FRAMES)
# 2. Crossfade between Rose and Mountain Timelapse (FADE_FRAMES)
# 3. Mountain Timelapse (from FADE_FRAMES to FRAMES_SCENE - FADE_FRAMES)
# 4. Crossfade back to Rose for seamless loop (FADE_FRAMES)

# Phase 1: Pure Rose Slow-Mo
for f in range(FRAMES_SCENE - FADE_FRAMES):
    proc.stdin.write(rose_frames[f].tobytes())

# Phase 2: Crossfade Rose -> Mountain
for i in range(FADE_FRAMES):
    alpha = i / float(FADE_FRAMES)
    # Smooth Hermite curve
    smooth_alpha = alpha * alpha * (3 - 2 * alpha)
    f_rose = (FRAMES_SCENE - FADE_FRAMES) + i
    f_fields = i
    blended = (rose_frames[f_rose].astype(np.float32) * (1.0 - smooth_alpha) + 
               fields_frames[f_fields].astype(np.float32) * smooth_alpha).astype(np.uint8)
    proc.stdin.write(blended.tobytes())

# Phase 3: Pure Mountain Timelapse
for f in range(FADE_FRAMES, FRAMES_SCENE - FADE_FRAMES):
    proc.stdin.write(fields_frames[f].tobytes())

# Phase 4: Crossfade Mountain -> Rose (for seamless infinite loop)
for i in range(FADE_FRAMES):
    alpha = i / float(FADE_FRAMES)
    smooth_alpha = alpha * alpha * (3 - 2 * alpha)
    f_fields = (FRAMES_SCENE - FADE_FRAMES) + i
    f_rose = i
    blended = (fields_frames[f_fields].astype(np.float32) * (1.0 - smooth_alpha) + 
               rose_frames[f_rose].astype(np.float32) * smooth_alpha).astype(np.uint8)
    proc.stdin.write(blended.tobytes())

proc.stdin.close()
proc.wait()

print("Video generation finished successfully!")
print("Output file size:", os.path.getsize('public/videos/taif-rose-hero.mp4'))
