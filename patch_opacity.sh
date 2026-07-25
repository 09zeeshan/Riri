for file in $(find public -name "*.html"); do
  sed -i 's/canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; pointer-events: none; }/canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; pointer-events: none; opacity: 0.5; mix-blend-mode: screen; }/g' "$file"
done
