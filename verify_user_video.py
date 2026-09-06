import asyncio
import subprocess
import time
from playwright.async_api import async_playwright

async def verify_new_video():
    # Start ephemeral preview on port 5192
    proc = subprocess.Popen(
        ['npx', 'vite', 'preview', '--port', '5192'],
        cwd='/Users/him.art/.gemini/antigravity-ide/scratch/taif-rose-luxury',
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(2)
    
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                viewport={'width': 1440, 'height': 900},
                locale='ar-SA'
            )
            page = await context.new_page()
            await page.goto('http://localhost:5192/', wait_until='networkidle')
            
            # 1. Capture intro reveal showing user's video inside hollow logo
            await asyncio.sleep(2)
            await page.screenshot(
                path='/Users/him.art/.gemini/antigravity-ide/brain/b20e9f47-6855-4245-82ae-50dc4f95fd67/screenshot_intro_user_video.png'
            )
            print("Captured screenshot_intro_user_video.png")

            # 2. Click skip button properly
            skip_btn = page.locator('#skip-intro-btn')
            if await skip_btn.is_visible():
                await skip_btn.click(force=True)
            else:
                await page.evaluate("document.getElementById('skip-intro-btn')?.click()")
            await asyncio.sleep(1.5)

            # 3. Capture full hero section with user's video playing and content visible
            await page.screenshot(
                path='/Users/him.art/.gemini/antigravity-ide/brain/b20e9f47-6855-4245-82ae-50dc4f95fd67/screenshot_hero_user_video.png'
            )
            print("Captured screenshot_hero_user_video.png")

            await browser.close()
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except Exception:
            proc.kill()
        print("Ephemeral server closed cleanly.")

if __name__ == '__main__':
    asyncio.run(verify_new_video())
