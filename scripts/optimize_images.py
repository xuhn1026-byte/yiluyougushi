#!/usr/bin/env python3
"""
坤瑞网站图片优化脚本
- 压缩大图片到合适尺寸
- 转换 PNG 到 WebP 格式（节省 30-50% 体积）
"""

from PIL import Image
import os
from pathlib import Path

# 图片目录
IMAGES_DIR = Path("C:/Users/小香猪/Desktop/kunray-website/assets/images")
ASSETS_DIR = Path("C:/Users/小香猪/Desktop/kunray-website/assets")

def compress_image(input_path, output_path=None, max_width=1200, quality=85):
    """压缩单张图片"""
    if output_path is None:
        output_path = input_path

    with Image.open(input_path) as img:
        # 转换为 RGB（处理 PNG 等带透明通道的图片）
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')

        # 计算新尺寸
        width, height = img.size
        if width > max_width:
            ratio = max_width / width
            new_height = int(height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

        # 保存（JPG 格式，质量 85%）
        if output_path.suffix.lower() in ['.png']:
            # PNG 保持原格式但优化
            img.save(output_path, optimize=True)
        else:
            img.save(output_path, quality=quality, optimize=True)

        return output_path

def create_webp(input_path, output_path, max_width=1200, quality=80):
    """创建 WebP 版本"""
    with Image.open(input_path) as img:
        # 转换为 RGB
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')

        # 计算新尺寸
        width, height = img.size
        if width > max_width:
            ratio = max_width / width
            new_height = int(height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

        # 保存为 WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)
        return output_path

def create_favicon():
    """创建 favicon.ico"""
    # 从 SVG 创建（使用文本代替）
    sizes = [16, 32, 48, 64]
    images = []

    for size in sizes:
        # 创建绿色背景圆形
        img = Image.new('RGB', (size, size), color=(46, 125, 50))  # #2E7D32
        images.append(img)

    # 保存为 favicon.ico
    favicon_path = ASSETS_DIR / "favicon.ico"
    images[0].save(favicon_path, format='ICO', sizes=[(16,16), (32,32), (48,48)])
    print(f"✓ 创建 favicon: {favicon_path}")
    return favicon_path

def main():
    # 需要压缩的大图片（> 500KB）
    large_images = [
        "hangzhou-aerial.png",
        "hangzhou-meeting1.png",
        "hangzhou-meeting2.png",
        "danzhou-rubber-trees.jpg",
        "danzhou-aerial1.jpg",
        "danzhou-aerial2.jpg",
        "lab.png",
        "building-2.jpg",
        "building-1.jpg",
        "kunray-sign.jpg"
    ]

    print("开始优化图片...\n")

    # 创建 WebP 目录
    webp_dir = IMAGES_DIR / "webp"
    webp_dir.mkdir(exist_ok=True)

    total_saved = 0

    for img_name in large_images:
        img_path = IMAGES_DIR / img_name
        if not img_path.exists():
            print(f"⚠ 跳过: {img_name} (不存在)")
            continue

        original_size = img_path.stat().st_size

        # 压缩原图
        compress_image(img_path, max_width=1200)

        # 创建 WebP 版本
        webp_name = img_path.stem + ".webp"
        webp_path = webp_dir / webp_name
        create_webp(img_path, webp_path, max_width=1200)

        new_size = img_path.stat().st_size
        saved = original_size - new_size
        total_saved += saved

        print(f"✓ {img_name}: {original_size/1024:.0f}KB → {new_size/1024:.0f}KB (WebP: {webp_path.stat().st_size/1024:.0f}KB)")

    # 创建 favicon
    create_favicon()

    print(f"\n总共节省: {total_saved/1024:.0f}KB")
    print("优化完成!")

if __name__ == "__main__":
    main()
