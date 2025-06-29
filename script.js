// タスクデータベース
const taskDatabase = {
    'ai-basic': [
        // 5分タスク
        {
            id: 'ai-basic-001',
            title: 'ChatGPTに「こんにちは」と話しかける',
            steps: [
                'ChatGPTを開く',
                '「こんにちは」と入力',
                '返事を確認する',
                '続けて自己紹介してみる'
            ],
            expectedResult: 'AIとの会話の第一歩を踏み出せる',
            time: 5
        },
        {
            id: 'ai-basic-002',
            title: '今日の気分を3つの絵文字で表現してもらう',
            steps: [
                'ChatGPTに「今日の私の気分を絵文字3つで表して」と入力',
                '結果を見て納得度を確認',
                '違う気分も試してみる'
            ],
            expectedResult: 'AIの創造的な使い方を体験できる',
            time: 5
        },
        {
            id: 'ai-basic-003',
            title: 'AIに簡単な計算問題を解いてもらう',
            steps: [
                '「1234 × 5678は？」のような計算を入力',
                '即座に答えが返ってくることを確認',
                '日常で使える計算を1つ試す'
            ],
            expectedResult: 'AIを電卓代わりに使う方法を習得',
            time: 5
        },
        // 10分タスク
        {
            id: 'ai-basic-004',
            title: 'ChatGPTに今日の天気を聞いてみる',
            steps: [
                'ChatGPTを開く',
                '「今日の天気を教えて」と聞く',
                'なぜ答えられないか考える',
                '代わりに天気の話題で会話を続ける'
            ],
            expectedResult: 'AIの限界と得意分野を理解できる',
            time: 10
        },
        {
            id: 'ai-basic-005',
            title: '料理のレシピを1つ教えてもらう',
            steps: [
                '「簡単な卵料理のレシピを教えて」と入力',
                '材料と手順を確認',
                '「もっと簡単にできる？」と聞いてみる',
                'アレンジ版も聞いてみる'
            ],
            expectedResult: 'AIを料理アシスタントとして使う方法を学ぶ',
            time: 10
        },
        // 15分タスク
        {
            id: 'ai-basic-006',
            title: 'ChatGPTで自己紹介文を3パターン作る',
            steps: [
                'ChatGPTを開く',
                '「私の自己紹介文を3パターン作って」と入力',
                '生成された文章を比較する',
                '一番気に入ったものをメモする'
            ],
            expectedResult: 'AIが生成する文章のバリエーションを体感でき、プロンプトの基本がわかる',
            time: 15
        },
        {
            id: 'ai-basic-007',
            title: '簡単なプロンプトを改善する練習',
            steps: [
                '「レシピを教えて」という簡単なプロンプトを入力',
                '曖昧な結果を確認',
                '具体的に「10分でできる朝食レシピを3つ」に変更',
                '結果の違いを比較する'
            ],
            expectedResult: '具体的なプロンプトの重要性を理解できる',
            time: 15
        },
        {
            id: 'ai-basic-008',
            title: 'AIと一緒に短い物語を作る',
            steps: [
                '「3文で完結する短い物語を一緒に作ろう」と提案',
                '最初の1文をAIに書いてもらう',
                '2文目を自分で考えて入力',
                'AIに締めの3文目を書いてもらう'
            ],
            expectedResult: 'AIとの共同作業の楽しさを体験',
            time: 15
        }
    ],
    'idea': [
        // 5分タスク
        {
            id: 'idea-001',
            title: '今朝食べたものを記事ネタにする',
            steps: [
                '朝食の内容を思い出す',
                'それにまつわるエピソードを1つ',
                'タイトル案を考える'
            ],
            expectedResult: '日常の些細なことがネタになることを発見',
            time: 5
        },
        {
            id: 'idea-002',
            title: '最近イラッとしたことをメモ',
            steps: [
                '最近のイライラを1つ思い出す',
                '同じ悩みを持つ人がいそうか考える',
                '解決策があればメモする'
            ],
            expectedResult: '悩みや不満もコンテンツの種になる',
            time: 5
        },
        {
            id: 'idea-003',
            title: '今日学んだことを1つピックアップ',
            steps: [
                '今日新しく知ったことを1つ選ぶ',
                '誰に教えたいか考える',
                '一言でまとめる'
            ],
            expectedResult: '学びの記録が価値あるコンテンツになる',
            time: 5
        },
        // 10分タスク
        {
            id: 'idea-004',
            title: '最近買ってよかったもの3選',
            steps: [
                '1ヶ月以内に買ったものを思い出す',
                'よかったもの3つを選ぶ',
                'それぞれの「よかった理由」を書く',
                '100円noteのタイトルを考える'
            ],
            expectedResult: '身近な体験がコンテンツになることを実感',
            time: 10
        },
        {
            id: 'idea-005',
            title: '仕事で使える時短テクニック',
            steps: [
                '日常業務で工夫していることを3つ挙げる',
                '一番効果的なものを選ぶ',
                '具体的な手順を書き出す',
                'ビフォーアフターを考える'
            ],
            expectedResult: '自分の工夫が他人の役に立つことを理解',
            time: 10
        },
        // 15分タスク
        {
            id: 'idea-006',
            title: '自分の失敗談を3つ書き出す',
            steps: [
                '最近の小さな失敗を思い出す',
                '3つ選んでメモに書く',
                'それぞれから学んだことを1行で書く',
                '一番noteにしやすそうなものに★をつける'
            ],
            expectedResult: '失敗談が価値あるコンテンツになることを発見',
            time: 15
        },
        {
            id: 'idea-007',
            title: '「○○あるある」を10個リストアップ',
            steps: [
                '自分の職業や趣味を1つ選ぶ',
                '「〜あるある」を10個書き出す',
                '他の人も共感しそうなものに◎をつける',
                'タイトル案を考える'
            ],
            expectedResult: '共感を呼ぶコンテンツのネタが見つかる',
            time: 15
        },
        {
            id: 'idea-008',
            title: '過去の自分へのアドバイス集',
            steps: [
                '1年前の自分を思い出す',
                '教えてあげたいこと5つ書く',
                'それぞれ理由も添える',
                '同じ悩みを持つ人向けに整理'
            ],
            expectedResult: '経験が誰かの役に立つコンテンツになる',
            time: 15
        }
    ],
    'content': [
        // 5分タスク
        {
            id: 'content-001',
            title: '記事のタイトルを5案考える',
            steps: [
                'テーマを1つ決める',
                '数字を入れた案を2つ',
                '疑問形の案を2つ',
                '感情を入れた案を1つ'
            ],
            expectedResult: 'キャッチーなタイトルの型を習得',
            time: 5
        },
        {
            id: 'content-002',
            title: '1ツイート分の気づきを書く',
            steps: [
                '今日の気づきを1つ選ぶ',
                '140文字以内で書く',
                'ハッシュタグを2つ追加'
            ],
            expectedResult: '短文でまとめる力がつく',
            time: 5
        },
        {
            id: 'content-003',
            title: '写真に一言コメントをつける',
            steps: [
                'スマホの写真を1枚選ぶ',
                '状況を説明する一文',
                '感想や学びを一文追加'
            ],
            expectedResult: 'ビジュアルとテキストの組み合わせ方を学ぶ',
            time: 5
        },
        // 10分タスク
        {
            id: 'content-004',
            title: 'X（Twitter）で今日の学びをポスト',
            steps: [
                '今日学んだことを1つ選ぶ',
                '140文字以内でまとめる',
                '読みやすいよう改行を入れる',
                '投稿する（下書きでもOK）'
            ],
            expectedResult: '学びをアウトプットする習慣の第一歩',
            time: 10
        },
        {
            id: 'content-005',
            title: '3行日記を書く',
            steps: [
                '今日の出来事を1行',
                '感じたことを1行',
                '明日やりたいことを1行',
                '見出しをつけて完成'
            ],
            expectedResult: '継続しやすい記録習慣が身につく',
            time: 10
        },
        // 15分タスク
        {
            id: 'content-006',
            title: '100円noteの導入文を書く',
            steps: [
                'ターゲット読者を1人イメージする',
                'その人の悩みを1文で書く',
                '「この記事を読むと〜」を書く',
                '3文を組み合わせて導入文にする'
            ],
            expectedResult: '読者を引き込む導入文の型が身につく',
            time: 15
        },
        {
            id: 'content-007',
            title: '箇条書きで記事の構成を作る',
            steps: [
                'テーマを1つ決める',
                '大見出しを3つ書く',
                '各見出しに小項目を2つずつ追加',
                '全体の流れを確認する'
            ],
            expectedResult: '論理的な記事構成を作るスキルが身につく',
            time: 15
        },
        {
            id: 'content-008',
            title: 'FAQ形式で記事を書く',
            steps: [
                'テーマに関する質問を5つ作る',
                '各質問に2-3文で回答',
                '最も重要な質問を最初に配置',
                'まとめの一文を追加'
            ],
            expectedResult: 'Q&A形式の分かりやすい記事が書ける',
            time: 15
        }
    ],
    'tool': [
        // 5分タスク
        {
            id: 'tool-001',
            title: 'スマホでスクリーンショットに注釈',
            steps: [
                '参考になる画面をスクショ',
                '編集機能で矢印や丸を追加',
                'テキストで説明を1つ入れる'
            ],
            expectedResult: '視覚的な説明資料を作るスキルが身につく',
            time: 5
        },
        {
            id: 'tool-002',
            title: 'スマホのメモ帳でアイデア整理',
            steps: [
                'メモアプリを開く',
                '今日の気づきを箇条書きで3つ',
                'タグ機能で分類してみる'
            ],
            expectedResult: 'デジタルメモの整理術を身につける',
            time: 5
        },
        {
            id: 'tool-003',
            title: 'Googleで画像検索を活用',
            steps: [
                '気になるキーワードで画像検索',
                '参考になる画像を3つ選ぶ',
                '共通点や特徴をメモ'
            ],
            expectedResult: 'ビジュアルリサーチの基本を学ぶ',
            time: 5
        },
        // 10分タスク
        {
            id: 'tool-004',
            title: 'Googleドキュメントで音声入力',
            steps: [
                'Googleドキュメントを新規作成',
                'ツール→音声入力を選択',
                '今日の出来事を1分間話す',
                '文章を読み返して修正'
            ],
            expectedResult: '音声入力で素早くテキスト化する方法を習得',
            time: 10
        },
        {
            id: 'tool-005',
            title: 'YouTubeでちょっとした動画撮影',
            steps: [
                'スマホのカメラアプリを開く',
                '30秒で今日の学びを話す',
                '見返して話し方をチェック',
                '改善点を1つメモ'
            ],
            expectedResult: '動画コンテンツの基礎を体験',
            time: 10
        },
        // 15分タスク
        {
            id: 'tool-006',
            title: 'Canvaでアイキャッチ画像を作る',
            steps: [
                'Canvaにログイン（無料版でOK）',
                '「Instagram投稿」テンプレートを選択',
                'タイトルテキストを入力',
                '色を1箇所だけ変更して保存'
            ],
            expectedResult: 'ビジュアルコンテンツ作成の基礎を習得',
            time: 15
        },
        {
            id: 'tool-007',
            title: 'Notionで簡単なページを作る',
            steps: [
                'Notionに新しいページを作成',
                'タイトルと見出しを3つ追加',
                'チェックボックスのタスクリストを作る',
                'カレンダーやテーブルを1つ挿入'
            ],
            expectedResult: '生産性ツールの活用方法を理解',
            time: 15
        },
        {
            id: 'tool-008',
            title: 'Googleスプレッドシートでデータ整理',
            steps: [
                '新しいスプレッドシートを作成',
                'データを5行×3列入力',
                '合計を計算する関数を使う',
                'グラフを1つ作成'
            ],
            expectedResult: 'データ分析の基本スキルを習得',
            time: 15
        }
    ],
    'output': [
        // 5分タスク
        {
            id: 'output-001',
            title: '今日の一言をSNSに投稿',
            steps: [
                '今日印象に残ったことを1つ',
                '感想を一言で表現',
                'ハッシュタグを1つ追加'
            ],
            expectedResult: '日常の発信習慣の第一歩',
            time: 5
        },
        {
            id: 'output-002',
            title: '写真に短いキャプションをつける',
            steps: [
                'スマホの写真を1枚選ぶ',
                '何を伝えたいかを考える',
                '2-3文でキャプションを作る'
            ],
            expectedResult: 'ビジュアルストーリーテリングの基礎',
            time: 5
        },
        {
            id: 'output-003',
            title: 'おすすめを1つシェアする',
            steps: [
                '最近よかったもの/ことを1つ選ぶ',
                'なぜおすすめかを書く',
                'SNSで短文シェア'
            ],
            expectedResult: '価値ある情報を共有する習慣',
            time: 5
        },
        // 10分タスク
        {
            id: 'output-004',
            title: '学んだことを図解してみる',
            steps: [
                '最近学んだことを1つ選ぶ',
                '紙に3つの丸を描く',
                '丸の中にキーワードを書く',
                '矢印でつないで関係を表現'
            ],
            expectedResult: '複雑な概念を視覚化するスキルの基礎',
            time: 10
        },
        {
            id: 'output-005',
            title: '1分動画で今日の学びを記録',
            steps: [
                'スマホのカメラを自撮りモードに',
                '「今日学んだことは〜」で話し始める',
                '1分以内で3つのポイントを話す',
                '保存して後で見返す'
            ],
            expectedResult: '動画でのアウトプット力が向上',
            time: 10
        },
        // 15分タスク
        {
            id: 'output-006',
            title: '今週の成果を3つ書き出す',
            steps: [
                '今週やったことを振り返る',
                '小さくても成果を3つ選ぶ',
                'それぞれ1行で説明を書く',
                'SNSでシェアする文章を作る'
            ],
            expectedResult: '定期的な振り返りと発信の習慣づけ',
            time: 15
        },
        {
            id: 'output-007',
            title: 'ブログ記事の下書きを作る',
            steps: [
                'テーマを1つ決める',
                '目次を箇条書きで5つ',
                '各項目の要点を1-2文で書く',
                '全体を読み返して調整'
            ],
            expectedResult: 'ブログ記事の構成力が身につく',
            time: 15
        },
        {
            id: 'output-008',
            title: 'スレッド投稿でストーリーを作る',
            steps: [
                '体験談を1つ選ぶ',
                '起承転結で4つのツイートに分ける',
                'それぞれを140文字以内で書く',
                '読み返して流れを確認'
            ],
            expectedResult: 'ストーリーテリングの技術を習得',
            time: 15
        }
    ]
};

// DOM要素
const elements = {
    screens: {
        start: document.getElementById('startScreen'),
        task: document.getElementById('taskScreen'),
        completion: document.getElementById('completionScreen')
    },
    buttons: {
        categories: document.querySelectorAll('.category-btn'),
        timeFilters: document.querySelectorAll('.time-filter-btn'),
        random: document.getElementById('randomTaskBtn'),
        complete: document.getElementById('completeBtn'),
        another: document.getElementById('anotherTaskBtn'),
        back: document.getElementById('backBtn'),
        share: document.getElementById('shareBtn'),
        newTask: document.getElementById('newTaskBtn')
    },
    display: {
        streakCount: document.getElementById('streakCount'),
        taskCategory: document.getElementById('taskCategory'),
        taskTime: document.getElementById('taskTime'),
        taskTitle: document.getElementById('taskTitle'),
        taskSteps: document.getElementById('taskSteps'),
        expectedResult: document.getElementById('expectedResult'),
        totalTasks: document.getElementById('totalTasks'),
        weeklyTasks: document.getElementById('weeklyTasks'),
        footerTotalTasks: document.getElementById('footerTotalTasks')
    }
};

// 状態管理
let currentCategory = null;
let currentTask = null;
let currentTimeFilter = null;

// LocalStorageキー
const STORAGE_KEYS = {
    streak: 'taskgen_streak',
    lastDate: 'taskgen_lastDate',
    totalTasks: 'taskgen_totalTasks',
    weeklyTasks: 'taskgen_weeklyTasks',
    weekStart: 'taskgen_weekStart'
};

// 初期化
function init() {
    loadProgress();
    setupEventListeners();
    updateDisplay();
}

// イベントリスナーの設定
function setupEventListeners() {
    // カテゴリーボタン
    elements.buttons.categories.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            showRandomTask(currentCategory, currentTimeFilter);
        });
    });

    // 時間フィルターボタン
    elements.buttons.timeFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            // 以前の選択を解除
            elements.buttons.timeFilters.forEach(b => b.classList.remove('active'));
            // 新しい選択をアクティブに
            btn.classList.add('active');
            currentTimeFilter = parseInt(btn.dataset.time);
            showTasksByTime(currentTimeFilter);
        });
    });

    // ランダムタスクボタン
    elements.buttons.random.addEventListener('click', () => {
        const categories = Object.keys(taskDatabase);
        currentCategory = categories[Math.floor(Math.random() * categories.length)];
        showRandomTask(currentCategory, currentTimeFilter);
    });

    // 完了ボタン
    elements.buttons.complete.addEventListener('click', completeTask);

    // 別のタスクボタン
    elements.buttons.another.addEventListener('click', () => {
        showRandomTask(currentCategory, currentTimeFilter);
    });

    // 戻るボタン
    elements.buttons.back.addEventListener('click', () => {
        showScreen('start');
    });

    // シェアボタン
    elements.buttons.share.addEventListener('click', shareResult);

    // 新しいタスクボタン
    elements.buttons.newTask.addEventListener('click', () => {
        showScreen('start');
    });
}

// 画面切り替え
function showScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    elements.screens[screenName].classList.add('active');
}

// ランダムタスクを表示
function showRandomTask(category, timeFilter = null) {
    let tasks = taskDatabase[category];
    
    // 時間フィルターが設定されている場合、該当する時間のタスクのみに絞る
    if (timeFilter) {
        tasks = tasks.filter(task => task.time === timeFilter);
        if (tasks.length === 0) {
            // 該当する時間のタスクがない場合は全てから選択
            tasks = taskDatabase[category];
        }
    }
    
    const randomIndex = Math.floor(Math.random() * tasks.length);
    currentTask = tasks[randomIndex];

    // カテゴリー名の日本語変換
    const categoryNames = {
        'ai-basic': 'AI基礎',
        'idea': 'アイデア出し',
        'content': 'コンテンツ作成',
        'tool': 'ツール練習',
        'output': 'アウトプット'
    };

    // タスク情報を表示
    elements.display.taskCategory.textContent = categoryNames[category];
    elements.display.taskTime.textContent = `${currentTask.time}分`;
    elements.display.taskTitle.textContent = currentTask.title;
    elements.display.expectedResult.textContent = currentTask.expectedResult;

    // ステップを表示
    elements.display.taskSteps.innerHTML = '';
    currentTask.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step-item';
        stepElement.innerHTML = `
            <span class="step-number">${index + 1}</span>
            <span class="step-text">${step}</span>
        `;
        elements.display.taskSteps.appendChild(stepElement);
    });

    showScreen('task');
}

// 時間別でタスクを表示
function showTasksByTime(timeFilter) {
    // 全カテゴリーから指定時間のタスクを集める
    let allTasks = [];
    Object.keys(taskDatabase).forEach(category => {
        const tasks = taskDatabase[category].filter(task => task.time === timeFilter);
        tasks.forEach(task => {
            task.category = category; // カテゴリー情報を追加
        });
        allTasks = allTasks.concat(tasks);
    });
    
    if (allTasks.length === 0) {
        // 該当時間のタスクがない場合は全タスクから選択
        Object.keys(taskDatabase).forEach(category => {
            const tasks = taskDatabase[category];
            tasks.forEach(task => {
                task.category = category;
            });
            allTasks = allTasks.concat(tasks);
        });
    }
    
    // ランダムに1つ選択
    const randomIndex = Math.floor(Math.random() * allTasks.length);
    currentTask = allTasks[randomIndex];
    currentCategory = currentTask.category;
    
    // カテゴリー名の日本語変換
    const categoryNames = {
        'ai-basic': 'AI基礎',
        'idea': 'アイデア出し',
        'content': 'コンテンツ作成',
        'tool': 'ツール練習',
        'output': 'アウトプット'
    };

    // タスク情報を表示
    elements.display.taskCategory.textContent = categoryNames[currentCategory];
    elements.display.taskTime.textContent = `${currentTask.time}分`;
    elements.display.taskTitle.textContent = currentTask.title;
    elements.display.expectedResult.textContent = currentTask.expectedResult;

    // ステップを表示
    elements.display.taskSteps.innerHTML = '';
    currentTask.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step-item';
        stepElement.innerHTML = `
            <span class="step-number">${index + 1}</span>
            <span class="step-text">${step}</span>
        `;
        elements.display.taskSteps.appendChild(stepElement);
    });

    showScreen('task');
}

// タスク完了処理
function completeTask() {
    updateProgress();
    showCompletionScreen();
    createConfetti();
}

// 進捗の更新
function updateProgress() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(STORAGE_KEYS.lastDate);
    
    // ストリーク計算
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak) || '0');
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
    }
    
    // 週間タスク計算
    const weekStart = localStorage.getItem(STORAGE_KEYS.weekStart);
    const currentWeekStart = getWeekStart();
    let weeklyTasks = parseInt(localStorage.getItem(STORAGE_KEYS.weeklyTasks) || '0');
    
    if (weekStart !== currentWeekStart) {
        weeklyTasks = 1;
        localStorage.setItem(STORAGE_KEYS.weekStart, currentWeekStart);
    } else {
        weeklyTasks++;
    }
    
    // 累計タスク
    let totalTasks = parseInt(localStorage.getItem(STORAGE_KEYS.totalTasks) || '0');
    totalTasks++;
    
    // 保存
    localStorage.setItem(STORAGE_KEYS.streak, streak.toString());
    localStorage.setItem(STORAGE_KEYS.lastDate, today);
    localStorage.setItem(STORAGE_KEYS.totalTasks, totalTasks.toString());
    localStorage.setItem(STORAGE_KEYS.weeklyTasks, weeklyTasks.toString());
    
    updateDisplay();
}

// 週の開始日を取得
function getWeekStart() {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const weekStart = new Date(now.setDate(diff));
    return weekStart.toDateString();
}

// 進捗の読み込み
function loadProgress() {
    const streak = localStorage.getItem(STORAGE_KEYS.streak) || '0';
    const totalTasks = localStorage.getItem(STORAGE_KEYS.totalTasks) || '0';
    const weeklyTasks = localStorage.getItem(STORAGE_KEYS.weeklyTasks) || '0';
    
    elements.display.streakCount.textContent = streak;
    elements.display.totalTasks.textContent = totalTasks;
    elements.display.weeklyTasks.textContent = weeklyTasks;
    elements.display.footerTotalTasks.textContent = totalTasks;
}

// 表示の更新
function updateDisplay() {
    loadProgress();
}

// 完了画面の表示
function showCompletionScreen() {
    const totalTasks = localStorage.getItem(STORAGE_KEYS.totalTasks) || '0';
    const weeklyTasks = localStorage.getItem(STORAGE_KEYS.weeklyTasks) || '0';
    
    elements.display.totalTasks.textContent = totalTasks;
    elements.display.weeklyTasks.textContent = weeklyTasks;
    
    showScreen('completion');
}

// 紙吹雪アニメーション
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(piece);
    }
    
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 3000);
}

// シェア機能
function shareResult() {
    const totalTasks = localStorage.getItem(STORAGE_KEYS.totalTasks) || '0';
    const streak = localStorage.getItem(STORAGE_KEYS.streak) || '0';
    
    const text = `🎯 15分タスクジェネレーターで今日もタスク完了！\n\n` +
                `📊 累計タスク: ${totalTasks}個\n` +
                `🔥 連続記録: ${streak}日\n\n` +
                `#15分タスク #AI学習 #バイブコーディング`;
    
    // Twitter/Xでシェア
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// 初期化実行
document.addEventListener('DOMContentLoaded', init);