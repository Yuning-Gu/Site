import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'About Me | Yuning Gu',
  description: 'Learn more about Yuning Gu, a pharmaceutical student passionate about drug development and biomedical science.',
};

const content = {
  en: {
    title: 'About Me',
    name_en: 'Yuning Gu',
    name_zh: '谷昱宁',
    paragraphs: [
      "Hi! I'm Yuning Gu, a soon-to-be graduate in Pharmaceutic Preparations from Heilongjiang University of Chinese Medicine. This fall, I'll be joining the Pharmacology program at the Jacobs School of Medicine and Biomedical Sciences, University at Buffalo — diving deeper into the world of drug development, biomedical science, and experimental pharmacology.",
      "My academic journey bridges traditional Chinese medicine and modern pharmaceutical science. I've explored everything from herbal formulations and GC–MS profiling to network pharmacology and molecular docking — all aimed at uncovering new therapeutic strategies for chronic diseases like diabetes.",
      "Outside the lab, you'll probably find me fishing, battling bosses in Genshin Impact or Honkai: Star Rail, reading alt-history novels, or vibing to J-pop and electronic music. I also love badminton, wild swimming, and traveling — I've adventured with friends through Thailand, Malaysia, Laos, the U.S., Russia, and Hong Kong."
    ]
  },
  zh: {
    title: '关于我',
    name_en: 'Yuning Gu',
    name_zh: '谷昱宁',
    paragraphs: [
      "你好，我是谷昱宁，黑龙江中医药大学药物制剂专业的应届毕业生。今秋，我将赴美国布法罗大学医学院药理学专业继续深造，深入探索药物研发、生物医药与实验药理学的交叉领域。",
      "在学术上，我专注于将传统中药理论与现代药学技术相结合，研究方向包括中药复方、GC–MS 成分分析、网络药理学与分子对接，致力于为糖尿病等慢性疾病寻找新的治疗思路。",
      "实验室之外，我热爱钓鱼、动漫、打游戏（特别是《原神》《崩坏：星穹铁道》和《PUBG》），也喜欢读架空历史小说、听电子乐和 J-pop，平时还会打羽毛球、野泳或四处旅行。我和同学们曾一起去过泰国、马来西亚、老挝、美国、俄罗斯和香港。"
    ]
  }
};

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang as keyof typeof content];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mb-6">
        <img
          src="/site/images/avatar.jpg"
          alt="Yuning Gu Avatar"
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.name_en}</h2>
      <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-6">{t.name_zh}</h3>

      <div className="max-w-4xl text-left">
        {t.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-sm">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
} 