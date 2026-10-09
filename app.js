const english = {
  skip: 'Skip to content', navProject: 'Our project', navDirection: 'Our approach', navContact: 'Get in touch ↗',
  heroEyebrow: 'A NEW DIRECTION FOR PARKING', heroTitle: 'A better flow.<br>A better place<br>to <em>stay.</em>',
  heroDescription: 'Parking connects people and places.<br>Flowstay is preparing PARKING BRIDGE,<br>a parking management service in South Korea.',
  heroCta: 'Explore PARKING BRIDGE', heroFootnote: 'SOUTH KOREA · PRE-LAUNCH',
  artCaption: 'Connecting places. Thinking in flows.', artNote: 'Concept illustration of our service direction',
  bandText: 'A better flow.<br>A better place to stay.', bandCaption: 'Thoughtful about every moment in a space.',
  projectSide: 'The service we are preparing', projectStatus: 'PRE-LAUNCH · IN PREPARATION', projectKorean: 'A PROJECT BY FLOWSTAY',
  projectHeading: 'A new connection.<br>A thoughtful approach to parking.',
  projectDescription: 'PARKING BRIDGE is a parking management service being prepared by Flowstay. We are shaping its direction by considering what matters in day-to-day parking operations.',
  projectDescription2: 'From understanding everyday friction to envisioning a better operating experience, we aim to create a service that brings parking spaces and operations closer together.',
  projectCta: 'Talk about the project', directionSide: 'How we approach the work',
  directionTitle: 'Better operations begin<br>with understanding.',
  principle1Title: 'Start with the context', principle1Text: 'Our starting point is understanding the spaces and everyday context in which parking is managed.',
  principle2Title: 'Make the flow clearer', principle2Text: 'We are exploring how a service can make complex parking operations easier to understand and navigate.',
  principle3Title: 'Build step by step', principle3Text: 'Incorporated in September 2026, we are shaping our service and preparing for what comes next.',
  contactTitle: 'Let’s talk about<br>a better flow.', contactDescription: 'Questions or ideas about Flowstay<br>and PARKING BRIDGE? Get in touch.',
  contactLabel: 'PROJECT ENQUIRIES', emailCta: 'Send an email', copyCta: 'Copy address',
  emailNote: 'Opens your email app. You can also copy the address.',
  footerDescription: 'Preparing PARKING BRIDGE, a parking management service.', footerStage: 'South Korea · Incorporated Sep 2026', backTop: 'Back to top'
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
  document.title = next === 'en' ? 'Flowstay — A better flow for parking' : 'Flowstay — 주차 운영의 다음 흐름';
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'Flowstay is preparing PARKING BRIDGE, a parking management service in South Korea. Explore our project and approach.' : 'Flowstay는 주차 관리 서비스 PARKING BRIDGE를 준비합니다. 주차 운영의 다음 흐름을 함께 만들어갑니다.';
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
