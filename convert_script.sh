#!/bin/bash

# Bu script .js dosyalarını .tsx'e dönüştürür
# ve export function X (props) yapısını export const X: IconType = (props) => şeklinde değiştirir

if [ -z "$1" ]; then
  echo "Kullanım: $0 <klasör_adı>"
  exit 1
fi

FOLDER=$1

if [ ! -d "$FOLDER" ]; then
  echo "$FOLDER klasörü bulunamadı"
  exit 1
fi

# index.js dosyasını oku
JS_FILE="$FOLDER/index.js"
if [ ! -f "$JS_FILE" ]; then
  echo "$JS_FILE dosyası bulunamadı"
  exit 1
fi

# İlk satırları oku (header)
HEADER=$(head -n 2 "$JS_FILE")

# export function X (props) şablonunu export const X: IconType = (props) => şekline çevir
CONTENT=$(cat "$JS_FILE" | sed -E 's/export function ([A-Za-z0-9_]+) \(props\)/export const \1: IconType = \(props\) =>/g')

# Dosyayı .tsx olarak kaydet
TSX_FILE="$FOLDER/index.tsx"
echo "$HEADER" > "$TSX_FILE"
echo "import { IconType } from '../lib';" >> "$TSX_FILE"
echo "" >> "$TSX_FILE"
echo "$CONTENT" | tail -n +3 >> "$TSX_FILE"

echo "$JS_FILE dosyası $TSX_FILE dosyasına dönüştürüldü."
