const english = {
  skip: 'Skip to content', navProject: 'Our project', navDirection: 'AI roadmap', navContact: 'Get in touch ↗',
  heroEyebrow: 'A NEW DIRECTION FOR PARKING', heroTitle: 'A better flow.<br>A better place<br>to <em>stay.</em>',
  heroDescription: 'From reports to customer enquiries and product planning.<br>Flowstay is preparing PARKING BRIDGE,<br>with plans to bring AI into parking operations.',
  heroCta: 'Explore PARKING BRIDGE', heroFootnote: 'SOUTH KOREA · PRE-LAUNCH',
  artCaption: 'Connecting places. Thinking in flows.', artNote: 'Concept illustration of our service direction',
  bandText: 'A better flow.<br>A better place to stay.', bandCaption: 'Thoughtful about every moment in a space.',
  projectSide: 'The service we are preparing', projectStatus: 'PRE-LAUNCH · IN PREPARATION', projectKorean: 'A PROJECT BY FLOWSTAY',
  projectHeading: 'Practical AI for<br>everyday parking operations.',
  projectDescription: 'Flowstay is preparing PARKING BRIDGE, a parking management service in South Korea. We plan to use AI to automate operational reports, classify customer enquiries and route them to the responsible departments.',
  projectDescription2: 'We also plan to use AI to help improve our license plate recognition system and suggest parking product configurations, prices and usage conditions. The service is in preparation; the AI capabilities below are planned.',
  projectCta: 'Talk about the project', directionSide: 'Planned AI applications',
  directionTitle: 'Less repetitive work.<br>Better-informed operations.',
  aiIntro: 'We plan to start with Claude for internal development and coding assistance, then apply AI to the four areas below. These AI capabilities are not yet in operational use.',
  principle1Title: 'Automated operational reports', principle1Text: 'We plan to use AI to organize parking operations data and summarize key information in operational reports, aiming to reduce repetitive reporting work.',
  principle2Title: 'Enquiry classification and routing', principle2Text: 'We plan to classify customer enquiries with AI and assign them to the responsible departments based on enquiry type, helping each request reach the right team.',
  principle3Title: 'Improving plate recognition', principle3Text: 'We plan to use AI in the development process to improve our license plate recognition system. Specific methods and their effectiveness will be assessed through development and validation.',
  principle4Title: 'Flexible parking product suggestions', principle4Text: 'We plan to use AI to suggest parking product configurations, prices and usage conditions, helping operators review options and choose how to offer their products.',
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
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'PARKING BRIDGE by Flowstay: planned AI for parking reports, enquiry routing, plate recognition improvements and parking product suggestions.' : 'Flowstay의 PARKING BRIDGE는 AI 기반 운영보고서, 문의 분류·배정, 차량번호 인식 개선, 주차 상품 제안을 준비하는 주차 관리 서비스입니다.';
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
