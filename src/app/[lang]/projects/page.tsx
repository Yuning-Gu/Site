import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Projects | Yuning Gu',
  description: 'Research projects and academic work in pharmaceutical sciences and traditional Chinese medicine.',
};

const content = {
  en: {
    title: 'Projects',
    projects: [
      {
        title: 'Development of Peony Bark–Dang Gui Formula Microparticles',
        period: '2023 – 2024',
        role: 'Research Team Member',
        description: 'This project aimed to develop an innovative sustained-release microparticle formulation combining tree peony bark extract with the classical traditional Chinese formula Dang Gui Shao Yao San, designed to help prevent or alleviate complications of diabetes.',
        highlights: [
          'Participated in extraction and composition analysis of Cannabis sativa, peony bark, and Dang Gui Shao Yao San',
          'Conducted qualitative and quantitative analysis of active ingredients using HPLC and GC–MS',
          'Assisted in the preparation of sustained-release microparticles using electrostatic layer-by-layer (LBL) self-assembly technology',
          'Optimized the formulation ratio based on traditional Chinese medicine theory and modern pharmacological principles',
          'Received the Excellence Award at the 9th "Internet+" College Students Innovation and Entrepreneurship Competition, Heilongjiang University of Chinese Medicine (Aug 2023)'
        ]
      },
      {
        title: 'Innovation and Entrepreneurship in Herbal Health Beverages',
        period: '2022 – 2023',
        role: 'Project Leader',
        description: 'Led the planning and creation of Jujing, a health-focused herbal milk tea brand that integrated traditional Chinese medicinal ingredients into trendy beverages, promoting wellness and TCM culture among younger consumers.',
        highlights: [
          'Designed product structure, ingredient selection, and brand positioning strategy',
          'Developed a series of functional drinks using food-grade herbal ingredients such as goji berries, five-juice blends, and peach gum with red dates',
          'Created culturally themed packaging with Chinese-style illustrations and "stamp collection" campaigns to enhance user engagement',
          'Promoted the brand concept of "Guochao + Wellness," combining traditional aesthetics with modern marketing',
          'Received the Excellence Award at the "Challenge Cup" Innovation and Entrepreneurship Competition, Heilongjiang University of Chinese Medicine (Jun 2022)'
        ]
      }
    ]
  },
  zh: {
    title: '项目经历',
    projects: [
      {
        title: '复方丹皮当归微胶囊开发',
        period: '2023 – 2024',
        role: '研究团队成员',
        description: '本项目以中药经典方剂当归芍药散为基础，结合牡丹皮提取物，开发具有缓释特性的创新型微胶囊制剂，用于预防或缓解糖尿病及其并发症。',
        highlights: [
          '参与火麻仁、牡丹皮、当归芍药散等药材的提取工艺与成分分析',
          '运用高效液相色谱（HPLC）与气相色谱-质谱联用技术（GC–MS）对有效成分进行定性与定量研究',
          '协助利用静电吸引层层自组装技术（LBL）制备缓释型微胶囊制剂',
          '基于中医传统组方理论，优化丹皮与当归芍药散的配伍比例与用量关系',
          '获得黑龙江中医药大学第九届"互联网+"大学生创新创业大赛优秀奖（2023.08）'
        ]
      },
      {
        title: '中药健康饮品创新创业实践',
        period: '2022 – 2023',
        role: '项目策划负责人',
        description: '以药食同源中药材为基础，策划创立"橘井"品牌，打造具有文化传播力的中药养生奶茶产品，推广中医药健康理念，吸引年轻人群关注传统医学。',
        highlights: [
          '制定项目实施方案，明确产品结构、原料选配与市场定位',
          '设计并开发多款药食同源健康茶饮，如枸杞红茶、五汁饮与桃胶红枣茶',
          '参与产品包装设计与品牌文化塑造，突出"国潮+养生"核心理念',
          '策划集章打卡、传统文化联名插画等营销活动，增强产品文化粘性',
          '获得黑龙江中医药大学"挑战杯"大学生创新创业竞赛优秀奖（2022.06）'
        ]
      }
    ]
  }
};

export default function ProjectsPage({ params }: { params: { lang: Locale } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>
      
      <div className="space-y-6">
        {t.projects.map((project, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                {project.period}
              </div>
            </div>
            
            <div className="text-blue-600 dark:text-blue-400 mb-3 text-sm">
              {project.role}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
              {project.description}
            </p>
            
            <div className="pl-4 border-l-4 border-blue-500">
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">
                {params.lang === 'zh' ? '主要成果：' : 'Key Achievements:'}
              </h3>
              <ul className="space-y-1.5 text-sm">
                {project.highlights.map((highlight, i) => (
                  <li 
                    key={i} 
                    className="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span className="mr-2 text-blue-500 text-xs">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 