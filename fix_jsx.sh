#!/bin/bash

# Bu script GenIcon fonksiyonunun kullanımını düzeltmek için tasarlandı
# Eski format: return GenIcon(data)(props);
# Yeni format: return <GenIcon data={data} {...props} />;

for dir in gi go gr hi hi2 im io io5 md ri rx si sl tb tfi ti vsc wi bs cg ci di fa fc fi; do
  echo "Düzeltiliyor: $dir/index.tsx"
  # Dosyayı oku
  content=$(cat "$dir/index.tsx")
  
  # return GenIcon(...)(props); formatını return <GenIcon data={...} {...props} />; formatına dönüştür
  # sed komutu bazen uzun metinlerde sorun çıkardığı için awk kullanıyoruz
  awk '{
    if ($0 ~ /return GenIcon\(/) {
      gsub(/return GenIcon\(/, "return <GenIcon data={");
      gsub(/\)\(props\);/, "} {...props} />;");
      print;
    } else {
      print;
    }
  }' "$dir/index.tsx" > "$dir/index.tsx.tmp"
  
  # Değişiklikleri uygula
  mv "$dir/index.tsx.tmp" "$dir/index.tsx"
done

echo "Tüm dosyalar düzeltildi!"
