#!/bin/bash

# Bu script, tüm dizinlerdeki index.tsx dosyalarını kontrol eder ve
# "child" özelliğini bir dizi formatına dönüştürür

# Genel değişkenler
DIRECTORIES=("ai" "bi" "bs" "cg" "ci" "di" "fa" "fc" "fi" "gi" "go" "gr" "hi" "hi2" "im" "io" "io5" "md" "ri" "rx" "si" "sl" "tb" "tfi" "ti" "vsc" "wi")

for dir in "${DIRECTORIES[@]}"; do
  if [ -f "$dir/index.tsx" ]; then
    echo "Fixing $dir/index.tsx..."
    
    # Değişiklik 1: "child":[{...}] formatını "child":[{...}] şeklinde dizi içine al
    perl -i -pe 's/"child":\{"tag"/"child":\[\{"tag"/g' "$dir/index.tsx"
    perl -i -pe 's/}\}\} \{\.\.\.props\} \/>/}\}\]\} \{\.\.\.props\} \/>/g' "$dir/index.tsx"

    # Değişiklik 2: "child":{"tag" formatını "child":[{"tag" şeklinde dizi içine al
    perl -i -pe 's/"child":\{"tag"/"child":\[\{"tag"/g' "$dir/index.tsx"
    
    # Değişiklik 3: Son kapanış parantezini dizi kapanışı olarak değiştir
    perl -i -pe 's/}\}} \{\.\.\.props\} \/>/}\}\]\} \{\.\.\.props\} \/>/g' "$dir/index.tsx"
  fi
done

echo "Tamamlandı!"
