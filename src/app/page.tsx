import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개발자 프로필 | Developer Portfolio",
  description: "복잡한 문제를 단순하고 직관적인 가치로 풀어내는 소프트웨어 엔지니어의 프로필입니다.",
};

export default function Home() {
  const techStacks = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand"] },
    { category: "Backend & DB", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "RESTful API"] },
    { category: "DevOps & Tools", items: ["Git", "GitHub Actions", "Docker", "Vercel", "Figma"] },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      desc: "오픈소스 기여 및 프로젝트 코드 저장소",
      url: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "Tech Blog",
      desc: "개발 트러블슈팅과 배운 점을 기록하는 블로그",
      url: "https://velog.io",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      name: "Email",
      desc: "프로젝트 협업 및 커피챗 문의",
      url: "mailto:developer@example.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-2xl space-y-10">
        
        {/* 상단 프로필 헤더 */}
        <section className="flex flex-col items-center text-center space-y-4 pt-4">
          <div className="relative">
            {/* 아바타 이미지/아이콘 */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-[3px] shadow-lg">
              <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center text-3xl font-bold text-zinc-800 dark:text-zinc-100">
                👨‍💻
              </div>
            </div>
            {/* 상태 뱃지 */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-900"></span>
            </span>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/50 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              새로운 협업 및 기회에 열려있습니다 (Open to Work)
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              김개발 <span className="text-zinc-400 text-lg font-normal">/ Software Engineer</span>
            </h1>
            <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
              복잡한 문제를 단순하고 직관적인 소프트웨어로 풀어내는 개발자
            </p>
          </div>
        </section>

        {/* 개발자 소개글 (About Me) */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 shadow-sm border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span>👋</span> 소개 (About Me)
          </h2>
          <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base space-y-3">
            <p>
              안녕하세요! <strong>기술로 일상의 비효율을 해결하고 더 나은 사용자 경험을 만드는 것에 깊은 몰입감</strong>을 느끼는 개발자입니다.
            </p>
            <p>
              단순히 기능이 동작하는 것에 그치지 않고, <strong>읽기 쉽고 유지보수하기 좋은 클린 코드</strong>와 <strong>안정적인 시스템 아키텍처</strong>를 고민합니다. 비즈니스 요구사항을 빠르게 구체화하고, 사용자 피드백을 기민하게 반영하는 사이클을 선호합니다.
            </p>
            <p>
              동료와의 투명한 소통과 코드 리뷰 문화를 소중히 여기며, 함께 성장할 수 있는 지속 가능한 개발 환경을 만들어가는 것을 지향합니다.
            </p>
          </div>
        </section>

        {/* 핵심 가치 & 강점 */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
            <div className="text-xl mb-1">⚡</div>
            <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">빠른 실행과 검증</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
              아이디어를 기민하게 프로토타입으로 만들고 피드백을 통해 개선합니다.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
            <div className="text-xl mb-1">🧱</div>
            <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">지속 가능한 코드</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
              확장성과 가독성을 고려하여 동료가 안심하고 읽을 수 있는 코드를 작성합니다.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
            <div className="text-xl mb-1">🤝</div>
            <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">원활한 소통과 협업</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
              기획, 디자인의 의도를 깊이 공감하고 최적의 합의점을 함께 찾아냅니다.
            </p>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 shadow-sm border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span>🛠️</span> 기술 스택 (Tech Stack)
          </h2>
          <div className="space-y-3">
            {techStacks.map((stack) => (
              <div key={stack.category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 sm:w-28 shrink-0">
                  {stack.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 링크 & 소셜 */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 px-1 flex items-center gap-2">
            <span>🔗</span> 채널 및 링크 (Links)
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {link.desc}
                    </div>
                  </div>
                </div>
                <div className="text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="pt-6 pb-4 text-center text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-200 dark:border-zinc-800/80">
          <p>© {new Date().getFullYear()} Developer Profile. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}
