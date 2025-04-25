import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yuning Gu',
  description: 'Personal website of Yuning Gu',
}

const content = {
  en: {
    title: "About Me",
    paragraphs: [
      "Hi, I'm Yuning Gu — a final-year student majoring in Pharmaceutic Preparations at Heilongjiang University of Chinese Medicine. I'm passionate about pharmacology, drug development, and biomedical science. This fall, I'll pursue a Master's in Pharmacology at the University at Buffalo's Jacobs School of Medicine and Biomedical Sciences.",
      "Throughout my academic career, I've cultivated skills in experimental pharmacology, traditional medicine formulation, and data analysis. My research blends modern analytical chemistry and molecular modeling with traditional herbal medicine to uncover effective treatments for chronic diseases like diabetes.",
      "In my free time, I enjoy fishing, anime, gaming (especially Genshin Impact, Honkai: Star Rail, and PUBG), reading alt-history fiction, listening to electronic and J-pop music, playing badminton, swimming outdoors, and exploring new places. I've traveled with classmates to Thailand, Malaysia, Laos, the U.S., Russia, and Hong Kong."
    ]
  },
  zh: {
    title: "关于我",
    paragraphs: [
      "你好，我是谷昱宁——黑龙江中医药大学制药专业的大四学生。我对药理学、药物开发和生物医学科学充满热情。今年秋季，我将在布法罗大学雅各布医学与生物医学科学学院攻读药理学硕士学位。",
      "在我的学术生涯中，我培养了实验药理学、传统医药配方和数据分析的技能。我的研究将现代分析化学和分子建模与传统草药相结合，以发现治疗糖尿病等慢性疾病的有效方法。",
      "在业余时间，我喜欢钓鱼、看动漫、玩游戏（特别是原神、崩坏：星穹铁道和绝地求生），阅读架空历史小说，听电子音乐和J-pop，打羽毛球，户外游泳，探索新地方。我和同学一起去过泰国、马来西亚、老挝、美国、俄罗斯和香港。"
    ]
  }
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const t = content[params.lang as keyof typeof content] || content.en

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t.title}</h1>
      {t.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  )
} 