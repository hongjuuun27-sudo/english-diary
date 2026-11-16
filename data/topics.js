/* 주제·질문 (규칙은 CLAUDE.md '주제·질문 작성 규칙')
   TOPIC_DATA = 지금 고르기 목록. RETIRED_TOPIC_DATA = 목록에서 뺀 주제(옛 기록의 제목·질문용, 고르기에는 안 씀)
   주제: { id, month: "YYYY-MM"(그 달 추천), emoji, ko, en, questions }
   질문: { id(주제id-번호, 절대 안 바꿈), level: 1 쉬움(사실) | 2 중간(경험·감정) | 3 깊음(의견·가정), en, ko(반말) }
   주제마다 쉬움 3 · 중간 3 · 깊음 2 (질문 5개를 고르면 2·2·1을 뽑음). 뺀 주제의 id는 다시 쓰지 않음 */
window.TOPIC_DATA = [
  {
    id: "aijob", month: "2026-11", emoji: "🤖", ko: "AI와 일자리", en: "AI and my job",
    questions: [
      { id: "aijob-1", level: 1, en: "Do you use any AI tools in your daily life? Which ones, and for what?", ko: "일상에서 AI 도구 쓰는 거 있어? 뭐 쓰고, 뭐 할 때 써?" },
      { id: "aijob-2", level: 1, en: "At work, which parts of your job are pretty routine, and which parts need your judgment?", ko: "일에서 반복되는 일과, 네 판단이 필요한 일은 어떻게 달라?" },
      { id: "aijob-3", level: 1, en: "Have your coworkers or your company said anything about AI lately? What did they say?", ko: "요즘 동료들이나 회사에서 AI 얘기 나온 적 있어? 뭐라고 했어?" },
      { id: "aijob-4", level: 2, en: "Have you ever used AI for something work-related and thought, wait, that's actually pretty good? Or the opposite?", ko: "일 관련해서 AI를 써 봤는데, 어 이거 괜찮네 싶었던 적 있어? 아니면 반대였던 적?" },
      { id: "aijob-5", level: 2, en: "When you hear that AI might replace factory or equipment jobs, how does that sit with you?", ko: "공장이나 설비 일을 AI가 대체할 수도 있다는 얘기 들으면, 기분이 어때?" },
      { id: "aijob-6", level: 2, en: "Has AI already changed the way you study English or get through a shift? How?", ko: "영어 공부하거나 근무 버틸 때, AI 때문에 달라진 점 있어? 어떻게?" },
      { id: "aijob-7", level: 3, en: "Do you think a job like yours — a semiconductor equipment engineer working shifts — will still look the same in ten years? Why or why not?", ko: "네 일, 반도체 설비 엔지니어에 교대근무, 십 년 뒤에도 지금이랑 비슷할 것 같아? 왜?" },
      { id: "aijob-8", level: 3, en: "If your company asked you to train an AI system to do part of your job, would you do it? Why or why not?", ko: "회사가 네 일 일부를 AI에게 가르치라고 하면 할 거야? 왜?" }
    ]
  },
  {
    id: "phone", month: "2026-11", emoji: "📱", ko: "스마트폰·SNS", en: "Could I live without my phone?",
    questions: [
      { id: "phone-1", level: 1, en: "Walk me through the first twenty minutes after you wake up. How soon do you pick up your phone?", ko: "아침에 눈 뜨고 스무 분 동안 뭐 해? 폰은 얼마나 빨리 집어?" },
      { id: "phone-2", level: 1, en: "Which apps do you open the most in a day, and what do you usually do in them?", ko: "하루에 제일 많이 여는 앱이 뭐야? 거기서 보통 뭐 해?" },
      { id: "phone-3", level: 1, en: "When you're on a night shift, or right before you sleep, how do you use your phone?", ko: "야간 근무 중이거나 잠들기 직전에 폰은 어떻게 써?" },
      { id: "phone-4", level: 2, en: "Have you ever tried to cut back on your phone or social media? How did that go?", ko: "폰이나 SNS 줄여 보려고 했던 적 있어? 어땠어?" },
      { id: "phone-5", level: 2, en: "When do you feel like your phone is actually helping you, and when does it just drain you?", ko: "폰이 진짜 도움이 될 때는 언제고, 그냥 에너지만 뺄 때는 언제야?" },
      { id: "phone-6", level: 2, en: "How does your girlfriend feel about how much you use your phone? Have you two ever talked about it?", ko: "여자친구는 네가 폰 쓰는 거 어떻게 생각해? 둘이 그 얘기 해 본 적 있어?" },
      { id: "phone-7", level: 3, en: "Do you think you could go a week without your smartphone? What would be the hardest part?", ko: "일주일 동안 스마트폰 없이 살 수 있을 것 같아? 제일 힘든 게 뭐일 것 같아?" },
      { id: "phone-8", level: 3, en: "If social media disappeared tomorrow, how do you think your life — and people's lives in Korea — would change?", ko: "내일 SNS가 전부 사라진다면, 네 삶이랑 한국 사람들 삶은 어떻게 달라질 것 같아?" }
    ]
  },
  {
    id: "money", month: "2026-11", emoji: "💰", ko: "돈과 행복", en: "Money and happiness",
    questions: [
      { id: "money-1", level: 1, en: "What do you usually spend money on in a normal month, besides rent and food?", ko: "월세랑 밥값 말고, 평범한 한 달에 돈은 보통 어디에 써?" },
      { id: "money-2", level: 1, en: "Growing up, what did your family say about money? Anything that still sticks with you?", ko: "어렸을 때 집에서 돈 얘기를 어떻게 했어? 지금까지 남는 말 있어?" },
      { id: "money-3", level: 1, en: "What's the last thing you bought that really made you happy? What was it?", ko: "최근에 산 것 중에 진짜 기뻤던 게 뭐야? 뭐였어?" },
      { id: "money-4", level: 2, en: "Was there a time in your life when money was tight? How did that feel?", ko: "돈 빠듯했던 시기 있어? 그때 기분이 어땠어?" },
      { id: "money-5", level: 2, en: "When you get a bonus or some extra money, what do you usually do with it? How do you decide?", ko: "보너스나 여윳돈이 생기면 보통 어떻게 해? 그건 어떻게 정해?" },
      { id: "money-6", level: 2, en: "Do you and your girlfriend ever talk about money? What's that like?", ko: "여자친구랑 돈 얘기 해? 그 얘기하는 거 어때?" },
      { id: "money-7", level: 3, en: "People say money can't buy happiness. Do you agree with that, or do you think that's easy to say when you already have enough?", ko: "돈으로 행복을 살 수 없다고들 하잖아. 그 말 동의해, 아니면 이미 넉넉한 사람이 하기 쉬운 말 같아?" },
      { id: "money-8", level: 3, en: "If your salary doubled tomorrow, what would actually change in your life — and what wouldn't?", ko: "내일 연봉이 두 배가 되면, 네 삶에서 진짜 달라지는 게 뭐고, 안 달라지는 건 뭐야?" }
    ]
  },
  {
    id: "fourday", month: "2026-11", emoji: "🗓️", ko: "주 4일제·워라밸", en: "A four-day week",
    questions: [
      { id: "fourday-1", level: 1, en: "What does a typical work week look like for you right now — how many days, and how long are the shifts?", ko: "지금 일주일에 며칠, 한 번 근무하면 몇 시간 일하는 거야?" },
      { id: "fourday-2", level: 1, en: "When you have a day off after a stretch of shifts, how do you usually spend it?", ko: "근무 며칠 하고 쉬는 날 생기면, 그날을 보통 어떻게 보내?" },
      { id: "fourday-3", level: 1, en: "At your company, do people talk about work-life balance, or is that not really a thing on the shop floor?", ko: "회사에서는 워라밸 얘기를 해, 아니면 현장에서는 그런 말 잘 안 나와?" },
      { id: "fourday-4", level: 2, en: "When was the last time work got in the way of something you really wanted to do? What happened?", ko: "최근에 일 때문에 정말 하고 싶었던 걸 못 한 적 있어? 무슨 일이었어?" },
      { id: "fourday-5", level: 2, en: "How does shift work mess with your time with your girlfriend, your family, or just time for yourself?", ko: "교대근무 때문에 여자친구, 가족, 아니면 혼자만의 시간이 어떻게 꼬여?" },
      { id: "fourday-6", level: 2, en: "Have you ever thought about leaving shift work for a regular nine-to-five? What stopped you, or what would it take?", ko: "교대근무 말고 일반 출퇴근으로 옮겨 볼까 생각해 본 적 있어? 뭐가 막았고, 뭐가 있어야 옮길 것 같아?" },
      { id: "fourday-7", level: 3, en: "Some countries and companies are trying a four-day workweek. Do you think that could actually work at a semiconductor plant like yours?", ko: "어떤 나라랑 회사는 주 4일제를 해 보잖아. 네 같은 반도체 공장에서도 그게 될 것 같아?" },
      { id: "fourday-8", level: 3, en: "If you only had to work four days a week, how would your life change — and do you think you'd actually be happier?", ko: "일주일에 나흘만 일하면 네 삶이 어떻게 달라질 것 같아? 그래서 더 행복해질 것 같아?" }
    ]
  },
  {
    id: "marriage", month: "2026-11", emoji: "💍", ko: "결혼·저출산", en: "Marriage and having kids",
    questions: [
      { id: "marriage-1", level: 1, en: "Among your friends and coworkers, how many people your age are married, or have kids?", ko: "친구들이나 회사 동기 중에, 네 또래에서 결혼한 사람이랑 아이 있는 사람이 얼마나 돼?" },
      { id: "marriage-2", level: 1, en: "These days in Korea, what do people around you say about getting married or having kids?", ko: "요즘 한국에서, 네 주변 사람들은 결혼이나 아이 갖는 거 가지고 뭐라고 해?" },
      { id: "marriage-3", level: 1, en: "Have you and your girlfriend ever talked about the future — living together, getting married, that kind of thing? Just in general.", ko: "여자친구랑 앞으로 살림이나 결혼 같은 얘기, 해 본 적 있어? 가볍게라도." },
      { id: "marriage-4", level: 2, en: "What's the hardest part, in your view, about dating or thinking about marriage when you work shifts?", ko: "교대근무 하면서 연애하거나 결혼 생각하면, 제일 힘든 게 뭐야?" },
      { id: "marriage-5", level: 2, en: "When you hear that Korea's birth rate is one of the lowest in the world, what's the first thing that comes to mind?", ko: "한국 출산율이 세계에서도 제일 낮다는 얘기 들으면, 제일 먼저 뭐가 떠올라?" },
      { id: "marriage-6", level: 2, en: "Do your parents ever bring up marriage or grandkids? How does that sit with you?", ko: "부모님이 결혼이나 손주 얘기를 꺼내? 그때 기분이 어때?" },
      { id: "marriage-7", level: 3, en: "Why do you think so many people in Korea are putting off marriage and kids? Is it mostly money, work, or something else?", ko: "한국에서 결혼이랑 출산을 미루는 사람이 왜 이렇게 많다고 생각해? 돈이 제일 커, 일이 커, 아니면 다른 거야?" },
      { id: "marriage-8", level: 3, en: "If the government could change just one thing to make it easier to get married or have a kid, what should it be — and would that actually change your own plans?", ko: "정부가 결혼이나 아이 갖기 쉽게 딱 한 가지만 바꿀 수 있으면 뭘 바꿔야 해? 그래서 네 계획도 달라질 것 같아?" }
    ]
  },
  {
    id: "climate", month: "2026-11", emoji: "🌍", ko: "기후 변화", en: "Climate change and my daily life",
    questions: [
      { id: "climate-1", level: 1, en: "Have the summers or winters where you live felt different in the last few years? What have you noticed?", ko: "네가 사는 데 여름이랑 겨울이 몇 년 사이에 달라진 것 같아? 뭐가 느껴져?" },
      { id: "climate-2", level: 1, en: "At the plant, do you guys do anything around energy or the environment — or is that not something you hear about on the floor?", ko: "공장에서는 에너지나 환경 관련해서 하는 거 있어? 아니면 현장에선 그런 얘기 잘 안 나와?" },
      { id: "climate-3", level: 1, en: "In your daily life, do you do anything on purpose that's supposed to be better for the environment? What is it?", ko: "평소에 환경에 좀 낫다고 해서 일부러 하는 거 있어? 뭐 해?" },
      { id: "climate-4", level: 2, en: "Was there a day recently when the weather really got to you — like a heat wave or a sudden downpour? What was that like?", ko: "최근에 날씨 때문에 진짜 고생한 날 있어? 폭염이나 갑자기 폭우 같은 거. 어땠어?" },
      { id: "climate-5", level: 2, en: "When you see news about climate change, do you feel worried, or does it feel far away from your life?", ko: "기후 변화 뉴스 보면 걱정돼, 아니면 내 삶과는 좀 먼 얘기처럼 느껴져?" },
      { id: "climate-6", level: 2, en: "Semiconductor plants use a lot of power and water. Does that ever cross your mind when you're at work?", ko: "반도체 공장이 전기랑 물을 엄청 쓰잖아. 근무할 때 그 생각이 날 때가 있어?" },
      { id: "climate-7", level: 3, en: "Who do you think should do more about climate change — governments, companies like Samsung, or regular people? Why?", ko: "기후 변화는 누가 더 나서야 한다고 생각해? 정부, 삼성 같은 회사, 아니면 일반 사람들? 왜?" },
      { id: "climate-8", level: 3, en: "If the government asked factories to cut power use, even if it slowed production, would you be for that? How would that hit a job like yours?", ko: "정부가 공장에 전기 줄이라고 하면, 생산이 좀 줄어들어도 찬성할 거야? 네 같은 일에는 어떤 영향이 있을까?" }
    ]
  }
];

/* 목록에서 뺀 주제(2026-11-17) — 옛 기록이 제목·질문을 보여 주기 위함. 고르기 목록에는 안 씀. id·질문은 그대로 둠 */
window.RETIRED_TOPIC_DATA = [
  {
    id: "shift", month: "2026-10", emoji: "🌙", ko: "교대근무 생활", en: "Life on shifts",
    questions: [
      { id: "shift-1", level: 1, en: "What does your work schedule look like this week? Walk me through it.", ko: "이번 주 근무표는 어때? 하루씩 얘기해 줘." },
      { id: "shift-2", level: 1, en: "What do you usually do after a night shift, from the moment you get home until you fall asleep?", ko: "야간 근무 끝나고 집에 와서 잠들 때까지 보통 뭐 해?" },
      { id: "shift-3", level: 1, en: "What's your commute like, and what do you do on the way?", ko: "출퇴근길은 어때? 가는 동안 뭐 해?" },
      { id: "shift-4", level: 2, en: "What's the hardest part about switching between day and night shifts? How does it affect you?", ko: "주간이랑 야간 바뀔 때 제일 힘든 게 뭐야? 너한테 어떤 영향이 있어?" },
      { id: "shift-5", level: 2, en: "How do you get through a long night shift?", ko: "긴 야간 근무는 어떻게 버텨?" },
      { id: "shift-6", level: 2, en: "Tell me about a shift that went really badly, or really well.", ko: "진짜 힘들었던, 아니면 잘 풀렸던 근무 얘기 좀 해 줘." },
      { id: "shift-7", level: 3, en: "How has shift work changed your life outside of work?", ko: "교대근무 하면서 일 말고 다른 생활은 어떻게 달라졌어?" },
      { id: "shift-8", level: 3, en: "If you could make your own work schedule, what would it look like, and why?", ko: "근무표를 네 마음대로 짤 수 있으면 어떻게 짤 거야? 왜?" }
    ]
  },
  {
    id: "solo", month: "2026-10", emoji: "🧳", ko: "혼자 여행", en: "Traveling solo",
    questions: [
      { id: "solo-1", level: 1, en: "Tell me about the last trip you took. Where did you go, and what did you do?", ko: "마지막으로 갔던 여행 얘기 좀 해 줘. 어디 가서 뭐 했어?" },
      { id: "solo-2", level: 1, en: "How do you usually get ready for a trip?", ko: "여행 가기 전에 보통 어떻게 준비해?" },
      { id: "solo-3", level: 1, en: "What does a typical day look like when you're traveling?", ko: "여행 가면 하루를 보통 어떻게 보내?" },
      { id: "solo-4", level: 2, en: "What sounds fun about traveling alone, and what sounds scary?", ko: "혼자 여행하면 뭐가 재밌을 것 같고, 뭐가 무서울 것 같아?" },
      { id: "solo-5", level: 2, en: "What's the best thing you've ever eaten on a trip? What made it so good?", ko: "여행 가서 먹은 것 중에 제일 맛있었던 게 뭐야? 뭐가 그렇게 좋았어?" },
      { id: "solo-6", level: 2, en: "Tell me about a time something went wrong on a trip.", ko: "여행하다가 일이 꼬였던 적 얘기 좀 해 줘." },
      { id: "solo-7", level: 3, en: "What do you think you can learn from traveling alone that you can't learn traveling with others?", ko: "혼자 여행하면서 배울 수 있는 것 중에, 같이 갈 땐 못 배우는 게 뭐라고 생각해?" },
      { id: "solo-8", level: 3, en: "If you could take a month off and go anywhere, how would you spend it?", ko: "한 달 쉬고 어디든 갈 수 있으면 어떻게 보낼 거야?" }
    ]
  },
  {
    id: "dayoff", month: "2026-10", emoji: "☕", ko: "쉬는 날", en: "My days off",
    questions: [
      { id: "dayoff-1", level: 1, en: "Walk me through your last day off, from morning to night.", ko: "지난번 쉬는 날을 아침부터 밤까지 얘기해 줘." },
      { id: "dayoff-2", level: 1, en: "What are your mornings like on a day off?", ko: "쉬는 날 아침은 보통 어때?" },
      { id: "dayoff-3", level: 1, en: "Where do you like to go when you want to relax, and what do you do there?", ko: "쉬고 싶을 때 즐겨 가는 곳 있어? 거기서 뭐 해?" },
      { id: "dayoff-4", level: 2, en: "What would a perfect day off look like for you?", ko: "너한테 완벽한 쉬는 날은 어떤 날이야?" },
      { id: "dayoff-5", level: 2, en: "How is a day off alone different from a day off with people? Which do you need more these days?", ko: "혼자 쉬는 날이랑 사람들 만나는 날은 어떻게 달라? 요즘은 어느 쪽이 더 필요해?" },
      { id: "dayoff-6", level: 2, en: "What chores or errands always eat up your days off? How do you feel about that?", ko: "쉬는 날마다 시간 잡아먹는 집안일이나 볼일 있어? 그거 어때?" },
      { id: "dayoff-7", level: 3, en: "What does resting well mean to you? Are you good at it?", ko: "잘 쉰다는 게 너한테는 어떤 거야? 너는 잘 쉬는 편이야?" },
      { id: "dayoff-8", level: 3, en: "If you had a three-day weekend every week, how would your life change?", ko: "매주 사흘씩 쉬면 네 생활이 어떻게 달라질 것 같아?" }
    ]
  },
  {
    id: "work", month: "2026-11", emoji: "🔧", ko: "회사 일", en: "Work as an equipment engineer",
    questions: [
      { id: "work-1", level: 1, en: "What does your job actually involve? Explain it like I've never set foot in a factory.", ko: "네 일이 실제로 어떤 거야? 공장에 한 번도 안 가 본 사람한테 설명하듯이 말해 줘." },
      { id: "work-2", level: 1, en: "What are the first few things you do when you start a shift?", ko: "근무 시작하면 제일 먼저 뭐부터 해?" },
      { id: "work-3", level: 1, en: "Who do you work with the most, and what are they like?", ko: "제일 많이 같이 일하는 사람이 누구야? 어떤 사람들이야?" },
      { id: "work-4", level: 2, en: "Tell me about a time you had to track down a tricky problem with a machine. How did you figure it out?", ko: "장비 문제 원인 찾느라 애먹었던 적 얘기해 줘. 어떻게 알아냈어?" },
      { id: "work-5", level: 2, en: "What part of your job makes you feel proud, and what part just wears you out?", ko: "일하면서 뿌듯한 순간은 언제고, 그냥 지치는 건 뭐야?" },
      { id: "work-6", level: 2, en: "Have you ever not seen eye to eye with a coworker? How did you handle it?", ko: "동료랑 의견 안 맞았던 적 있어? 어떻게 풀었어?" },
      { id: "work-7", level: 3, en: "In your opinion, what makes someone a really good engineer?", ko: "네가 보기엔 진짜 잘하는 엔지니어는 어떤 사람이야?" },
      { id: "work-8", level: 3, en: "Where do you see yourself in your career five years from now?", ko: "5년 뒤에 너는 일에서 어디쯤 있을 것 같아?" }
    ]
  },
  {
    id: "love", month: "2026-11", emoji: "💕", ko: "연애", en: "Dating and my girlfriend",
    questions: [
      { id: "love-1", level: 1, en: "How did you and your girlfriend first meet?", ko: "여자친구랑 처음에 어떻게 만났어?" },
      { id: "love-2", level: 1, en: "What do you two usually do when you hang out?", ko: "둘이 만나면 보통 뭐 해?" },
      { id: "love-3", level: 1, en: "How do you two keep in touch during the day, especially when you're at work?", ko: "하루 동안 연락은 어떻게 해? 특히 근무 중일 땐?" },
      { id: "love-4", level: 2, en: "What's your favorite memory with her so far?", ko: "지금까지 여자친구랑 있었던 일 중에 제일 좋았던 기억이 뭐야?" },
      { id: "love-5", level: 2, en: "Tell me about a time you two had a fight or a misunderstanding. How did you make up?", ko: "둘이 싸웠거나 오해 생겼던 적 얘기해 줘. 어떻게 화해했어?" },
      { id: "love-6", level: 2, en: "How does she feel about your shift schedule? How do you two make it work?", ko: "여자친구는 네 교대근무를 어떻게 생각해? 둘이 어떻게 맞춰 가?" },
      { id: "love-7", level: 3, en: "What do you think makes a relationship last?", ko: "연애가 오래가려면 뭐가 제일 중요하다고 생각해?" },
      { id: "love-8", level: 3, en: "If you could plan the perfect date with no limits on time or money, what would it be?", ko: "시간이랑 돈 상관없이 완벽한 데이트를 짤 수 있으면 어떻게 할 거야?" }
    ]
  },
  {
    id: "family", month: "2026-12", emoji: "👩‍👦", ko: "엄마랑 미국 여행 준비", en: "Planning a US trip with Mom",
    questions: [
      { id: "family-1", level: 1, en: "Where are you and your mom going in the US, and what's the plan for each city?", ko: "엄마랑 미국 어디 가? 도시마다 뭐 할 계획이야?" },
      { id: "family-2", level: 1, en: "What have you booked so far, and what do you still need to figure out?", ko: "지금까지 뭐 예약했고, 아직 정해야 할 건 뭐야?" },
      { id: "family-3", level: 1, en: "Tell me a little about your family. Who's in it, and what's everyone like?", ko: "가족 얘기 좀 해 줘. 누구누구 있고 다들 어떤 사람이야?" },
      { id: "family-4", level: 2, en: "How is planning a trip with your mom different from planning one just for yourself?", ko: "엄마랑 갈 여행 짜는 거랑 혼자 갈 여행 짜는 거랑 뭐가 달라?" },
      { id: "family-5", level: 2, en: "What are you most looking forward to on this trip, and what are you a little worried about?", ko: "이번 여행에서 제일 기대되는 게 뭐고, 좀 걱정되는 건 뭐야?" },
      { id: "family-6", level: 2, en: "Do you have a favorite memory of a family trip or outing from when you were a kid?", ko: "어릴 때 가족이랑 여행이나 나들이 갔던 기억 중에 제일 좋았던 거 있어?" },
      { id: "family-7", level: 3, en: "Why did you decide to take this trip with your mom? What does it mean to you?", ko: "왜 엄마랑 이 여행 가기로 했어? 너한테 어떤 의미야?" },
      { id: "family-8", level: 3, en: "How has your relationship with your parents changed since you became an adult?", ko: "어른이 되고 나서 부모님이랑 관계가 어떻게 달라졌어?" }
    ]
  },
  {
    id: "food", month: "2026-11", emoji: "🍜", ko: "음식·맛집", en: "Food and places to eat",
    questions: [
      { id: "food-1", level: 1, en: "What did you eat today? Walk me through your meals.", ko: "오늘 뭐 먹었어? 끼니마다 얘기해 줘." },
      { id: "food-2", level: 1, en: "Do you have a go-to restaurant? What do you always order there?", ko: "자주 가는 단골집 있어? 거기서 늘 뭐 시켜?" },
      { id: "food-3", level: 1, en: "Do you cook at home? What's something you can make pretty well?", ko: "집에서 요리해? 꽤 잘하는 요리 있어?" },
      { id: "food-4", level: 2, en: "Is there a food that reminds you of home or your childhood? Tell me about it.", ko: "집이나 어릴 때가 생각나는 음식 있어? 얘기 좀 해 줘." },
      { id: "food-5", level: 2, en: "How does working shifts mess with your eating habits?", ko: "교대근무 하면서 식습관이 어떻게 꼬였어?" },
      { id: "food-6", level: 2, en: "If a friend from abroad came to visit, which restaurant would you take them to? Why there?", ko: "외국 친구가 놀러 오면 어느 식당에 데려갈 거야? 왜 거기야?" },
      { id: "food-7", level: 3, en: "Do you think it's worth waiting in a long line for a famous restaurant? Why or why not?", ko: "유명한 맛집이면 줄 오래 서서 먹을 만하다고 생각해? 왜?" },
      { id: "food-8", level: 3, en: "If you could only eat one country's food for the rest of your life, which would you pick?", ko: "평생 한 나라 음식만 먹어야 하면 어디 걸 고를 거야?" }
    ]
  },
  {
    id: "fitness", month: "2026-11", emoji: "💪", ko: "운동·건강", en: "Working out and staying healthy",
    questions: [
      { id: "fitness-1", level: 1, en: "What kind of exercise do you do, and how often?", ko: "운동 뭐 해? 얼마나 자주 해?" },
      { id: "fitness-2", level: 1, en: "How many hours of sleep do you usually get? How do you feel when you wake up?", ko: "보통 몇 시간 자? 일어나면 컨디션 어때?" },
      { id: "fitness-3", level: 1, en: "What does a typical workout look like for you, from start to finish?", ko: "운동하러 가면 처음부터 끝까지 보통 어떻게 해?" },
      { id: "fitness-4", level: 2, en: "When is it hardest to stay motivated? What gets you going again?", ko: "운동하기 제일 싫을 때가 언제야? 그럴 땐 뭐가 다시 하게 만들어?" },
      { id: "fitness-5", level: 2, en: "Have you ever gotten hurt or sick and had to take a break? What was that like?", ko: "다치거나 아파서 쉬어야 했던 적 있어? 어땠어?" },
      { id: "fitness-6", level: 2, en: "What's one healthy habit you've picked up, and one bad habit you're trying to break?", ko: "새로 만든 좋은 습관 하나랑, 고치려는 나쁜 습관 하나 얘기해 줘." },
      { id: "fitness-7", level: 3, en: "Do you think people your age take their health seriously enough? Why or why not?", ko: "네 또래 사람들이 건강 충분히 챙긴다고 생각해? 왜?" },
      { id: "fitness-8", level: 3, en: "If you had a personal trainer and a chef for a whole year, how do you think you'd change?", ko: "1년 동안 개인 트레이너랑 요리사가 붙어 있으면 너는 어떻게 달라질 것 같아?" }
    ]
  },
  {
    id: "english", month: "2026-10", emoji: "📚", ko: "영어 공부", en: "Learning English",
    questions: [
      { id: "english-1", level: 1, en: "How are you studying English these days? Walk me through a normal study session.", ko: "요즘 영어 공부 어떻게 해? 보통 한 번 할 때 어떻게 하는지 얘기해 줘." },
      { id: "english-2", level: 1, en: "When did you first start learning English, and what was it like back then?", ko: "영어 처음 배운 게 언제야? 그땐 어땠어?" },
      { id: "english-3", level: 1, en: "What kinds of things do you watch or listen to in English?", ko: "영어로 뭐 보거나 들어?" },
      { id: "english-4", level: 2, en: "Tell me about a time you had to speak English and it went really well, or really badly.", ko: "영어로 말해야 했는데 잘 됐던 적이나 망했던 적 얘기해 줘." },
      { id: "english-5", level: 2, en: "What's the hardest part of speaking English for you? Why do you think that is?", ko: "영어로 말할 때 제일 어려운 게 뭐야? 왜 그런 것 같아?" },
      { id: "english-6", level: 2, en: "How do you feel when you listen to a recording of yourself speaking English?", ko: "녹음된 네 영어 들으면 기분이 어때?" },
      { id: "english-7", level: 3, en: "Why do you want to get better at speaking English? What would it open up for you?", ko: "영어 말하기 왜 잘하고 싶어? 잘하게 되면 뭐가 달라질 것 같아?" },
      { id: "english-8", level: 3, en: "Do you think you can become fluent without living abroad? Why or why not?", ko: "외국에 안 살아도 영어 유창해질 수 있다고 생각해? 왜?" }
    ]
  },
  {
    id: "startup", month: "2026-12", emoji: "🚀", ko: "창업의 꿈", en: "Startup dreams",
    questions: [
      { id: "startup-1", level: 1, en: "Is there a startup or company you really admire? What do they do?", ko: "진짜 멋있다고 생각하는 스타트업이나 회사 있어? 뭐 하는 곳이야?" },
      { id: "startup-2", level: 1, en: "How do you keep up with the startup world? Any podcasts, books, or people you follow?", ko: "스타트업 소식은 어떻게 챙겨 봐? 듣는 팟캐스트나 책, 팔로우하는 사람 있어?" },
      { id: "startup-3", level: 1, en: "When did you first get interested in startups? What got you hooked?", ko: "스타트업에 처음 관심 생긴 게 언제야? 뭐 때문에 빠졌어?" },
      { id: "startup-4", level: 2, en: "What's a problem in your daily life or at work that you wish someone would solve?", ko: "일상이나 회사에서 누가 좀 해결해 줬으면 하는 문제 있어?" },
      { id: "startup-5", level: 2, en: "What excites you about starting your own company, and what scares you about it?", ko: "창업한다고 생각하면 뭐가 설레고 뭐가 무서워?" },
      { id: "startup-6", level: 2, en: "How do the people around you react when you talk about startups?", ko: "네가 스타트업 얘기하면 주변 사람들은 어떻게 반응해?" },
      { id: "startup-7", level: 3, en: "If you started a company tomorrow, what would it be, and who would your first customer be?", ko: "내일 당장 창업한다면 뭘 할 거고, 첫 손님은 누구일 것 같아?" },
      { id: "startup-8", level: 3, en: "Is it better to quit your job and go all in, or build something on the side first? Why?", ko: "회사 그만두고 올인하는 게 나을까, 다니면서 먼저 조금씩 만들어 보는 게 나을까? 왜?" }
    ]
  },
  {
    id: "singapore", month: "2026-10", emoji: "🇸🇬", ko: "싱가포르 여행 돌아보기", en: "Looking back on Singapore",
    questions: [
      { id: "singapore-1", level: 1, en: "Where did you go in Singapore? Which place stood out the most?", ko: "싱가포르에서 어디어디 갔어? 제일 기억에 남는 데는 어디야?" },
      { id: "singapore-2", level: 1, en: "How did you get around the city? The MRT, taxis, walking?", ko: "도시 안에서는 어떻게 다녔어? 지하철, 택시, 아니면 걸어서?" },
      { id: "singapore-3", level: 1, en: "What was the weather like, and did it change any of your plans?", ko: "날씨는 어땠어? 그것 때문에 바뀐 계획 있어?" },
      { id: "singapore-4", level: 2, en: "Did you end up talking with any locals or other travelers? Tell me about one conversation.", ko: "현지 사람이나 다른 여행자랑 얘기해 봤어? 기억나는 대화 하나 얘기해 줘." },
      { id: "singapore-5", level: 2, en: "Was there a moment you were really glad you went alone, or wished someone was with you?", ko: "혼자 오길 잘했다 싶었던 순간이나, 누가 같이 있었으면 했던 순간 있어?" },
      { id: "singapore-6", level: 2, en: "What was it like using English for pretty much everything for a few days?", ko: "며칠 동안 거의 모든 걸 영어로 하니까 어땠어?" },
      { id: "singapore-7", level: 3, en: "What surprised you most about Singapore compared to Korea?", ko: "한국이랑 비교해서 싱가포르에서 제일 놀랐던 게 뭐야?" },
      { id: "singapore-8", level: 3, en: "Would you ever want to live or work in Singapore? Why or why not?", ko: "나중에 싱가포르에서 살거나 일해 보고 싶어? 왜?" }
    ]
  }
];
