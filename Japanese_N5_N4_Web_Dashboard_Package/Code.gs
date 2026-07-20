
const APP_NAME = 'Japanese N5–N4 Study Dashboard';
const DATA_FILE_NAME = 'Japanese N5–N4 Study Dashboard Data';

const DEFAULT_SETTINGS = {
  startDate: Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Asia/Bangkok', 'yyyy-MM-dd'),
  dailyMinutes: 45,
  daysPerWeek: 5,
  targetHours: 180,
  targetVocab: 1500,
  targetKanji: 300,
  targetGrammar: 180,
  targetMock: 70
};

const ROADMAP = [
  [1, 'พื้นฐาน', 'ฮิรางานะ คาตากานะ การออกเสียง และประโยคเบื้องต้น', 'Kana ≥90%, คำศัพท์ 150, คันจิ 30', 'Minato + YouTube', 'อ่าน Kana และแนะนำตัว 1 นาที'],
  [2, 'N5', 'ไวยากรณ์พื้นฐาน คำช่วย กริยา ます/です และคำถาม', 'คำศัพท์สะสม 350, คันจิ 70, ไวยากรณ์ 35', 'Marugoto + Tae Kim', 'แต่งประโยค 10 ประโยค'],
  [3, 'N5', 'จบไวยากรณ์ N5 ฝึกฟังและอ่านเรื่องสั้น', 'คำศัพท์สะสม 650, คันจิ 120, ไวยากรณ์ 70', 'JLPT Sensei + Shun + Tadoku', 'Mock N5 ครั้งที่ 1 ≥60%'],
  [4, 'N5 → N4', 'ทบทวน N5 ทำ Mock Test และเริ่ม N4', 'Mock N5 ≥70%, เริ่ม N4 20 จุด', 'JLPT Official + Bunpro', 'Mock N5 2 ครั้ง'],
  [5, 'N4', 'ไวยากรณ์ N4 คำศัพท์และคันจิระดับกลางต้น', 'คำศัพท์สะสม 1000, คันจิ 200, ไวยากรณ์ 120', 'IRODORI + Renshuu', 'พูดเรื่องอดีต/แผน 2 นาที'],
  [6, 'N4', 'อ่านยาวขึ้น ฟังบทสนทนาความเร็วปกติ', 'คำศัพท์สะสม 1250, คันจิ 250, ไวยากรณ์ 150', 'Tadoku + NHK + Shun', 'Reading/Listening ≥65%'],
  [7, 'N4', 'ทำข้อสอบจำลองและแก้จุดอ่อนเป็นรายทักษะ', 'Mock N4 3 ครั้ง คะแนนเฉลี่ย ≥65%', 'JLPT Official + Nihongo no Mori', 'ทำ Error Log ทุกครั้ง'],
  [8, 'N4 พร้อมสอบ', 'ทบทวนคำศัพท์ คันจิ ไวยากรณ์ และทำข้อสอบเต็มชุด', 'คำศัพท์ 1500, คันจิ 300, ไวยากรณ์ 180, Mock ≥70%', 'SRS + Mock Test', 'Mock N4 3 ชุดล่าสุด ≥70%']
];

const RESOURCES = [
  ['เว็บไซต์','JLPT Official Sample Questions','ข้อสอบตัวอย่างและรูปแบบข้อสอบ','N5–N4','ฟรี','หลัก','https://www.jlpt.jp/e/samples/forlearners.html'],
  ['เว็บไซต์','JF Japanese e-Learning Minato','คอร์สเรียนเป็นระบบ','เริ่มต้น–N4','ฟรี/บางคอร์ส','หลัก','https://minato-jf.jp/'],
  ['เว็บไซต์','Marugoto e-Learning','บทเรียนภาษาและวัฒนธรรม','N5–N4','ฟรี','หลัก','https://marugoto.jpf.go.jp/en/e-learning/'],
  ['เว็บไซต์','IRODORI Japanese for Life in Japan','ฟัง พูด อ่าน เขียนในชีวิตจริง','N5–N4','ฟรี','หลัก','https://www.irodori.jpf.go.jp/en/'],
  ['เว็บไซต์',"Erin's Challenge",'บทสนทนาและวัฒนธรรมผ่านวิดีโอ','N5–N4','ฟรี','เสริม','https://www.erin.jpf.go.jp/en/'],
  ['เว็บไซต์','NHK Easy Japanese','บทสนทนาและการฟังสำหรับผู้เริ่มต้น','N5–N4','ฟรี','หลัก','https://www.nhk.or.jp/lesson/en/'],
  ['เว็บไซต์','NIHONGO eな','ศูนย์รวมเว็บและแอปเรียนญี่ปุ่น','ทุกระดับ','ฟรี','เสริม','https://nihongo-e-na.com/'],
  ['เว็บไซต์',"Tae Kim's Guide",'ไวยากรณ์พื้นฐานแบบเป็นลำดับ','N5–N4','ฟรี','หลัก','https://guidetojapanese.org/learn/'],
  ['เว็บไซต์','JLPT Sensei','รายการไวยากรณ์ คำศัพท์ คันจิ','N5–N4','ฟรีบางส่วน','หลัก','https://jlptsensei.com/'],
  ['เว็บไซต์','Bunpro','ทบทวนไวยากรณ์ด้วย SRS','N5–N4','เสียเงิน/ทดลอง','เสริม','https://bunpro.jp/'],
  ['เว็บไซต์','Renshuu','คำศัพท์ คันจิ ไวยากรณ์ แบบเกม','N5–N4','ฟรีบางส่วน','หลัก','https://www.renshuu.org/'],
  ['เว็บไซต์','WaniKani','คันจิและคำศัพท์ด้วย SRS','N5–N4','ฟรีบางระดับ','เสริม','https://www.wanikani.com/'],
  ['เว็บไซต์','Jisho','พจนานุกรมญี่ปุ่น–อังกฤษ','ทุกระดับ','ฟรี','เครื่องมือ','https://jisho.org/'],
  ['เว็บไซต์','Tadoku Free Graded Readers','อ่านเรื่องง่ายแบบไล่ระดับ','N5–N4','ฟรี','หลัก','https://tadoku.org/japanese/en/free-books-en/'],
  ['เว็บไซต์','Satori Reader','อ่านและฟังเรื่องพร้อมคำอธิบาย','N4+','ฟรีบางส่วน','เสริม','https://www.satorireader.com/'],
  ['YouTube','Japanese Ammo with Misa','ไวยากรณ์ละเอียดสำหรับผู้เริ่มต้น','N5–N4','ฟรี','หลัก','https://www.youtube.com/@JapaneseAmmowithMisa'],
  ['YouTube','Nihongo no Mori','ติว JLPT และไวยากรณ์','N5–N4','ฟรี','หลัก','https://www.youtube.com/@nihongonomori2013'],
  ['YouTube','Japanese with Shun','ฟังภาษาญี่ปุ่นง่ายและเป็นธรรมชาติ','N5–N4','ฟรี','หลัก','https://www.youtube.com/@JapanesewithShun'],
  ['YouTube','Comprehensible Japanese','ฟังจากภาพและบริบท','เริ่มต้น–N4','ฟรี','หลัก','https://www.youtube.com/@cijapanese'],
  ['YouTube','Miku Real Japanese','บทสนทนาและภาษาญี่ปุ่นใช้จริง','N5–N4','ฟรี','เสริม','https://www.youtube.com/@mikurealjapanese'],
  ['YouTube','ToKini Andy','บทเรียน Genki และไวยากรณ์เป็นระบบ','N5–N4','ฟรีบางส่วน','หลัก','https://www.youtube.com/@ToKiniAndy'],
  ['YouTube','Game Gengo','ไวยากรณ์ JLPT ผ่านเกม','N5–N4','ฟรี','เสริม','https://www.youtube.com/@GameGengo'],
  ['YouTube','JapanesePod101','บทเรียนเสียงและวิดีโอสั้น','N5–N4','ฟรีบางส่วน','เสริม','https://www.youtube.com/@JapanesePod101'],
  ['YouTube','Learn Japanese with Tanaka san','คำศัพท์และประโยคพื้นฐาน','N5–N4','ฟรี','เสริม','https://www.youtube.com/@japanese_tanakasan'],
  ['YouTube','Speak Japanese Naturally','การออกเสียงและการพูดเป็นธรรมชาติ','N5–N4','ฟรี','เสริม','https://www.youtube.com/@SpeakJapaneseNaturally'],
  ['YouTube','Meshclass Japanese','บทสนทนา คำศัพท์ และการฟัง','N5–N4','ฟรี','เสริม','https://www.youtube.com/@meshclass'],
  ['YouTube','NihongoDekita with Sayaka','ภาษาญี่ปุ่นจริงพร้อมคำอธิบายอังกฤษ','เริ่มต้น–N4','ฟรี','เสริม','https://www.youtube.com/@NihongoDekita'],
  ['YouTube','Japanese with Noriko','ฟังพอดแคสต์และชีวิตประจำวัน','N4+','ฟรี','เสริม','https://www.youtube.com/@JapanesewithNoriko'],
  ['YouTube','Onomappu','ภาษาญี่ปุ่นเข้าใจง่ายและวัฒนธรรม','N4+','ฟรี','เสริม','https://www.youtube.com/@Onomappu'],
  ['YouTube','That Japanese Man Yuta','ภาษาจริงเทียบกับตำรา','N4+','ฟรี','เสริม','https://www.youtube.com/@ThatJapaneseManYuta']
];

function doGet() {
  setupDatabase_();
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle(APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getInitialData() {
  const ss = setupDatabase_();
  return {
    settings: readSettings_(ss),
    logs: readRows_(ss.getSheetByName('DailyLog')),
    tests: readRows_(ss.getSheetByName('TestScores')),
    roadmap: readRows_(ss.getSheetByName('Roadmap')),
    resources: readRows_(ss.getSheetByName('Resources')),
    spreadsheetUrl: ss.getUrl()
  };
}

function saveSettings(settings) {
  const ss = setupDatabase_();
  const sheet = ss.getSheetByName('Settings');
  const merged = Object.assign({}, DEFAULT_SETTINGS, settings || {});
  const rows = Object.keys(merged).map(key => [key, merged[key]]);
  sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 2).clearContent();
  if (rows.length) sheet.getRange(2, 1, rows.length, 2).setValues(rows);
  return readSettings_(ss);
}

function addStudyLog(log) {
  const ss = setupDatabase_();
  const sheet = ss.getSheetByName('DailyLog');
  const required = ['date', 'minutes', 'skill', 'topic'];
  required.forEach(k => {
    if (log[k] === undefined || log[k] === null || String(log[k]).trim() === '') {
      throw new Error('กรุณากรอกข้อมูลให้ครบ: ' + k);
    }
  });
  sheet.appendRow([
    new Date(),
    log.date,
    Number(log.minutes) || 0,
    log.skill || '',
    log.source || '',
    log.topic || '',
    Number(log.vocab) || 0,
    Number(log.kanji) || 0,
    Number(log.grammar) || 0,
    log.score === '' ? '' : Number(log.score),
    log.comprehension === '' ? '' : Number(log.comprehension),
    log.onPlan || ''
  ]);
  return { ok: true };
}

function addTestScore(test) {
  const ss = setupDatabase_();
  const sheet = ss.getSheetByName('TestScores');
  const scores = ['vocabKanji','grammar','reading','listening'].map(k => Number(test[k]) || 0);
  const total = scores.reduce((a,b) => a+b, 0) / scores.length;
  sheet.appendRow([
    new Date(),
    test.date || Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Asia/Bangkok', 'yyyy-MM-dd'),
    test.level || 'N5',
    scores[0], scores[1], scores[2], scores[3],
    Math.round(total * 10) / 10,
    test.note || ''
  ]);
  return { ok: true };
}

function updateRoadmap(update) {
  const ss = setupDatabase_();
  const sheet = ss.getSheetByName('Roadmap');
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (Number(values[i][0]) === Number(update.month)) {
      sheet.getRange(i + 1, 8, 1, 3).setValues([[
        update.status || values[i][7],
        Number(update.progress) || 0,
        update.note || ''
      ]]);
      return { ok: true };
    }
  }
  throw new Error('ไม่พบเดือนที่ต้องการอัปเดต');
}

function setupDatabase_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SPREADSHEET_ID');
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) {}
  }
  if (!ss) {
    ss = SpreadsheetApp.create(DATA_FILE_NAME);
    props.setProperty('SPREADSHEET_ID', ss.getId());
  }

  ensureSheet_(ss, 'Settings', ['Key','Value']);
  ensureSheet_(ss, 'DailyLog', ['CreatedAt','Date','Minutes','Skill','Source','Topic','Vocab','Kanji','Grammar','Score','Comprehension','OnPlan']);
  ensureSheet_(ss, 'TestScores', ['CreatedAt','Date','Level','VocabKanji','Grammar','Reading','Listening','Total','Note']);
  ensureSheet_(ss, 'Roadmap', ['Month','TargetLevel','MainGoal','MeasurableGoal','MainResources','Assessment','Status','Progress','Note']);
  ensureSheet_(ss, 'Resources', ['Type','Name','Purpose','Level','Price','Role','URL']);

  const settingsSheet = ss.getSheetByName('Settings');
  if (settingsSheet.getLastRow() === 1) {
    const rows = Object.keys(DEFAULT_SETTINGS).map(k => [k, DEFAULT_SETTINGS[k]]);
    settingsSheet.getRange(2,1,rows.length,2).setValues(rows);
  }

  const roadmapSheet = ss.getSheetByName('Roadmap');
  if (roadmapSheet.getLastRow() === 1) {
    const rows = ROADMAP.map(r => r.concat(['ยังไม่เริ่ม',0,'']));
    roadmapSheet.getRange(2,1,rows.length,rows[0].length).setValues(rows);
  }

  const resourceSheet = ss.getSheetByName('Resources');
  if (resourceSheet.getLastRow() === 1) {
    resourceSheet.getRange(2,1,RESOURCES.length,RESOURCES[0].length).setValues(RESOURCES);
  }

  formatDatabase_(ss);
  return ss;
}

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) sheet.getRange(1,1,1,headers.length).setValues([headers]);
  return sheet;
}

function formatDatabase_(ss) {
  ss.getSheets().forEach(sheet => {
    if (sheet.getLastRow() > 0 && sheet.getLastColumn() > 0) {
      sheet.setFrozenRows(1);
      sheet.getRange(1,1,1,sheet.getLastColumn())
        .setBackground('#1F4E78')
        .setFontColor('#ffffff')
        .setFontWeight('bold');
      sheet.autoResizeColumns(1, sheet.getLastColumn());
    }
  });
}

function readSettings_(ss) {
  const rows = readRows_(ss.getSheetByName('Settings'));
  const out = Object.assign({}, DEFAULT_SETTINGS);
  rows.forEach(r => out[r.Key] = r.Value);
  return out;
}

function readRows_(sheet) {
  const values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1).filter(row => row.some(v => v !== '')).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}
