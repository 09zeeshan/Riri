const fs = require('fs');

// Patch rules.html
let rulesHtml = fs.readFileSync('public/rules/rules.html', 'utf8');
const rulesStyleInject = `
    .section-background {
      animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      opacity: 0;
      transform: scale(0.9);
    }
    @keyframes popIn {
      to { opacity: 1; transform: scale(1); }
    }
    ul li {
      transition: transform 0.3s ease, background 0.3s ease;
      border-radius: 8px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    ul li:hover {
      transform: translateX(10px) scale(1.02);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: -5px 0 10px rgba(0, 221, 235, 0.3);
    }
    .button {
      animation: pulseBtn 2s infinite alternate;
    }
    @keyframes pulseBtn {
      0% { box-shadow: 0 0 5px rgba(0, 221, 235, 0.2); }
      100% { box-shadow: 0 0 20px rgba(0, 221, 235, 0.6), 0 0 10px rgba(255, 105, 180, 0.4); }
    }
`;
if (!rulesHtml.includes('popIn')) {
    rulesHtml = rulesHtml.replace('</style>', rulesStyleInject + '</style>');
    fs.writeFileSync('public/rules/rules.html', rulesHtml);
}

// Patch moments.html
let momentsHtml = fs.readFileSync('public/moments/moments.html', 'utf8');
const momentsStyleInject = `
<style>
    .section-background {
      animation: floatIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      opacity: 0;
      transform: translateY(50px);
    }
    @keyframes floatIn {
      to { opacity: 1; transform: translateY(0); }
    }
    .sad-face {
      display: inline-block;
      animation: wobble 2.5s infinite;
      font-size: 5em;
      margin-bottom: 10px;
      color: #ff69b4;
    }
    @keyframes wobble {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-10deg) scale(1.1); }
      50% { transform: rotate(10deg) scale(1.1); color: #00ddeb; }
      75% { transform: rotate(-5deg) scale(1.05); }
    }
    .button:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 0 20px rgba(0, 221, 235, 0.6), 0 0 40px rgba(255, 105, 180, 0.4);
    }
</style>
`;
if (!momentsHtml.includes('wobble')) {
    momentsHtml = momentsHtml.replace('</head>', momentsStyleInject + '</head>');
    fs.writeFileSync('public/moments/moments.html', momentsHtml);
}

