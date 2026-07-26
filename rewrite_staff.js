const fs = require('fs');

const staffHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Riri Land - Arifa</title>
  <meta name="description" content="Arifa - Majesty of Riri Land">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">
  
  <style>
    body, html { margin: 0; padding: 0; min-height: 100vh; }
    .dg, .promo { display: none !important; }
  </style>

  <!-- Placeholder for the injected aesthetic override -->
  <style id="aesthetic-override"></style>
</head>
<body>
  <div id="fluid-bg-container"></div>
  <canvas></canvas>

  <main class="section-background">
    <div class="content-wrapper">
      <h2>Majesty of Riri Land</h2>
      
      <div class="staff-profile">
        <img src="arifa.jpg" alt="Arifa">
        
        <div class="user-details" style="text-align: center;">
          <h3 class="user-name" style="font-size: 2.5em !important; display: inline-block;">Arifa</h3>
          <p class="user-description" style="font-size: 1.2em !important; margin-top: 10px !important;">"Fuck around, find out"</p>
          
          <div class="staff-badges">
            <img src="../honorable/badges/majesty.png" alt="Majesty" class="badge-icon">
          </div>
        </div>
      </div>
      
      <div class="back-button-container">
        <a href="../home.html" class="button">Back to Home</a>
      </div>
    </div>
  </main>
  
  <script src="/dat.gui.min.js"></script>
  <script src="/script.js"></script>
</body>
</html>`;

fs.writeFileSync('public/staff/staff.html', staffHTML);
