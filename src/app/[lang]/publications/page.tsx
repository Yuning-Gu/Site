import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Publications | Yuning Gu',
  description: 'Academic publications and research work by Yuning Gu',
};

const content = {
  en: {
    title: "Publications",
    journalTitle: "Journal Articles",
    conferenceTitle: "Conference Proceedings",
    journalArticles: [
      {
        authors: "Yuning Gu* (First & Corresponding Author), Fengliang Zhong, Tiantian Sun, Zirui Chang.",
        title: "Active ingredients and mechanisms of peony seed blended oil in diabetes treatment using Kunming mice: Insights from GC–MS, network pharmacology, and experimental verification.",
        journal: "Journal of Functional Foods",
        year: 2025,
        volumeIssuePages: "125: 106652",
        doi: "10.1016/j.jff.2024.106652",
        status: "Published",
        abstract: "This study identified the hypoglycemic effects of a peony seed–based oil blend through GC–MS analysis, in vitro assays, network pharmacology, molecular docking, and in vivo validation. α-Linolenic acid and linoleic acid were identified as key active compounds targeting PPARG and MAPK3 via PPAR and IL-17 signaling pathways."
      },
      {
        authors: "Tiantian Sun, Zirui Chang, Fengliang Zhong, Zishu Li, Yu Fu, Yuning Gu (Corresponding Author).",
        title: "Study on the in vitro inhibitory activity of peony seed blended oil on α-amylase and α-glucosidase.",
        journal: "Journal of Clinical Medicine Research",
        year: 2024,
        volumeIssuePages: "5(2): 151–158",
        doi: "10.32629/jcmr.v5i2.2288",
        status: "Published",
        abstract: "This article evaluated the enzyme inhibition potential of peony seed blended oil against α-amylase and α-glucosidase in vitro. Results showed significant inhibitory activity, supporting the oil\'s potential as a natural supplement for managing postprandial blood glucose."
      }
    ],
    conferencePapers: [
      {
        authors: "Yuning Gu* (Co-First Author), Tanghe Wang.",
        title: "Retrosynthetic design of Wulfenioidins L with potential anti-Zika virus activity.",
        conference: "BIO Web of Conferences",
        year: 2024,
        volumeIssuePages: "111: 02004",
        doi: "10.1051/bioconf/202411102004",
        status: "Conference Paper",
        abstract: "This paper proposes a retrosynthetic strategy for Wulfenioidins L, a natural compound with predicted anti-Zika activity. Network pharmacology and host-target predictions suggested possible mechanisms of antiviral action via modulation of host pathways."
      }
    ]
  },
  zh: {
    title: "发表论文",
    journalTitle: "期刊论文",
    conferenceTitle: "会议论文",
    journalArticles: [
      {
        authors: "谷昱宁*（第一作者，通讯作者）, 钟风亮, 孙甜甜, 常梓睿.",
        title: "牡丹籽调和油治疗糖尿病的活性成分及作用机制研究.",
        journal: "Journal of Functional Foods",
        year: 2025,
        volumeIssuePages: "125: 106652",
        doi: "10.1016/j.jff.2024.106652",
        status: "已发表",
        abstract: "本研究通过GC–MS分析、网络药理、分子对接与体内外实验证实牡丹籽调和油具有显著降糖作用。结果显示α-亚麻酸和亚油酸为关键活性成分，主要通过作用于PPARG和MAPK3等靶点，调控PPAR与IL-17信号通路发挥降糖效果。"
      },
      {
        authors: "孙甜甜, 常梓睿, 钟风亮, 李梓澍, 傅瑜, 谷昱宁（通讯作者）.",
        title: "牡丹籽调和油对α-淀粉酶和α-葡萄糖苷酶的体外抑制活性研究.",
        journal: "Journal of Clinical Medicine Research",
        year: 2024,
        volumeIssuePages: "5(2): 151–158",
        doi: "10.32629/jcmr.v5i2.2288",
        status: "已发表",
        abstract: "文章系统研究了牡丹籽复方油对两种关键糖代谢酶的体外抑制活性。结果表明该油对α-淀粉酶与α-葡萄糖苷酶具有显著抑制作用，提示其作为天然降糖膳食补充剂的潜力。"
      }
    ],
    conferencePapers: [
       {
        authors: "谷昱宁*（共同第一作者）, 王棠禾.",
        title: "具有潜在抗寨卡病毒活性的 Wulfenioidins L 的逆合成研究.",
        conference: "BIO Web of Conferences",
        year: 2024,
        volumeIssuePages: "111: 02004",
        doi: "10.1051/bioconf/202411102004",
        status: "会议论文",
        abstract: "本文基于天然产物Wulfenioidins L的分子结构与抗病毒文献数据，设计其逆合成路径，并通过网络药理与靶点预测分析其对寨卡病毒的潜在抑制机制，提出其在宿主靶点干预中的应用前景。"
      }
    ]
  }
};

export default function PublicationsPage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang as keyof typeof content] || content.en;

  // Helper function to render a publication item
  const renderPublication = (item: any, type: 'journal' | 'conference') => (
    <div key={item.doi || item.title} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-2 shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-base">
        {item.authors}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-base text-gray-500 dark:text-gray-400">
        {type === 'journal' ? (
          <> 
            <span>{item.journal},</span>
            <span>{item.year},</span>
            <span>{item.volumeIssuePages}</span>
          </>
        ) : (
          <> 
            <span>{item.conference},</span>
            <span>{item.year},</span>
            <span>{item.volumeIssuePages}</span>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-4 items-center text-base">
        {item.doi && (
          <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
            DOI: {item.doi}
          </a>
        )}
        {item.status && (
          <span className={`px-2.5 py-1 rounded-full text-sm font-medium ${item.status === 'Published' || item.status === '已发表' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}`}>
            {item.status}
          </span>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300 pt-2 text-base italic">
        {item.abstract}
      </p>
    </div>
  );

  return (
    <div> {/* Keep the outer div for structure */} 
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>
      
      {/* Journal Articles Section */}
      {t.journalArticles && t.journalArticles.length > 0 && (
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {t.journalTitle}
          </h2>
          <div className="space-y-6">
            {t.journalArticles.map(paper => renderPublication(paper, 'journal'))}
          </div>
        </section>
      )}

      {/* Conference Papers Section */}
      {t.conferencePapers && t.conferencePapers.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {t.conferenceTitle}
          </h2>
          <div className="space-y-6">
            {t.conferencePapers.map(paper => renderPublication(paper, 'conference'))}
          </div>
        </section>
      )}
    </div>
  );
} 