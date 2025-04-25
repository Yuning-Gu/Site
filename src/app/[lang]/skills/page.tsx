import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Skills | Yuning Gu',
  description: 'Professional skills and competencies of Yuning Gu in pharmaceutical research and development.',
};

const content = {
  en: {
    title: 'Skills',
    categories: [
      {
        name: 'Laboratory Techniques',
        skills: [
          'High-Performance Liquid Chromatography (HPLC)',
          'Gas Chromatography–Mass Spectrometry (GC–MS)',
          'Spectrophotometry',
          'Cell culture and maintenance',
          'Enzyme inhibition assays',
          'Basic molecular biology techniques: PCR, Western blot',
          'Hematoxylin and Eosin (H&E) staining'
        ]
      },
      {
        name: 'Research & Data Analysis',
        skills: [
          'Experimental design and protocol development',
          'Data analysis and visualization (GraphPad Prism, Excel)',
          'Statistical analysis (SPSS, R)',
          'Literature review and critical appraisal',
          'Research documentation and reporting'
        ]
      },
      {
        name: 'Software & Digital Tools',
        skills: [
          'GraphPad Prism, SPSS, ChemDraw',
          'Microsoft Office Suite (Word, Excel, PowerPoint)',
          'Laboratory Information Management Systems (LIMS)',
          'Basic programming in Python and C#',
          'Familiarity with SAP systems for inventory and quality management'
        ]
      },
      {
        name: 'Languages & Communication',
        skills: [
          'Chinese: Native',
          'English: Professional working proficiency (IELTS 6.5)',
          'Scientific writing and technical documentation',
          'Bilingual presentation and reporting skills'
        ]
      }
    ]
  },
  zh: {
    title: '技能专长',
    categories: [
      {
        name: '实验技术',
        skills: [
          '高效液相色谱（HPLC）',
          '气相色谱-质谱联用技术（GC–MS）',
          '紫外可见分光光度法',
          '细胞培养与维护',
          '酶抑制活性检测',
          '分子生物学基础技术：PCR、Western Blot',
          '苏木精-伊红染色（H&E染色）'
        ]
      },
      {
        name: '科研与数据分析',
        skills: [
          '实验设计与实验方案制定',
          '数据分析与图表可视化（GraphPad Prism，Excel）',
          '统计分析（SPSS，R语言）',
          '文献综述与批判性分析',
          '科研记录与实验报告撰写'
        ]
      },
      {
        name: '软件与数字工具',
        skills: [
          'GraphPad Prism、SPSS、ChemDraw',
          'Microsoft Office 办公软件（Word, Excel, PowerPoint）',
          '实验室信息管理系统（LIMS）',
          'Python 和 C# 编程基础',
          '熟悉 SAP 系统在库存管理与质量控制中的应用'
        ]
      },
      {
        name: '语言与沟通能力',
        skills: [
          '汉语：母语',
          '英语：专业工作水平（雅思 6.5）',
          '科研写作与技术文档编写',
          '中英文双语展示与汇报能力'
        ]
      }
    ]
  }
};

export default function SkillsPage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li 
                  key={i} 
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-2">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 