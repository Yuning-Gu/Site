import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Research | Yuning Gu',
  description: 'Research interests and ongoing projects in pharmaceutical sciences and traditional Chinese medicine.',
};

// Updated content structure for specific projects
const content = {
  en: {
    title: 'Research',
    projects: [
      {
        title: 'Hypoglycemic Mechanisms of Peony Seed Blended Oil',
        details: [
          'This project investigated the antidiabetic potential of a functional oil blend composed of peony seed oil, soybean oil, and canola oil through in vitro enzyme inhibition, GC–MS analysis, network pharmacology, and molecular docking.',
          'In vitro assays demonstrated strong inhibitory effects on α-amylase and α-glucosidase, with IC₅₀ values of 3.95 mg/mL and 2.81 mg/mL, respectively. The blend outperformed acarbose in inhibitory rates (80.47% vs. 69.39%).',
          'Response surface methodology optimized the blend ratio to 60:27:11 (peony:soybean:canola), maximizing synergistic efficacy and compound activity.',
          'GC–MS identified key bioactive constituents, including α-linolenic acid, linoleic acid, palmitic acid, and γ-sitosterol.',
          'Network pharmacology and molecular docking revealed PPARG and MAPK3 as major targets, involving pathways such as PPAR signaling, IL-17, and insulin resistance.'
        ],
        publications: [
          { text: 'Journal of Clinical Medicine Research, 2024.', doi: '10.14740/jocmr5073' },
          { text: 'Journal of Functional Foods, 2025.', doi: '10.1016/j.jff.2024.106652' }
        ]
      },
      {
        title: 'Anti-Colorectal Cancer Mechanism of Cannabis sativa Aqueous Extract',
        details: [
          'This undergraduate thesis project explored the anti-CRC effects of Cannabis sativa extract through compound identification, network-based analysis, and experimental validation in vitro.',
          'Active compounds were identified via GC–MS and their potential targets predicted using TCMSP and SuperPred databases.',
          'Differentially expressed genes from the GEO dataset GSE44076 were analyzed using WGCNA to construct a PPI network. Key targets identified included IL6, IL1B, and WNT5A.',
          'GO and KEGG enrichment analyses indicated involvement in IL-17, TNF, and RAGE signaling pathways.',
          'HCT116 colorectal cancer cells were used to evaluate anti-proliferative and anti-migratory effects via CCK-8 and Transwell assays.',
          'Western blotting confirmed an increased BAX/BCL-2 ratio, indicating activation of mitochondrial-mediated apoptosis.',
          'This work constitutes the core of my undergraduate thesis, which has been completed and is currently under departmental review.'
        ],
        publications: [] // No publications for this project
      }
    ]
  },
  zh: {
    title: '研究方向',
    projects: [
       {
        title: '牡丹籽复方油的降糖机制研究',
        details: [
          '本研究以牡丹籽油为基础，联合大豆油与菜籽油，通过体外酶活性筛选、GC–MS成分分析、网络药理学和分子对接等手段，系统探讨其对糖尿病的潜在干预机制。',
          '在体外实验中，牡丹籽复方油对α-淀粉酶和α-葡萄糖苷酶展现出显著抑制活性，IC₅₀分别为3.95 mg/mL与2.81 mg/mL，抑制率优于阿卡波糖（80.47% vs. 69.39%）',
          '响应面优化显示最佳配比为牡丹籽油:大豆油:菜籽油 = 60:27:11，该配方在成分活性与协同作用上最为优越',
          'GC–MS检测鉴定出α-亚麻酸、亚油酸、棕榈酸和γ-谷甾醇等多种主要活性成分',
          '网络药理与分子对接结果揭示PPARG和MAPK3为潜在核心靶点，相关通路包括PPAR、IL-17、胰岛素抵抗等'
        ],
        publications: [
           { text: 'Journal of Clinical Medicine Research, 2024,', doi: '10.14740/jocmr5073' },
           { text: 'Journal of Functional Foods, 2025,', doi: '10.1016/j.jff.2024.106652' }
        ]
      },
      {
        title: '火麻仁水提物抗结直肠癌机制研究',
        details: [
          '本课题基于火麻仁水提物的GC–MS成分分析、GEO数据库数据挖掘、网络药理及体外细胞实验，探究其抗结直肠癌作用机制，为中药抗肿瘤研究提供理论依据。',
          '利用TCMSP和SuperPred预测火麻仁成分靶点，结合GSE44076数据集应用WGCNA挖掘与结直肠癌高度相关的基因模块',
          '通过交集构建PPI网络，筛选出IL6、IL1B、WNT5A等关键靶点，结合GO与KEGG富集分析揭示其调控IL-17、TNF、RAGE等炎症相关通路',
          '在HCT116结直肠癌细胞中开展CCK-8、Transwell与Western blot实验，实验证实火麻仁水提物具有促进细胞凋亡与抑制迁移能力',
          '观察到BAX/BCL-2表达比值升高，提示其可能通过线粒体通路诱导凋亡',
          '本研究为本科毕业论文核心内容，目前已完成并进入校内评审阶段'
        ],
        publications: []
      }
    ]
  }
};

export default function ResearchPage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang];

  // Render projects based on the new structure
  return (
    <div> 
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>
      
      <div className="space-y-12"> {/* Spacing between projects */} 
        {t.projects.map((project, index) => (
          // Project card
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h2>
            {/* Render project details */} 
            {project.details.map((detail, i) => (
               <p key={`detail-${i}`} className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">{detail}</p>
            ))}
            {/* Render publications if they exist */} 
            {project.publications && project.publications.length > 0 && (
              <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {params.lang === 'zh' ? '研究成果发表于：' : 'Research outcomes were published in:'}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.publications.map((pub, i) => (
                    <li key={`pub-${i}`} className="text-gray-700 dark:text-gray-300">
                      {pub.text} DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">{pub.doi}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 