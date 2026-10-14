const english = {
  "skip": "Skip to content",
  "navAbout": "About us",
  "navServices": "Services",
  "navContact": "Contact",
  "heroTitle": "Premium parking solutions.<br>Greater value for your space.",
  "heroDescription": "Flowstay brings data and technology together<br>to provide parking operations and consulting services.",
  "heroCta": "Explore our services",
  "consultCta": "Consult with us",
  "imageCaption": "Connecting spaces, technology and operations.",
  "aboutTitle": "Your partner in<br>better parking operations.",
  "aboutDescription": "Flowstay looks beyond day-to-day parking management to the value of each space. We combine data analysis and parking management technology to propose solutions suited to each client and site.",
  "aboutDescription2": "Our understanding of parking operations, consulting and system implementation also informs PARKING BRIDGE, our AI license plate recognition software.",
  "aboutCta": "Discover our services",
  "servicesTitle": "Professional parking solutions<br>from Flowstay.",
  "servicesDescription": "We consider the character of your space and its operating environment to find an approach that fits.",
  "service1Title": "Parking operations",
  "service1Text": "We work with you on operating plans and site management suited to the needs of your parking facility.",
  "service1Tag": "Operating plans · Site management",
  "service2Title": "Profitability consulting",
  "service2Text": "We review operating data and usage patterns to assess the revenue structure and opportunities for improvement.",
  "service2Tag": "Operational analysis · Recommendations",
  "service3Title": "Parking management systems",
  "service3Text": "We propose management systems based on the size of your facility and its operating needs.",
  "service3Tag": "Systems suited to your site",
  "service4Title": "Facility improvements",
  "service4Text": "We review facilities and traffic flow to suggest improvements for a more convenient parking environment.",
  "service4Tag": "Facility improvements · Space design",
  "service5Title": "Coordinated management",
  "service5Text": "We consider the full range of operational tasks, including monitoring, customer enquiries and on-site response.",
  "service5Tag": "Monitoring · Enquiries · Site response",
  "service6Title": "Remote service support",
  "service6Text": "We propose simpler ways to handle recurring tasks such as passes, discount vouchers and user enquiries.",
  "service6Tag": "Passes · Vouchers · User information",
  "service7Title": "Operations for your building",
  "service7Text": "We propose parking operations that reflect how your building is used and the needs of its visitors.",
  "service7Tag": "Building-specific operations · Space value",
  "service8Title": "Parking development consulting",
  "service8Text": "We work with you to review development options for parking buildings, vacant land and other site types.",
  "service8Tag": "Site assessment · Development options",
  "productLabel": "AI LICENSE PLATE RECOGNITION",
  "productHeading": "Smarter parking starts<br>with plate recognition.",
  "productDescription": "PARKING BRIDGE is Flowstay’s core product: AI-powered license plate recognition software focused on recognizing vehicle plates in parking environments.",
  "productDescription2": "We focus on understanding site requirements and developing recognition technology and products for parking operations.",
  "productCta": "Ask about PARKING BRIDGE",
  "visualCaption": "License plate recognition concept illustration",
  "contactTitle": "Start a conversation<br>with Flowstay.",
  "contactDescription": "Let’s explore how to improve your parking operations<br>and the value of your space.",
  "topic1": "Operations & consulting",
  "topic2": "System implementation",
  "contactLabel": "EMAIL ENQUIRIES",
  "contactPrompt": "Tell us about your space.",
  "contactHelp": "Share your operational needs or ask us about our product.",
  "emailCta": "Enquire by email",
  "copyCta": "Copy address",
  "emailNote": "Opens your email app. You can also copy the address.",
  "footerDescription": "Bringing together data, technology and operational insight<br>to enhance the value of parking spaces.",
  "footerServices": "OUR SERVICES",
  "footerService1": "Parking operations",
  "footerService2": "Profitability consulting",
  "footerService3": "Management systems",
  "footerProduct": "OUR PRODUCT",
  "footerLpr": "AI license plate recognition software",
  "footerContact": "CONTACT",
  "backTop": "Back to top ↑"
};
const elements = [...document.querySelectorAll('[data-i18n]')];
const korean = Object.fromEntries(elements.map(element => [element.dataset.i18n, element.innerHTML]));
const languageButton = document.querySelector('[data-language]');
const menuButton = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav-label]');
const copyStatus = document.querySelector('[data-copy-status]');
let language = 'ko';
let copyAttempt = 0;

function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', language === 'en' ? 'Open menu' : '메뉴 열기');
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  const messages = next === 'en' ? english : korean;
  elements.forEach(element => { element.innerHTML = messages[element.dataset.i18n]; });
  languageButton.textContent = next === 'en' ? 'KO' : 'EN';
  languageButton.setAttribute('aria-label', next === 'en' ? '한국어로 전환' : 'Switch to English');
  nav.setAttribute('aria-label', next === 'en' ? 'Main navigation' : '주요 메뉴');
  document.querySelector('[data-art-label]').setAttribute('aria-label', next === 'en' ? 'PARKING BRIDGE license plate recognition concept illustration' : 'PARKING BRIDGE 차량번호 인식 콘셉트 그래픽');
  document.title = next === 'en' ? 'Flowstay — Premium Parking Solutions' : 'Flowstay — 공간의 가치를 높이는 주차 솔루션';
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'Parking operations, consulting and AI license plate recognition. Explore Flowstay services and our core product PARKING BRIDGE.' : '공간의 가치를 높이는 프리미엄 주차 솔루션. Flowstay의 주차 운영·컨설팅 서비스와 AI 차량번호 인식 프로그램 PARKING BRIDGE를 소개합니다.';
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  closeMenu();
  copyStatus.textContent = '';
  copyAttempt++;
  try { localStorage.setItem('flowstay-language', next); } catch { /* The page works without browser storage. */ }
}
languageButton.addEventListener('click', () => setLanguage(language === 'ko' ? 'en' : 'ko'));
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', language === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? '메뉴 닫기' : '메뉴 열기'));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.querySelector('[data-copy]').addEventListener('click', async () => {
  const attempt = ++copyAttempt;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('steve@flowstay.co.kr');
    if (attempt === copyAttempt) copyStatus.textContent = language === 'en' ? 'Email address copied.' : '이메일 주소를 복사했습니다.';
  } catch {
    if (attempt === copyAttempt) copyStatus.textContent = language === 'en' ? 'Please select and copy: steve@flowstay.co.kr' : '주소를 선택해 복사해 주세요: steve@flowstay.co.kr';
  }
});
document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
try { if (localStorage.getItem('flowstay-language') === 'en') setLanguage('en'); } catch { /* Korean remains the default. */ }
