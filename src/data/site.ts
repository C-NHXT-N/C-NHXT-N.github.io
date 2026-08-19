export type Locale = 'zh' | 'en';

export const locales: Locale[] = ['zh', 'en'];

export const copy = {
  zh: {
    languageLabel: 'English',
    languageCode: 'EN',
    siteTitle: '郭艾咏｜机器人系统与具身智能',
    siteDescription: '郭艾咏的双语机器人个人主页：项目、技能、科研兴趣与工程成果。',
    nav: { home: '首页', projects: '项目', about: '关于' },
    heroEyebrow: 'ROBOTICS · CONTROL · EMBODIED AI',
    heroTitle: '郭艾咏',
    heroHeadline: '把机器人想法，做成可运行的系统。',
    heroBody:
      '江南大学机器人工程专业学生。我的工作跨越机构设计、嵌入式控制、机器人感知与自主导航，关注智能机器人和具身智能。',
    heroRoles: ['机器人系统', '机构与控制', '智能感知'],
    viewProjects: '查看项目',
    contactMe: '邮件联系',
    resumePending: '公开版简历整理中',
    proofTitle: '以工程为底座，以研究为方向',
    featuredProjects: '精选项目',
    featuredProjectsBody: '四个跨机械、电子、控制与智能感知的完整工程案例。',
    allProjects: '查看全部项目',
    skillTitle: '技能树',
    skillBody: '围绕机器人系统主干组织能力，不用百分比替代真实项目证据。',
    achievementsTitle: '科研与竞赛',
    achievementsBody: '经简历材料核实的专利、论文与竞赛成果。',
    aboutTitle: '关于我',
    aboutLead: '从机构到智能，我喜欢把一个复杂问题拆成能验证、能联调、能运行的系统。',
    aboutBody:
      '我就读于江南大学智能制造学院机器人工程专业。项目经历让我同时接触机械结构、电路、控制、视觉与机器人软件栈，也让我逐步把研究兴趣聚焦到具身智能、长时序机器人操作与机器人记忆。',
    interestsTitle: '研究兴趣',
    educationTitle: '教育与基础',
    timelineTitle: '经历时间线',
    contactTitle: '期待交流机器人研究与工程实践',
    contactBody: '欢迎导师、研究者与工程团队通过邮箱或 GitHub 与我联系。',
    projectsTitle: '项目经历',
    projectsLead: '从问题定义、系统设计到联调验证，呈现我在每个项目中的实际贡献。',
    projectChallenge: '背景与挑战',
    projectSolution: '系统方案',
    projectContribution: '个人贡献',
    projectTech: '技术栈',
    projectEvidence: '图片证据',
    projectOutcome: '成果',
    backProjects: '返回项目列表',
    nextProject: '下一个项目',
    footerLine: '用机构、控制与智能感知构建机器人。',
    themeToggle: '切换深浅色主题',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    skipLink: '跳到主要内容',
    notFoundTitle: '页面暂时离线',
    notFoundBody: '你访问的页面不存在，回到首页继续探索项目。',
    returnHome: '返回首页',
  },
  en: {
    languageLabel: '中文',
    languageCode: '中',
    siteTitle: 'Aiyong Guo | Robotics Systems & Embodied AI',
    siteDescription: 'The bilingual robotics portfolio of Aiyong Guo: projects, skills, research interests and engineering work.',
    nav: { home: 'Home', projects: 'Projects', about: 'About' },
    heroEyebrow: 'ROBOTICS · CONTROL · EMBODIED AI',
    heroTitle: 'Aiyong Guo',
    heroHeadline: 'Turning robotics ideas into working systems.',
    heroBody:
      'A Robotics Engineering student at Jiangnan University. I work across mechanism design, embedded control, robot perception and autonomous navigation, with interests in intelligent robotics and embodied AI.',
    heroRoles: ['Robotics Systems', 'Mechanism & Control', 'Intelligent Perception'],
    viewProjects: 'View projects',
    contactMe: 'Email me',
    resumePending: 'Public résumé in preparation',
    proofTitle: 'Engineering as the foundation, research as the direction',
    featuredProjects: 'Selected projects',
    featuredProjectsBody: 'Four end-to-end engineering cases spanning mechanics, electronics, control and intelligent perception.',
    allProjects: 'View all projects',
    skillTitle: 'Skill tree',
    skillBody: 'Capabilities organized around robotics systems, supported by real project evidence instead of percentages.',
    achievementsTitle: 'Research & competitions',
    achievementsBody: 'Patents, publication and competition results verified from the supplied résumé.',
    aboutTitle: 'About me',
    aboutLead: 'From mechanisms to intelligence, I enjoy turning complex problems into systems that can be tested, integrated and run.',
    aboutBody:
      'I study Robotics Engineering at the School of Intelligent Manufacturing, Jiangnan University. My projects span mechanisms, electronics, control, vision and the robotics software stack, and have shaped my current interests in embodied AI, long-horizon manipulation and robot memory.',
    interestsTitle: 'Research interests',
    educationTitle: 'Education & foundations',
    timelineTitle: 'Experience timeline',
    contactTitle: 'Let’s discuss robotics research and engineering',
    contactBody: 'Advisors, researchers and engineering teams are welcome to reach out by email or GitHub.',
    projectsTitle: 'Project experience',
    projectsLead: 'From problem framing and system design to integration, each case documents my concrete contribution.',
    projectChallenge: 'Context & challenge',
    projectSolution: 'System approach',
    projectContribution: 'My contribution',
    projectTech: 'Technology stack',
    projectEvidence: 'Visual evidence',
    projectOutcome: 'Outcome',
    backProjects: 'Back to projects',
    nextProject: 'Next project',
    footerLine: 'Building robots with mechanisms, control and intelligent perception.',
    themeToggle: 'Toggle light and dark theme',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    skipLink: 'Skip to main content',
    notFoundTitle: 'This page is offline',
    notFoundBody: 'The page you requested does not exist. Return home to explore the projects.',
    returnHome: 'Return home',
  },
} as const;

export const proofPoints = [
  { value: '4', zh: '完整工程案例', en: 'End-to-end projects' },
  { value: '4', zh: '机器人能力分支', en: 'Robotics skill branches' },
  { value: '2×', zh: '全国一等奖', en: 'National first prizes' },
  { value: '1', zh: '授权发明专利', en: 'Granted invention patent' },
] as const;

export const skillBranches = [
  {
    id: 'mechanics',
    mark: 'ME',
    zh: { title: '机械设计', description: '将功能目标转化为可制造、可装配的机构。' },
    en: { title: 'Mechanical Design', description: 'Turning functional goals into manufacturable, integrated mechanisms.' },
    skills: ['SolidWorks', 'AutoCAD', 'Blender', '机构设计 / Mechanisms'],
  },
  {
    id: 'control',
    mark: 'CE',
    zh: { title: '控制与电子', description: '完成传感、控制、电路设计与嵌入式联调。' },
    en: { title: 'Control & Electronics', description: 'Integrating sensing, control, electronics and embedded systems.' },
    skills: ['MATLAB', 'STM32', 'PID', 'S7-1200', '嘉立创 EDA / PCB'],
  },
  {
    id: 'autonomy',
    mark: 'AI',
    zh: { title: '感知与自主', description: '让机器人理解环境、定位自身并规划行动。' },
    en: { title: 'Perception & Autonomy', description: 'Helping robots perceive, localize and plan actions.' },
    skills: ['ROS2', 'ORB-SLAM3', 'YOLOv5', '作物行识别 / Row vision', '路径规划 / Planning'],
  },
  {
    id: 'software',
    mark: 'SW',
    zh: { title: '软件与工具', description: '用可靠的软件工具连接算法、硬件与实验。' },
    en: { title: 'Software & Tools', description: 'Connecting algorithms, hardware and experiments with reliable tooling.' },
    skills: ['C/C++', 'Python', 'Linux / Ubuntu', 'Jetson Orin Nano', 'Keil · VS Code · Vim'],
  },
] as const;

export const achievements = [
  {
    year: '2025',
    type: 'competition',
    zh: { title: '全国三维数字化创新设计大赛', meta: '全国一等奖 · 排名第一' },
    en: { title: 'National 3D Digital Innovation Design Competition', meta: 'National First Prize · Ranked 1st' },
  },
  {
    year: '2025',
    type: 'competition',
    zh: { title: '中国机器人及人工智能大赛', meta: '全国二等奖 · 排名第一' },
    en: { title: 'China Robotics and Artificial Intelligence Competition', meta: 'National Second Prize · Ranked 1st' },
  },
  {
    year: '2025',
    type: 'competition',
    zh: { title: '大学生先进成图技术与产品信息建模大赛', meta: '全国三等奖 · 排名第一' },
    en: { title: 'National Advanced Drawing and Product Information Modeling Competition', meta: 'National Third Prize · Ranked 1st' },
  },
  {
    year: '2025',
    type: 'patent',
    zh: { title: '《一种大葱收获机》', meta: '国家发明专利 · 已授权 · 第一发明人' },
    en: { title: '“A Scallion Harvester”', meta: 'Granted National Invention Patent · First Inventor' },
  },
  {
    year: '2024',
    type: 'paper',
    zh: { title: '《基于工程实践的一种太阳能无碳小车设计》', meta: '《机械》2024 年 6 期 · 第二作者' },
    en: { title: '“Design of a Solar Carbon-Free Car Based on Engineering Practice”', meta: 'Machinery, Issue 6, 2024 · Second Author' },
  },
  {
    year: '2024',
    type: 'competition',
    zh: { title: '全国大学生数学建模竞赛', meta: '江苏省一等奖 · 排名第一' },
    en: { title: 'National Undergraduate Mathematical Contest in Modeling', meta: 'Jiangsu First Prize · Ranked 1st' },
  },
  {
    year: '2024',
    type: 'competition',
    zh: { title: '中国大学生过程装备实践与创新赛', meta: '全国二等奖 · 排名第三' },
    en: { title: 'China College Students Process Equipment Practice and Innovation Competition', meta: 'National Second Prize · Ranked 3rd' },
  },
  {
    year: '2024',
    type: 'competition',
    zh: { title: '江苏省大学生机械创新设计大赛', meta: '江苏省二等奖 · 排名第一' },
    en: { title: 'Jiangsu Undergraduate Mechanical Innovation Design Competition', meta: 'Jiangsu Second Prize · Ranked 1st' },
  },
  {
    year: '2023',
    type: 'competition',
    zh: { title: '中国大学生工程实践与创新能力大赛', meta: '全国一等奖 · 排名第二' },
    en: { title: 'China College Students Engineering Practice and Innovation Competition', meta: 'National First Prize · Ranked 2nd' },
  },
] as const;

export const researchInterests = [
  { zh: '具身智能与 VLA', en: 'Embodied AI & VLA' },
  { zh: '长时序机器人操作', en: 'Long-horizon robot manipulation' },
  { zh: '机器人记忆与检索', en: 'Robot memory & retrieval' },
  { zh: '自主机器人系统', en: 'Autonomous robotic systems' },
] as const;

export const education = {
  zh: {
    school: '江南大学 · 智能制造学院',
    degree: '机器人工程专业（双一流、211）',
    detail: '机器人工程 · 智能制造 · 跨学科工程实践',
    courses: '相关课程：机器人传感与检测技术、线性代数、复变函数与积分变换、计算机控制系统',
  },
  en: {
    school: 'Jiangnan University · School of Intelligent Manufacturing',
    degree: 'B.Eng. candidate in Robotics Engineering · Double First-Class · Project 211',
    detail: 'Robotics Engineering · Intelligent Manufacturing · Interdisciplinary engineering practice',
    courses: 'Relevant coursework: Robot Sensing, Linear Algebra, Complex Variables and Computer Control Systems',
  },
} as const;

export const email = 'aiyong_guo@163.com';
export const github = 'https://github.com/C-NHXT-N';

export function localePath(locale: Locale, path = '/') {
  if (locale === 'zh') return path;
  if (path === '/') return '/en/';
  return `/en${path}`;
}

export function alternatePath(locale: Locale, path: string) {
  if (locale === 'zh') return path === '/' ? '/en/' : `/en${path}`;
  return path.replace(/^\/en/, '') || '/';
}
