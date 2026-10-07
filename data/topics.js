/* 주제·질문 (규칙은 CLAUDE.md '주제·질문 작성 규칙')
   주제: { id, month: "YYYY-MM"(그 달 추천), emoji, ko, en, questions }
   질문: { id(주제id-번호, 절대 안 바꿈), level: 1 쉬움(사실) | 2 중간(경험·감정) | 3 깊음(의견·가정), en, ko(반말) }
   주제마다 쉬움 3 · 중간 3 · 깊음 2 (질문 5개를 고르면 2·2·1을 뽑음) */
window.TOPIC_DATA = [
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
  }
];
