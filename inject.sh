for file in $(find public -name "*.html"); do
  sed -i 's/<\/body>/<style>body, html { background: transparent !important; } #fluid-bg-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); z-index: -10000; pointer-events: none; } canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -9999; pointer-events: none; }<\/style><div id="fluid-bg-container"><\/div><canvas><\/canvas><script src="\/dat.gui.min.js"><\/script><script src="\/script.js"><\/script><\/body>/g' "$file"
done
