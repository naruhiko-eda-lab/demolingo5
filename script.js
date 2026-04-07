// --- 第9課 データを2つのグループに分けます ---
const quizDataGroups = {
    // グループ1：前半（動詞、形容詞、趣味、名詞）
    basic: [
        { id: 1, kanji: "わかります", furigana: "わかります", options: ["懂、明白", "有", "喜欢", "擅长"], correctAnswer: "懂、明白" },
        { id: 2, kanji: "あります", furigana: "あります", options: ["有", "懂", "明白", "讨厌"], correctAnswer: "有" },
        { id: 3, kanji: "好き[な]（すき）", furigana: "すき", options: ["喜欢", "讨厌", "擅长", "笨拙"], correctAnswer: "喜欢" },
        { id: 4, kanji: "嫌い[な]（きらい）", furigana: "きらい", options: ["讨厌、不喜欢", "喜欢", "擅长", "干净"], correctAnswer: "讨厌、不喜欢" },
        { id: 5, kanji: "上手[な]（じょうず）", furigana: "じょうず", options: ["好、擅长", "笨拙", "明白", "亲切"], correctAnswer: "好、擅长" },
        { id: 6, kanji: "下手[な]（へた）", furigana: "へた", options: ["不好、不擅长", "擅长", "喜欢", "有名"], correctAnswer: "不好、不擅长" },
        { id: 7, kanji: "飲み物（のみもの）", furigana: "のみもの", options: ["饮料", "料理", "水果", "酒"], correctAnswer: "饮料" },
        { id: 8, kanji: "料理（りょうり）", furigana: "りょうり", options: ["料理、菜", "饮料", "零钱", "作业"], correctAnswer: "料理、菜" },
        { id: 9, kanji: "スポーツ", furigana: "スポーツ", options: ["体育、运动", "旅行", "音乐", "舞蹈"], correctAnswer: "体育、运动" },
        { id: 10, kanji: "野球（やきゅう）", furigana: "やきゅう", options: ["棒球", "足球", "网球", "篮球"], correctAnswer: "棒球" },
        { id: 11, kanji: "ダンス", furigana: "ダンス", options: ["舞、跳舞", "歌", "音乐", "卡拉OK"], correctAnswer: "舞、跳舞" },
        { id: 12, kanji: "旅行（りょこう）", furigana: "りょこう", options: ["旅行", "工作", "学习", "散步"], correctAnswer: "旅行" },
        { id: 13, kanji: "音楽（おんがく）", furigana: "おんがく", options: ["音乐", "歌", "古典乐", "爵士乐"], correctAnswer: "音乐" },
        { id: 14, kanji: "歌（うた）", furigana: "うた", options: ["歌", "舞蹈", "乐器", "电影"], correctAnswer: "歌" },
        { id: 15, kanji: "クラシック", furigana: "クラシック", options: ["古典音乐", "爵士乐", "流行乐", "摇滚乐"], correctAnswer: "古典音乐" },
        { id: 16, kanji: "ジャズ", furigana: "ジャズ", options: ["爵士乐", "古典乐", "歌舞伎", "音乐会"], correctAnswer: "爵士乐" },
        { id: 17, kanji: "コンサート", furigana: "コンサート", options: ["音乐会、演唱会", "卡拉OK", "电影院", "公園"], correctAnswer: "音乐会、演唱会" },
        { id: 18, kanji: "カラオケ", furigana: "カラオケ", options: ["卡拉OK", "歌", "乐器", "聚会"], correctAnswer: "卡拉OK" },
        { id: 19, kanji: "歌舞伎（かぶき）", furigana: "かぶき", options: ["歌舞伎", "书法", "茶道", "柔道"], correctAnswer: "歌舞伎" }
    ],
    // グループ2：後半（物品、時間、副詞、理由）
    others: [
        { id: 20, kanji: "絵（え）", furigana: "え", options: ["画", "字", "汉字", "照片"], correctAnswer: "画" },
        { id: 21, kanji: "字（じ）", furigana: "じ", options: ["字", "画", "汉字", "罗马字"], correctAnswer: "字" },
        { id: 22, kanji: "漢字（かんじ）", furigana: "かんじ", options: ["汉字", "平假名", "片假名", "罗马字"], correctAnswer: "汉字" },
        { id: 23, kanji: "細かいお金", furigana: "こまかいおかね", options: ["零钱", "门票", "钱", "工资"], correctAnswer: "零钱" },
        { id: 24, kanji: "チケット", furigana: "チケット", options: ["票", "零钱", "照片", "信"], correctAnswer: "票" },
        { id: 25, kanji: "時間（じかん）", furigana: "じかん", options: ["时间", "用事", "约定", "日子"], correctAnswer: "时间" },
        { id: 26, kanji: "用事（ようじ）", furigana: "ようじ", options: ["事情、该办的事", "时间", "约定", "作业"], correctAnswer: "事情、该办的事" },
        { id: 27, kanji: "約束（やくそく）", furigana: "やくそく", options: ["约定、承诺", "事情", "时间", "工作"], correctAnswer: "约定、承诺" },
        { id: 28, kanji: "よく", furigana: "よく", options: ["很好地、经常", "大概", "很多", "一些"], correctAnswer: "很好地、经常" },
        { id: 29, kanji: "だいたい", furigana: "だいたい", options: ["大致、大概", "经常", "很少", "完全不"], correctAnswer: "大致、大概" },
        { id: 30, kanji: "たくさん", furigana: "たくさん", options: ["很多", "一点儿", "完全不", "大概"], correctAnswer: "很多" },
        { id: 31, kanji: "少し（すこし）", furigana: "すこし", options: ["一些、一点儿", "很多", "经常", "快"], correctAnswer: "一些、一点儿" },
        { id: 32, kanji: "全然（ぜんぜん）", furigana: "ぜんぜん", options: ["完全不（后接否定）", "经常", "大概", "很快"], correctAnswer: "完全不（后接否定）" },
        { id: 33, kanji: "早く / 速く", furigana: "はやく", options: ["早、快", "晚", "慢", "多"], correctAnswer: "早、快" },
        { id: 34, kanji: "〜から", furigana: "から", options: ["因为〜", "从〜", "到〜", "和〜"], correctAnswer: "因为〜" },
        { id: 35, kanji: "どうして", furigana: "どうして", options: ["为什么", "怎么样", "哪个", "谁"], correctAnswer: "为什么" }
    ]
};

// --- 仕組みの部分：ここから下を貼り付け ---

let currentGroupName = localStorage.getItem('selectedGroup') || null;
let quizData = currentGroupName ? [...quizDataGroups[currentGroupName]] : [];
let score = 0; 
let currentIndex = 0;
let selectedOption = null;
let state = 'answering';
let missedQuestions = []; 
let originalTotalQuestions = 0;

const elements = {
    progressBar: document.getElementById('progress-bar'),
    quizArea: document.getElementById('quiz-area'),
    resultsArea: document.getElementById('results-area'),
    kanji: document.getElementById('kanji'),
    furigana: document.getElementById('furigana'),
    optionsGrid: document.getElementById('options-grid'),
    actionBtn: document.getElementById('action-btn'),
    footer: document.getElementById('footer'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackCorrectAnswer: document.getElementById('feedback-correct-answer'),
    audioBtn: document.getElementById('audio-btn')
};

let audioCtx = null;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function speakText(text, lang = 'zh-CN') {
    if (!text) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    if (lang.includes('ja')) utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    let targetVoice = voices.find(v => v.lang === lang && (v.name.includes('Google') || v.name.includes('Premium')));
    if (!targetVoice) targetVoice = voices.find(v => v.lang.includes(lang));
    if (targetVoice) utterance.voice = targetVoice;
    window.speechSynthesis.speak(utterance);
}

function renderQuestion() {
    // 選択画面を隠してクイズ内容を出す
    const selector = document.getElementById('range-selector');
    const content = document.getElementById('quiz-content');
    if (selector) selector.style.display = 'none';
    if (content) content.classList.remove('hidden');

    const question = quizData[currentIndex];
    const progress = ((currentIndex + 1) / quizData.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    elements.kanji.textContent = question.kanji;
    elements.furigana.textContent = question.furigana;
    elements.optionsGrid.innerHTML = '';
    selectedOption = null;
    resetFooter();

    speakText(question.furigana, 'ja-JP');

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            if (state !== 'answering') return;
            initAudio();
            Array.from(elements.optionsGrid.children).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedOption = opt;
            elements.actionBtn.disabled = false;
            speakText(opt, 'zh-CN'); 
        });
        elements.optionsGrid.appendChild(btn);
    });
    state = 'answering';
}

function handleAction() {
    initAudio();
    if (state === 'answering') {
        checkAnswer();
    } else {
        handleNext();
    }
}

function checkAnswer() {
    const question = quizData[currentIndex];
    const isCorrect = selectedOption === question.correctAnswer;
    const feedbackImg = document.getElementById('feedback-img'); 

    state = 'feedback';
    elements.feedbackContainer.classList.remove('hidden');
    elements.actionBtn.textContent = '继续'; 
    Array.from(elements.optionsGrid.children).forEach(btn => btn.classList.add('disabled'));

    if (isCorrect) {
        score++;
        elements.footer.classList.add('correct');
        elements.feedbackTitle.textContent = '太棒了！';
        elements.feedbackCorrectAnswer.classList.add('hidden');
        if (feedbackImg) feedbackImg.src = 'images/correct.png';
        new Audio('sounds/correct.mp3').play().catch(() => {});
    } else {
        missedQuestions.push(question);
        elements.footer.classList.add('incorrect');
        elements.feedbackTitle.textContent = '不正确。';
        elements.feedbackCorrectAnswer.querySelector('span').textContent = question.correctAnswer;
        elements.feedbackCorrectAnswer.classList.remove('hidden');
        if (feedbackImg) feedbackImg.src = 'images/incorrect.png';
        new Audio('sounds/wrong.mp3').play().catch(() => {});
    }
}

function handleNext() {
    if (state === 'feedback') {
        currentIndex++;
        const BREAK_POINT = Math.floor(originalTotalQuestions / 2);
        if (quizData.length === originalTotalQuestions && currentIndex === BREAK_POINT) {
            showBreakScreen();
            return;
        }
        if (currentIndex < quizData.length) {
            renderQuestion();
        } else {
            showFinalResult();
        }
    } else if (state === 'break') {
        renderQuestion();
    }
}

function showBreakScreen() {
    state = 'break';
    elements.optionsGrid.innerHTML = ''; 
    elements.kanji.textContent = "休憩時間";
    elements.furigana.textContent = "きゅうけいじかん";
    const feedbackImg = document.getElementById('feedback-img');
    if (feedbackImg) feedbackImg.src = 'images/break.png';
    elements.feedbackTitle.textContent = "おつかれさま！ちょっとひと休み。";
    elements.actionBtn.textContent = '再開する';
}

function showFinalResult() {
    state = 'finished';
    elements.optionsGrid.innerHTML = '';
    
    // 画面中央のメインテキストを更新
    elements.kanji.textContent = "🎉 学習完了！";
    elements.furigana.textContent = `正解数: ${score} / ${quizData.length}`;
    
    // 次の学習範囲（トグル）の設定
    const nextGroup = (currentGroupName === 'basic') ? 'others' : 'basic';
    const nextLabel = (currentGroupName === 'basic') ? '名詞2、時間、副詞、理由' : '動詞、形容詞、趣味、名詞1';

    // ★ ここで画像（finish.png）と「次はこれに挑戦」ボタンを表示します
    // ※もし画像が jpg なら、下の finish.png を finish.jpg に書き換えてください
    elements.feedbackTitle.innerHTML = `
        <div style="text-align:center;">
            <img id="result-main-img" src="images/finish.png" alt="congrats" style="width: 200px; height: auto; display: block; margin: 10px auto; border-radius: 10px;">
            <p>お疲れ様でした！</p>
            <button class="action-btn" style="margin-top:20px; background:#58cc02; border-bottom: 4px solid #46a302; cursor: pointer;" onclick="swapRange('${nextGroup}')">
                次は「${nextLabel}」に挑戦
            </button>
        </div>
    `;
    
    // 下部のメインボタンの設定（解き直し or 最初から）
    if (missedQuestions.length > 0) {
        elements.actionBtn.textContent = `間違えた ${missedQuestions.length} 問を解き直す`;
        elements.actionBtn.onclick = () => retryMissedQuestions();
    } else {
        elements.actionBtn.textContent = 'もう一度最初から';
        elements.actionBtn.onclick = () => {
            localStorage.removeItem('selectedGroup');
            location.reload();
        };
    }
    
    // フィードバックエリアを表示
    elements.feedbackContainer.classList.remove('hidden');
    elements.actionBtn.disabled = false;
}

window.swapRange = function(group) {
    localStorage.setItem('selectedGroup', group);
    location.reload();
}

function retryMissedQuestions() {
    quizData = [...missedQuestions];
    missedQuestions = []; 
    currentIndex = 0;
    score = 0;
    renderQuestion();
    elements.actionBtn.onclick = null; 
}

function resetFooter() {
    elements.footer.classList.remove('correct', 'incorrect');
    elements.feedbackContainer.classList.add('hidden');
    elements.actionBtn.textContent = '检查';
    elements.actionBtn.disabled = true;
}

function init() {
    const savedGroup = localStorage.getItem('selectedGroup');
    
    if (savedGroup) {
        currentGroupName = savedGroup;
        quizData = [...quizDataGroups[currentGroupName]];
        originalTotalQuestions = quizData.length;
        quizData.sort(() => Math.random() - 0.5); 
        renderQuestion();
    } else {
        // 最初は選択画面を出し、問題を隠す
        const selector = document.getElementById('range-selector');
        const content = document.getElementById('quiz-content');
        if (selector) selector.style.display = 'block';
        if (content) content.classList.add('hidden');
        elements.progressBar.style.width = '0%';
    }

    elements.actionBtn.addEventListener('click', handleAction);

    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            if (confirm('確定要返回範囲選択画面嗎？')) {
                localStorage.removeItem('selectedGroup');
                location.reload(); 
            }
        };
    }

    elements.audioBtn.addEventListener('click', () => {
        initAudio();
        const text = (state === 'break') ? "きゅうけいじかん" : quizData[currentIndex].furigana;
        speakText(text, 'ja-JP');
    });
}

document.addEventListener('DOMContentLoaded', init);