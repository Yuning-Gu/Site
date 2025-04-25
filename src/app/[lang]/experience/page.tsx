import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Experience | Yuning Gu',
  description: 'Professional experience and research work of Yuning Gu.',
};

const content = {
  en: {
    title: 'Experience',
    experiences: [
      {
        title: 'Undergraduate Research Participant',
        organization: 'Heilongjiang University of Chinese Medicine',
        period: '2023 – 2024',
        description: [
          'Participated in a multidisciplinary research project focused on the application of traditional Chinese medicine (TCM) in managing type 2 diabetes',
          'Conducted preliminary literature reviews and pathway analyses to support the identification of active herbal compounds',
          'Assisted with the preparation and extraction of herbal samples using optimized protocols for compound isolation',
          'Performed chromatographic and spectrometric analysis (HPLC and MS) to identify and quantify major constituents',
          'Contributed to experimental data recording, statistical analysis, and visualization using tools such as Excel and GraphPad Prism',
          'Collaborated closely with graduate students and faculty mentors, developing a foundational understanding of experimental pharmacology and evidence-based herbal medicine research'
        ]
      },
      {
        title: 'QC Intern',
        organization: 'Bayer (China) Limited – Dihon Pharmaceutical Group Co., Ltd., Yunnan',
        period: 'Nov 2024 – Present',
        description: [
          'Engaged in hands-on quality control testing of pharmaceutical raw materials and finished dosage forms within a GMP-compliant laboratory environment',
          'Operated and maintained analytical instruments including HPLC (Agilent series) and NIR spectrometers to ensure product compliance with pharmacopeial standards',
          'Conducted microbial limit tests and participated in environmental monitoring procedures to ensure aseptic manufacturing standards',
          'Compiled, reviewed, and verified batch testing records and SOP documentation, contributing to internal audit readiness and regulatory reporting',
          'Completed tasks under the supervision of senior analysts and gained exposure to pharmaceutical quality systems, deviation reporting, and CAPA processes',
          'Achieved 0 CAPA records during the Dec–Jan evaluation period, demonstrating attention to detail and adherence to regulatory protocols'
        ]
      }
    ]
  },
  zh: {
    title: '实习与科研经历',
    experiences: [
      {
        title: '本科科研参与者',
        organization: '黑龙江中医药大学',
        period: '2023 – 2024',
        description: [
          '参与多学科交叉课题，研究中药在2型糖尿病治疗中的应用潜力',
          '协助完成文献综述及信号通路分析，支持活性成分的筛选与机制探索',
          '负责中药样品的前处理与提取工艺优化，提升有效成分提取率',
          '使用高效液相色谱（HPLC）和质谱（MS）技术进行成分鉴定与含量测定',
          '运用Excel和GraphPad Prism等工具完成实验数据的整理、统计与可视化',
          '在课题过程中与研究生和指导教师密切协作，深入理解实验药理学与中药现代化研究的核心方法与流程'
        ]
      },
      {
        title: '质量控制实习生',
        organization: '拜耳中国有限公司 – 滇虹药业集团股份有限公司（云南）',
        period: '2024年11月 – 至今',
        description: [
          '在符合GMP标准的实验室中参与药品原辅料及成品的质量控制检测',
          '熟练操作Agilent系列HPLC仪器及近红外光谱仪（NIR），确保产品符合《中国药典》标准',
          '协助完成药品微生物限度检查和洁净区环境监测，保障生产环境符合无菌要求',
          '编写和核查批检记录与标准操作规程（SOP）文档，协助准备内部审计资料',
          '在资深分析师指导下，系统学习质量管理体系、偏差报告与CAPA流程',
          '在2024年12月至2025年1月期间，所在QC小组实现"零偏差记录"，体现了良好的操作规范与质量意识'
        ]
      }
    ]
  }
};

export default function ExperiencePage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>
      
      <div className="space-y-8">
        {t.experiences.map((exp, index) => (
          <div key={index} className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.title}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400">
              {exp.organization}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.period}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 