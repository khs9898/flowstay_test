const english = {
  skip: 'Skip to content', navProject: "Our service", navDirection: "In development", navContact: 'Get in touch ↗',
  heroEyebrow: 'A NEW DIRECTION FOR PARKING', heroTitle: 'A better flow.<br>A better place<br>to <em>stay.</em>',
  heroDescription: "Less time on routine parking tasks.<br>More room for thoughtful decisions.<br>Meet PARKING BRIDGE, in preparation at Flowstay.",
  heroCta: 'Explore PARKING BRIDGE', heroFootnote: 'SOUTH KOREA · PRE-LAUNCH',
  artCaption: 'Connecting places. Thinking in flows.', artNote: 'Concept illustration of our service direction',
  bandText: 'A better flow.<br>A better place to stay.', bandCaption: 'Thoughtful about every moment in a space.',
  projectSide: "A parking management service by Flowstay", projectStatus: 'PRE-LAUNCH · IN PREPARATION', projectKorean: 'A PROJECT BY FLOWSTAY',
  projectHeading: "Making everyday parking<br>operations simpler.",
  projectDescription: "Flowstay focuses on the people who manage parking spaces. We are preparing PARKING BRIDGE to reduce repetitive work and make operational information easier to understand.",
  projectDescription2: "From reports and customer enquiries to plate recognition, product planning and business feasibility, we are building toward a service that connects everyday operations with business decisions.",
  projectCta: "Ask about the service", directionSide: "PARKING BRIDGE · IN DEVELOPMENT",
  directionTitle: "From everyday tasks<br>to your next business decision.",
  aiIntro: "We are preparing features around the work parking operators do every day, with the aim of supporting routine management and helping them explore new ways to operate.",
  principle1Title: "Automated operational reports", principle1Text: "We are preparing reports that organize operational data and summarize what matters, with the aim of reducing repetitive paperwork and making operations easier to understand.",
  principle2Title: "Customer enquiry routing", principle2Text: "We are preparing a workflow to classify incoming enquiries by type and connect them with the responsible department, helping each request reach the right team.",
  principle3Title: "Better plate recognition", principle3Text: "We aim to improve our license plate recognition system to reduce the effort of checking vehicle numbers on site, refining the recognition experience for parking operations.",
  principle4Title: "Parking product suggestions", principle4Text: "We are preparing suggestions for product configurations, prices and usage conditions, helping operators consider and choose products that suit their operating needs.",
  principle5Title: "Parking business feasibility", principle5Text: "We are preparing tools to organize and analyze information for evaluating parking ventures, providing a reference for decisions about business direction and whether to proceed.",
  contactTitle: 'Let’s talk about<br>a better flow.', contactDescription: "Ask about our upcoming service,<br>or tell us what you need in parking operations.",
  contactLabel: "SERVICE ENQUIRIES", emailCta: 'Send an email', copyCta: 'Copy address',
  emailNote: 'Opens your email app. You can also copy the address.',
  footerDescription: 'Preparing PARKING BRIDGE, a parking management service.', footerStage: "South Korea · PARKING BRIDGE", backTop: 'Back to top'
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
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'Flowstay is preparing PARKING BRIDGE to support everyday parking operations and business decisions. Explore our service and upcoming features.' : 'Flowstay는 주차 운영의 일상과 사업의 의사결정을 돕는 주차 관리 서비스 PARKING BRIDGE를 준비합니다. 서비스 소개와 준비 중인 기능을 만나보세요.';
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
