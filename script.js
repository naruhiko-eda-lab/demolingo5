window.swapRange = function(group) {
    alert(group + " が選択されました！"); // これが出るか確認
    localStorage.setItem('selectedGroup', group);
    location.reload();
};
// --- 第9課 データを2つのグループに分けます ---
const quizDataGroups = {
    // グループ1：前半
    basic: [
        { id: 1, kanji: "わかります", furigana: "わかります", options: ["懂、明白", "有", "喜欢", "擅长"], correctAnswer: "懂、明白" },
        { id: 2, kanji: "あります", furigana: "あります", options: ["有", "懂", "明白", "讨厌"], correctAnswer: "有" },
        { id: 3, kanji: "好き[な]（すき）", furigana: "すき", options: ["喜欢", "讨厌", "擅长", "笨拙"], correctAnswer: "喜欢" },
        { id: 4, kanji: "嫌い[な]（きらい）", furigana: "きらい", options: ["讨厌、不喜欢", "喜欢", "擅长", "干净"], correctAnswer: "讨厌、不喜欢" },
        { id: 5, kanji: "上手[な]（じょうず）", furigana: "じょうず", options: ["好、擅长", "笨拙", "明白", "亲切"], correctAnswer: "好、擅长" },
        { id: 6, kanji: "下手[な]（へた）", furigana: "へた", options: ["不好、不擅长", "擅长", "喜欢", "有名"], correctAnswer: "不好、不擅长" },
        { id: 7, kanji: "飲み物（のみもの）", furigana: "のみもの", options: ["饮料", "料理", "水果", "酒"], correctAnswer: "饮料" },
        { id: 8, kanji: "料理（りょうり）", furigana: "りょうり", options: ["料理、菜", "饮料", "零钱", "作業"], correctAnswer: "料理、菜" },
        { id: 9, kanji: "スポーツ", furigana: "スポーツ", options: ["体育、运动", "旅行", "音楽", "舞蹈"], correctAnswer: "体育、运动" },
        { id: 10, kanji: "野球（やきゅう）", furigana: "やきゅう", options: ["棒球", "足球", "網球", "篮球"], correctAnswer: "棒球" },
        { id: 11, kanji: "ダンス", furigana: "ダンス", options: ["舞、跳舞", "歌", "音楽", "卡拉OK"], correctAnswer: "舞、跳舞" },
        { id: 12, kanji: "旅行（りょこう）", furigana: "りょこう", options: ["旅行", "工作", "学習", "散歩"], correctAnswer: "旅行" },
        { id: 13, kanji: "音楽（おんがく）", furigana: "おんがく", options: ["音楽", "歌", "古典楽", "爵士楽"], correctAnswer: "音楽" },
        { id: 14, kanji: "歌（うた）", furigana: "うた", options: ["歌", "舞蹈", "楽器", "映画"], correctAnswer: "歌" },
        { id: 15, kanji: "クラシック", furigana: "クラシック", options: ["古典音楽", "爵士楽", "流行楽", "摇滚楽"], correctAnswer: "古典音楽" },
        { id: 16, kanji: "ジャズ", furigana: "ジャズ", options: ["爵士楽", "古典楽", "歌舞伎", "音楽会"], correctAnswer: "爵士楽" },
        { id: 17, kanji: "コンサート", furigana: "コンサート", options: ["音楽会、演唱会", "卡拉OK", "映画館", "公園"], correctAnswer: "音楽会、演唱会" },
        { id: 18, kanji: "カラオケ", furigana: "カラオケ", options: ["卡拉OK", "歌", "楽器", "聚会"], correctAnswer: "卡拉OK" },
        { id: 19, kanji: "歌舞伎（かぶき）", furigana: "かぶき", options: ["歌舞伎", "书法", "茶道", "柔道"], correctAnswer: "歌舞伎" },
        { 
            id: 201, 
            type: "reorder", 
            kanji: "我喜欢狗。", 
            furigana: "わたしは いぬが すきです", 
            correctOrder: ["わたしは", "いぬが", "すきです"], 
            options: ["いぬが", "すきです", "わたしは", "ねこが"] 
        }
    ],
    // グループ2：後半
    others: [
        { id: 20, kanji: "絵（え）", furigana: "え", options: ["画", "字", "漢字", "照片"], correctAnswer: "画" },
        { id: 21, kanji: "字（じ）", furigana: "じ", options: ["字", "画", "漢字", "罗马字"], correctAnswer: "字" },
        { id: 22, kanji: "漢字（かんじ）", furigana: "かんじ", options: ["漢字", "平仮名", "片仮名", "罗马字"], correctAnswer: "漢字" },
        { id: 23, kanji: "細かいお金", furigana: "こまかいおかね", options: ["零钱", "門票", "钱", "工资"], correctAnswer: "零钱" },
        { id: 24, kanji: "チケット", furigana: "チケット", options: ["票", "零钱", "照片", "信"], correctAnswer: "票" },
        { id: 25, kanji: "時間（じかん）", furigana: "じかん", options: ["時間", "用事", "约定", "日子"], correctAnswer: "時間" },
        { id: 26, kanji: "用事（ようじ）", furigana: "ようじ", options: ["事情、该办的事", "時間", "约定", "作業"], correctAnswer: "事情、该办的事" },
        { id: 27, kanji: "約束（やくそく）", furigana: "やくそく", options: ["约定、承诺", "事情", "時間", "工作"], correctAnswer: "约定、承诺" },
        { id: 28, kanji: "よく", furigana: "よく", options: ["很好地、经常", "大概", "たくさん", "少し"], correctAnswer: "很好地、经常" },
        { id: 29, kanji: "だいたい", furigana: "だいたい", options: ["大致、大概", "经常", "很少", "全然"], correctAnswer: "大致、大概" },
        { id: 30, kanji: "たくさん", furigana: "たくさん", options: ["很多", "少し", "全然", "大概"], correctAnswer: "很多" },
        { id: 31, kanji: "少し（すこし）", furigana: "すこし", options: ["一些、一点儿", "たくさん", "经常", "早い"], correctAnswer: "一些、一点儿" },
        { id: 32, kanji: "全然（ぜんぜん）", furigana: "ぜんぜん", options: ["完全不（后接否定）", "经常", "大概", "早い"], correctAnswer: "完全不（后接否定）" },
        { id: 33, kanji: "早く / 速く", furigana: "はやく", options: ["早、快", "晚", "慢", "多"], correctAnswer: "早、快" },
        { id: 34, kanji: "〜から", furigana: "から", options: ["因为〜", "颜色", "到〜", "和〜"], correctAnswer: "因为〜" },
        { id: 35, kanji: "どうして", furigana: "どうして", options: ["为什么", "怎么样", "哪个", "誰"], correctAnswer: "为什么" }
    ]
};

// --- 管理用変数 ---
let currentGroupName = localStorage.getItem('selectedGroup') || null;
let quizData = currentGroupName ? [...quizDataGroups[currentGroupName]] : [];
let score = 0; 
let currentIndex = 0;
let selectedOption = null;
let state = 'answering';
let missedQuestions = []; 
let originalTotalQuestions = 0;
let currentReorderSelection = [];

const elements = {
    progressBar: document.getElementById('progress-bar'),
    quizArea: document.getElementById('quiz-area'),
    rangeSelector: document.getElementById('range-selector'), // これを追加
    quizContent: document.getElementById('quiz-content'),     // これを追加
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

// --- オーディオ設定 ---
let audioCtx = null;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function speakText(text, lang = 'ja-JP') {
    if (!text) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
}

// --- メイン描画 ---
function renderQuestion() {
    // 選択画面を隠し、クイズ内容を表示する
    const selector = document.getElementById('range-selector');
    const content = document.getElementById('quiz-content');
    
    if (selector) {
        selector.style.display = 'none';
    } else {
        console.error("エラー: range-selector が見つかりません");
    }

    if (content) {
        content.classList.remove('hidden');
    } else {
        console.error("エラー: quiz-content が見つかりません");
    }

    const question = quizData[currentIndex];
    const progress = ((currentIndex + 1) / quizData.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    elements.kanji.textContent = question.kanji;
    elements.furigana.textContent = question.furigana;
    elements.optionsGrid.innerHTML = '';
    
    const reorderContainer = document.getElementById('reorder-container');
    const selectedChipsArea = document.getElementById('selected-chips');
    const wordChipsArea = document.getElementById('word-chips');
    
    selectedOption = null;
    resetFooter();
    speakText(question.furigana, 'ja-JP');

    if (question.type === "reorder") {
        reorderContainer.classList.remove('hidden');
        elements.optionsGrid.classList.add('hidden');
        selectedChipsArea.innerHTML = '';
        wordChipsArea.innerHTML = '';
        currentReorderSelection = [];

        question.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.style.width = 'auto';
            btn.textContent = opt;
            btn.onclick = () => {
                if (!currentReorderSelection.includes(opt)) {
                    currentReorderSelection.push(opt);
                    updateReorderDisplay(question);
                    btn.style.opacity = "0.3";
                    btn.disabled = true;
                }
            };
            wordChipsArea.appendChild(btn);
        });
    } else {
        if (reorderContainer) reorderContainer.classList.add('hidden');
        elements.optionsGrid.classList.remove('hidden');
        
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        shuffledOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => {
                if (state !== 'answering') return;
                initAudio();
                Array.from(elements.optionsGrid.children).forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedOption = opt;
                elements.actionBtn.disabled = false;
                speakText(opt, 'zh-CN');
            };
            elements.optionsGrid.appendChild(btn);
        });
    }
    state = 'answering';
}

function updateReorderDisplay(quiz) {
    const selectedChipsArea = document.getElementById('selected-chips');
    selectedChipsArea.innerHTML = '';
    currentReorderSelection.forEach(word => {
        const span = document.createElement('span');
        span.style = "background: #fff; border: 2px solid #58cc02; padding: 8px 15px; border-radius: 12px; font-weight: bold; box-shadow: 0 2px 0 #e5e5e5; color: #58cc02;";
        span.textContent = word;
        selectedChipsArea.appendChild(span);
    });

    if (currentReorderSelection.length === quiz.correctOrder.length) {
        selectedOption = currentReorderSelection.join(' ');
        elements.actionBtn.disabled = false;
    }
}

function handleAction() {
    initAudio();
    if (state === 'answering') {
        checkAnswer();
    } else if (state === 'correct' || state === 'wrong') {
        handleNext();
    } else if (state === 'break') {
        renderQuestion();
    }
}

function checkAnswer() {
    if (state !== 'answering' || !selectedOption) return;
    
    const quiz = quizData[currentIndex];
    let isCorrect = false;
    let answerText = "";

    if (quiz.type === "reorder") {
        answerText = quiz.correctOrder.join(' ');
        isCorrect = (selectedOption === answerText);
    } else {
        answerText = quiz.correctAnswer;
        isCorrect = (selectedOption === answerText);
    }

    if (isCorrect) {
        state = 'correct';
        score++;
        showFeedback(true, answerText);
    } else {
        state = 'wrong';
        missedQuestions.push(quiz);
        showFeedback(false, answerText);
    }
    elements.actionBtn.textContent = '次へ';
}

function showFeedback(isCorrect, correctAnswer) {
    elements.footer.classList.remove('correct', 'incorrect');
    elements.footer.classList.add(isCorrect ? 'correct' : 'incorrect');
    elements.feedbackContainer.classList.remove('hidden');
    elements.feedbackTitle.textContent = isCorrect ? '正解です！' : '惜しい！';
    elements.feedbackCorrectAnswer.textContent = isCorrect ? '' : `正解: ${correctAnswer}`;
    
    const feedbackImg = document.getElementById('feedback-img');
    if (feedbackImg) {
        feedbackImg.src = isCorrect ? 'images/correct.png' : 'images/wrong.png';
    }
}

function handleNext() {
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
    elements.kanji.textContent = "🎉 学習完了！";
    elements.furigana.textContent = `正解数: ${score} / ${quizData.length}`;
    
    const nextGroup = (currentGroupName === 'basic') ? 'others' : 'basic';
    const nextLabel = (currentGroupName === 'basic') ? '名詞2、時間、副詞、理由' : '動詞、形容詞、趣味、名詞1';

    elements.feedbackTitle.innerHTML = `
        <div style="text-align:center;">
            <img id="result-main-img" src="images/finish.png" alt="congrats" style="width: 200px; height: auto; display: block; margin: 10px auto; border-radius: 10px;">
            <p>お疲れ様でした！</p>
            <button class="action-btn" style="margin-top:20px; background:#58cc02; border-bottom: 4px solid #46a302; cursor: pointer;" onclick="swapRange('${nextGroup}')">
                次は「${nextLabel}」に挑戦
            </button>
        </div>
    `;
    
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
    elements.feedbackContainer.classList.remove('hidden');
    elements.actionBtn.disabled = false;
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
    console.log("init関数が開始されました"); // これが最初に出るはず

    // 1. 保存されたグループ名を取得
    const savedGroup = localStorage.getItem('selectedGroup');
    console.log("読み込まれたグループ:", savedGroup);

    // 2. HTML要素の取得（elementsが壊れていても動くように直接取得）
    const selector = document.getElementById('range-selector');
    const content = document.getElementById('quiz-content');

    if (savedGroup && quizDataGroups[savedGroup]) {
        console.log("クイズを開始します...");
        currentGroupName = savedGroup;
        quizData = [...quizDataGroups[currentGroupName]];
        originalTotalQuestions = quizData.length;
        quizData.sort(() => Math.random() - 0.5); 

        // 画面切り替え
        if (selector) selector.style.display = 'none';
        if (content) content.classList.remove('hidden');

        // 問題を表示
        renderQuestion();
    } else {
        console.log("選択画面を表示します");
        if (selector) selector.style.display = 'block';
        if (content) content.classList.add('hidden');
    }

    // イベント登録（エラー防止のため存在確認を入れる）
    if (elements.actionBtn) {
        elements.actionBtn.addEventListener('click', handleAction);
    }
    
    if (elements.audioBtn) {
        elements.audioBtn.addEventListener('click', () => {
            initAudio();
            const text = (state === 'break') ? "きゅうけいじかん" : quizData[currentIndex].furigana;
            speakText(text, 'ja-JP');
        });
    }

    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            if (confirm('範囲選択画面に戻りますか？')) {
                localStorage.removeItem('selectedGroup');
                location.reload(); 
            }
        };
    }
}

// 確実に実行されるように呼び出し方を工夫
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // すでに読み込み済みなら即座に実行
}