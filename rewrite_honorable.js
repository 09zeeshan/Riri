const fs = require('fs');

const honorableHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Riri Land - Royal Agents</title>
  <meta name="description" content="Profiles of top-ranked Madaris in the Riri Land community.">
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
      <h1 class="honorable-header">Top Ranked Madaris</h1>
      
      <div class="user-container">
        
        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/baraa.jpg" alt="Baraa">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/988716458253123584" class="user-name">Baraa</a>
            <p class="user-description">"My enemies are many, my equals are none."</p>
            <div class="badge-container">
              <img src="badges/baraicon.png" alt="Baraa Icon" class="badge-icon">
              <img src="badges/level_50.png" alt="Level 50" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>
        
        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/street.jpg" alt="Shady">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/730088436291076097" class="user-name">Shady</a>
            <p class="user-description">"Your fav Austrian painter."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_100.png" alt="Level 100" class="badge-icon">
              <img src="badges/level_50.png" alt="Level 50" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/shah.jpg" alt="Shah">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/948261448491094076" class="user-name">Shah</a>
            <p class="user-description">"If life fucks you, just moan."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/arshifa.jpg" alt="Arshifa">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/1193973211579297913" class="user-name">Arshifa</a>
            <p class="user-description">"Your trusted tech partner."</p>
            <div class="badge-container">
              <img src="badges/techagent.png" alt="Tech Agent" class="badge-icon">
              <img src="badges/level_50.png" alt="Level 50" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>
        
        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/uzma.jpg" alt="Uzma">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/1119293448420331621" class="user-name">Uzma</a>
            <p class="user-description">"Why did you redeem it niggesh."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_50.png" alt="Level 50" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/rose.jpg" alt="Rosie">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/1148283568464859208" class="user-name">Rosie</a>
            <p class="user-description">"I don’t even fuck around, but I always find out."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/saad.jpg" alt="Saad">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/928813286512795688" class="user-name">Saad</a>
            <p class="user-description">"I will sacrifice my life for Pakistan."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_50.png" alt="Level 50" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>
        
        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/jude.jpg" alt="Jude">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/988716458253123584" class="user-name">Jude</a>
            <p class="user-description">"Busy being a doctor, I don’t talk to lower level."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/level_20.png" alt="Level 20" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

        <div class="user-row">
          <div class="user-image-wrap">
            <img src="pfp/pat.jpg" alt="Pat">
          </div>
          <div class="user-details">
            <a href="https://discord.com/users/988716458253123584" class="user-name">Pat</a>
            <p class="user-description">"Work Work Work Work Work."</p>
            <div class="badge-container">
              <img src="badges/royal_agent.png" alt="Royal Agent" class="badge-icon">
              <img src="badges/riri_squad.png" alt="Riri Squad" class="badge-icon">
            </div>
          </div>
        </div>

      </div>

      <div class="back-button-container">
        <a href="../home.html" class="button">Back to Home</a>
      </div>
    </div>
  </main>

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.user-row').forEach((row, i) => {
      row.style.transitionDelay = \`\${i * 100}ms\`;
      observer.observe(row);
    });
  </script>
  
  <!-- Add canvas logic -->
  <script src="/dat.gui.min.js"></script>
  <script src="/script.js"></script>
</body>
</html>`;

fs.writeFileSync('public/honorable/honorable.html', honorableHTML);
