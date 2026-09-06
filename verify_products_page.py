import asyncio
import subprocess
import time
import os
from playwright.async_api import async_playwright

async def run_verification():
    # Start ephemeral vite preview
    proc = subprocess.Popen(
        ['npx', 'vite', 'preview', '--port', '5188'],
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
            await page.goto('http://localhost:5188/', wait_until='networkidle')
            await asyncio.sleep(1)

            # Skip intro immediately
            skip_btn = page.locator('#btn-skip-intro')
            if await skip_btn.is_visible():
                await skip_btn.click()
            await asyncio.sleep(1.5)

            # Scroll to products section
            await page.evaluate("document.getElementById('products').scrollIntoView({ behavior: 'instant' })")
            await asyncio.sleep(1)

            # Screenshot top of products section (header, search bar, filter tabs, first row)
            products_sec = page.locator('#products')
            await page.screenshot(
                path='/Users/him.art/.gemini/antigravity-ide/brain/b20e9f47-6855-4245-82ae-50dc4f95fd67/screenshot_real_products_header_and_search.png'
            )
            print("Captured screenshot_real_products_header_and_search.png")

            # Click on 'العطور الخاصة' filter
            perfume_filter = page.locator('.filter-btn[data-filter="perfume"]')
            await perfume_filter.click()
            await asyncio.sleep(0.8)
            await page.screenshot(
                path='/Users/him.art/.gemini/antigravity-ide/brain/b20e9f47-6855-4245-82ae-50dc4f95fd67/screenshot_perfume_category_filter.png'
            )
            print("Captured screenshot_perfume_category_filter.png")

            # Click 'كافة المقتنيات' to reset
            await page.locator('.filter-btn[data-filter="all"]').click()
            await asyncio.sleep(0.5)

            # Open quick view modal using DOM trigger or force click
            first_card = page.locator('.product-card').first
            await first_card.hover()
            await asyncio.sleep(0.5)
            first_quick_view = page.locator('.btn-quick-view').first
            await first_quick_view.click(force=True)
            await asyncio.sleep(1)
            await page.screenshot(
                path='/Users/him.art/.gemini/antigravity-ide/brain/b20e9f47-6855-4245-82ae-50dc4f95fd67/screenshot_product_quickview_modal.png'
            )
            print("Captured screenshot_product_quickview_modal.png")

            await browser.close()
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except Exception:
            proc.kill()
        print("Server terminated successfully.")

if __name__ == '__main__':
    asyncio.run(run_verification())
