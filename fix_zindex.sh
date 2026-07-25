for file in $(find public -name "*.html"); do
  sed -i 's/z-index: -9999;/z-index: 9999;/g' "$file"
  sed -i 's/<\/style>/ .dg { display: none !important; } .promo { display: none !important; }<\/style>/g' "$file"
done
