const english = {
  skip: 'Skip to content', navProject: "Our product", navContact: 'Get in touch ↗',
  heroEyebrow: "AI LICENSE PLATE RECOGNITION", heroTitle: "Parking starts<br>with <em>recognition.</em>",
  heroDescription: "PARKING BRIDGE is Flowstay’s core product:<br>AI-powered license plate recognition software.<br>We are preparing it for parking environments.",
  heroCta: 'Explore PARKING BRIDGE', heroFootnote: "SOUTH KOREA · IN DEVELOPMENT",
  artCaption: "Parking starts with plate recognition.", artNote: "Concept illustration of a parking environment",
  bandText: 'A better flow.<br>A better place to stay.', bandCaption: 'Thoughtful about every moment in a space.',
  projectSide: "AI license plate recognition by Flowstay", projectStatus: "IN DEVELOPMENT", projectKorean: 'A PROJECT BY FLOWSTAY',
  projectHeading: "AI license plate recognition.<br>PARKING BRIDGE.",
  projectDescription: "PARKING BRIDGE is Flowstay’s core product: AI-powered license plate recognition software. We are preparing the product for parking environments, with vehicle plate recognition at its center.",
  projectDescription2: "Flowstay approaches product development from the perspective of people who manage parking spaces. We focus on understanding where license plate recognition is needed and shaping our product around those needs.",
  projectCta: "Ask about the product",
  contactTitle: "Let’s talk about<br>plate recognition.", contactDescription: "Ask about PARKING BRIDGE,<br>or tell us where you need license plate recognition.",
  contactLabel: "PRODUCT ENQUIRIES", emailCta: 'Send an email', copyCta: 'Copy address',
  emailNote: 'Opens your email app. You can also copy the address.',
  footerDescription: "Preparing PARKING BRIDGE, AI license plate recognition software.", footerStage: "South Korea · PARKING BRIDGE", backTop: 'Back to top'
};
const elements = [...document.querySelectorAll('[data-i18n]')];
const korean = Object.fromEntries(elements.map(element => [element.dataset.i18n, element.innerHTML]));
const languageButton = document.querySelector('[data-language]');
const copyStatus = document.querySelector('[data-copy-status]');
let language = 'ko';
let copyAttempt = 0;

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  const messages = next === 'en' ? english : korean;
  elements.forEach(element => { element.innerHTML = messages[element.dataset.i18n]; });
  languageButton.innerHTML = `${next === 'en' ? 'KO' : 'EN'} <span aria-hidden="true">↗</span>`;
  languageButton.setAttribute('aria-label', next === 'en' ? '한국어로 전환' : 'Switch to English');
  document.querySelector('[data-nav-label]').setAttribute('aria-label', next === 'en' ? 'Main navigation' : '주요 메뉴');
  document.querySelector('[data-band-label]').setAttribute('aria-label', next === 'en' ? 'About Flowstay' : '브랜드 소개');
  document.querySelector('[data-art-label]').setAttribute('aria-label', next === 'en' ? 'PARKING BRIDGE concept illustration: a route connecting parking spaces' : '주차 공간과 연결된 길을 표현한 PARKING BRIDGE 콘셉트 그래픽');
  document.title = next === 'en' ? 'Flowstay — AI License Plate Recognition' : 'Flowstay — AI 차량번호 인식 PARKING BRIDGE';
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'PARKING BRIDGE is Flowstay’s core product: AI-powered license plate recognition software. Explore our product and get in touch.' : 'Flowstay의 주력 제품 PARKING BRIDGE는 AI 기반 차량번호 인식 프로그램입니다. 제품 소개와 문의 안내를 만나보세요.';
  copyStatus.textContent = '';
  copyAttempt++;
  try { localStorage.setItem('flowstay-language', next); } catch { /* The page also works without browser storage. */ }
}

languageButton.addEventListener('click', () => setLanguage(language === 'ko' ? 'en' : 'ko'));
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
