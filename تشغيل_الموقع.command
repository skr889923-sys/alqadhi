#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=================================================="
echo "    موقع ورد الطائف - دار القاضي (ديوان الورد)     "
echo "=================================================="
echo "جاري تشغيل الموقع الفاخر..."

if command -v npx >/dev/null 2>&1; then
    npx vite preview --port 5173 --open
else
    open "dist/index.html"
fi
