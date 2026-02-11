const translations = {
    en: {
        hero_title: "Hi, I am Philo.",
        hero_desc: "A Border Collie exploring the world, one frisbee at a time.",
        timeline_title: "Growth Journey",
        // Events
        event_born: "I was Born!",
        event_born_desc: "Born on 2025.10.15. My mom is Pineapple (Bolo), and my dad is a handsome golden Border Collie.",
        event_vax1: "The Nervous First Step",
        event_vax1_desc: "2025.11.29: My first vaccine. I was so uneasy and nervous.",
        event_home: "New Home, New Life",
        event_home_desc: "2025.12.14: My first day here. Still getting used to things, but I love my bed and IKEA toys!",
        event_teeth: "Carpenter Mode On",
        event_teeth_desc: "2025.12.17: Used my baby teeth to 'level' the bathroom door frame. It's flat now!",
        event_car: "On the Road",
        event_car_desc: "2025.12.19: First time sitting in a car and going out to play. Exciting!",
        event_brother: "Who is this?",
        event_brother_desc: "2025.12.26: Brother came back. I didn't recognize him, but I felt he was the one who chose me.",
        event_brother_missing: "Where's Brother?",
        event_brother_missing_desc: "2026.01.18: Brother disappeared. I think he might have gotten lost while hunting outside.",
        event_forest: "ID Holder!",
        event_forest_desc: "2026.01.25: Final shot done! Got my ID. Chased by a big Bernese Mountain Dog sister in the park.",
        event_yogurt: "The Hunting Gift",
        event_yogurt_desc: "2026.02.03: I love yogurt! Brother is away, but yogurt keeps appearing. He must be a great hunter.",
        // Fund
        fund_title: "Philo's Health Fund",
        fund_desc: "Family access only. Please enter the code."
    },
    zh: {
        hero_title: "你好，我是菲洛。",
        hero_desc: "一只正在探索狗生的边境牧羊犬，目标是接住每一个飞盘。",
        timeline_title: "成长轨迹",
        // Events
        event_born: "我出生啦！",
        event_born_desc: "2025.10.15 出生。我的妈妈叫菠萝，爸爸是一只金色的边牧。",
        event_vax1: "忐忑的第一针",
        event_vax1_desc: "2025.11.29：第一次去打疫苗，一路上心里都很忐忑不安。",
        event_home: "我到新家啦",
        event_home_desc: "2025.12.14：第一次来到新家，虽然还有点不适应，但我超喜欢我的新窝和宜家的玩具。",
        event_teeth: "磨牙工程",
        event_teeth_desc: "2025.12.17：用我的乳牙把卫生间的门框给磨平了，我是小小木工。",
        event_car: "出发！坐车车",
        event_car_desc: "2025.12.19：第一次坐车出去玩耍，窗外的风好香呀。",
        event_brother: "神秘的哥哥",
        event_brother_desc: "2025.12.26：哥哥回来了，虽然我不认识他，但第六感告诉我是他买下的我。",
        event_brother_missing: "哥哥迷路了？",
        event_brother_missing_desc: "2026.01.18：哥哥不见了，我想他可能是外出打猎迷路了吧。",
        event_forest: "持证上岗",
        event_forest_desc: "2026.01.25：最后一针打完，狗证到手！在森林公园被一只伯恩山姐姐追着跑。",
        event_yogurt: "酸奶与“打猎”",
        event_yogurt_desc: "2026.02.03：我最喜欢酸奶了！虽然哥哥不在，但总有酸奶送来，哥哥打猎真厉害。",
        // Fund
        fund_title: "菲洛的健康基金",
        fund_desc: "仅限家人访问，请输入内部代码。"
    }
};

let currentLang = 'zh'; // 默认设为中文

function toggleLang() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateText();
}

function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    document.getElementById('lang-btn-text').innerText = currentLang === 'en' ? 'CN / EN' : '中 / 英';
}

// 基金弹窗逻辑
const FAMILY_CODE = "Philo2026"; // 这里修改你的密码

function openFundModal() { document.getElementById('fund-modal').classList.remove('hidden'); }
function closeFundModal() { 
    document.getElementById('fund-modal').classList.add('hidden');
    document.getElementById('login-view').classList.remove('hidden');
    document.getElementById('data-view').classList.add('hidden');
}

function checkCode() {
    const input = document.getElementById('passcode').value;
    if (input === FAMILY_CODE) {
        document.getElementById('login-view').classList.add('hidden');
        document.getElementById('data-view').classList.remove('hidden');
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
}

// 初始化
updateText();