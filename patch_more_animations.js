const fs = require('fs');

// Patch staff.html
let staffHtml = fs.readFileSync('public/staff/staff.html', 'utf8');
const staffStyleInject = `
    .staff-member {
      animation: floatIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      opacity: 0;
      transform: translateY(50px);
    }
    @keyframes floatIn {
      to { opacity: 1; transform: translateY(0); }
    }
    .flip-card img {
      transition: transform 0.5s ease, filter 0.5s ease;
    }
    .flip-card img:hover {
      transform: scale(1.08) rotate(2deg);
      filter: brightness(1.1);
    }
    .read-more, .back-btn {
      box-shadow: 0 0 10px rgba(0, 221, 235, 0.2);
    }
    .read-more:hover, .back-btn:hover {
      box-shadow: 0 0 20px rgba(0, 221, 235, 0.6), 0 0 30px rgba(255, 105, 180, 0.4);
    }
`;
if (!staffHtml.includes('floatIn')) {
    staffHtml = staffHtml.replace('</style>', staffStyleInject + '</style>');
    fs.writeFileSync('public/staff/staff.html', staffHtml);
}

// Patch honorable.html
let honorableHtml = fs.readFileSync('public/honorable/honorable.html', 'utf8');
const honorableStyleInject = `
    .user-card {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    }
    .user-card:hover {
      transform: translateY(-8px) scale(1.02) !important;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 105, 180, 0.4);
      z-index: 10;
    }
    .user-image {
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    .user-card:hover .user-image {
      transform: scale(1.1) rotate(-3deg);
      box-shadow: 0 0 20px rgba(0, 221, 235, 0.6);
    }
    .badge-icon {
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .badge-icon:hover {
      transform: scale(1.3) rotate(5deg);
    }
    .honorable-header {
      animation: glowPulseHeader 2s infinite alternate;
    }
    @keyframes glowPulseHeader {
      0% { text-shadow: 0 0 10px rgba(255, 105, 180, 0.5); }
      100% { text-shadow: 0 0 20px rgba(0, 221, 235, 0.8), 0 0 30px rgba(255, 105, 180, 0.6); }
    }
`;
if (!honorableHtml.includes('glowPulseHeader')) {
    honorableHtml = honorableHtml.replace('</style>', honorableStyleInject + '</style>');
    fs.writeFileSync('public/honorable/honorable.html', honorableHtml);
}

