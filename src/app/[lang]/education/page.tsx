import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Education | Yuning Gu',
  description: 'Educational background and academic achievements of Yuning Gu.',
};

const content = {
  en: {
    title: 'Education',
    education: [
      {
        degree: "M.S. in Pharmacology (Incoming)",
        school: "Jacobs School of Medicine and Biomedical Sciences, University at Buffalo",
        period: "Expected 2025 – 2027",
        details: [
          "Enrolled in a rigorous interdisciplinary program focused on pharmacological sciences, drug development, and translational biomedical research",
          "Core courses include:",
          "  PHC 505: Fundamentals of Pharmacology",
          "  PHC 506: Molecular Neuropsychopharmacology",
          "  PHC 507: Cellular and Molecular Pharmacology",
          "  PHC 508: Biochemical Techniques",
          "  PHC 509: Experimental Design in Biomedical Research",
          "Research interests include drug-receptor interactions, pharmacokinetics, and systems pharmacology",
          "Strong emphasis on laboratory-based skills and experimental design, with exposure to computational and molecular approaches"
        ]
      },
      {
        degree: "B.S. in Pharmaceutic Preparations",
        school: "Heilongjiang University of Chinese Medicine",
        period: "2021 – 2025",
        details: [
          "Focused on the formulation of traditional Chinese medicines and modern pharmaceutic technologies",
          "Conducted research involving GC-MS analysis, enzyme inhibition assays, and in vivo pharmacological validation for diabetes-related studies",
          "Representative coursework:",
          "  Pharmacology (91/100)",
          "  Polymer Science in Pharmaceutics (93/100)",
          "  Laboratory Animal Science (89/100)",
          "  Introduction to Modern Drug Delivery Systems (86/100)",
          "GPA: 3.0 / 4.0"
        ]
      },
      {
        degree: "Supplementary Training in Programming and AI",
        school: "University of Helsinki (Online)",
        period: "Jan – Aug 2024",
        details: [
          "Completed 29 ECTS in Python, Haskell, and AI fundamentals",
          "GPA: 4.54 / 5.0"
        ]
      },
      {
        degree: "Supplementary Training in C# Programming",
        school: "XMAK Pulse Open (Online)",
        period: "Jan – Apr 2024",
        details: [
          "Completed 5 ECTS in C# programming for software development",
          "GPA: 5.0 / 5.0"
        ]
      }
    ]
  },
  zh: {
    title: '教育经历',
    education: [
      {
        degree: "药理学硕士（在读）",
        school: "布法罗大学 雅各布医学院与生物医学科学学院",
        period: "2025年 – 2027年（预计）",
        details: [
          "就读于一项聚焦药理科学、药物研发与转化医学研究的多学科交叉硕士项目",
          "核心课程包括：",
          "  PHC 505：药理学基础",
          "  PHC 506：分子神经精神药理学",
          "  PHC 507：细胞与分子药理学",
          "  PHC 508：生物化学技术",
          "  PHC 509：生物医学研究中的实验设计",
          "研究兴趣涵盖药物与受体作用机制、药代动力学及系统药理学",
          "项目强调实验设计与现代药理研究的结合，涵盖分子实验与计算方法"
        ]
      },
      {
        degree: "药物制剂学学士",
        school: "黑龙江中医药大学",
        period: "2021年 – 2025年",
        details: [
          "专业方向为中药制剂与现代药物递送系统",
          "曾参与多个课题研究，包括GC–MS 成分分析、酶抑制实验及糖尿病动物模型药效验证",
          "代表性课程成绩：",
          "  药理学（91分）",
          "  药剂高分子化学（93分）",
          "  实验动物学（89分）",
          "  现代药物递送系统导论（86分）",
          "GPA：3.0 / 4.0"
        ]
      },
      {
        degree: "编程与人工智能在线进修",
        school: "赫尔辛基大学（线上课程）",
        period: "2024年1月 – 8月",
        details: [
          "完成29个欧洲学分（ECTS），学习内容包括Python、Haskell及人工智能基础",
          "GPA：4.54 / 5.0"
        ]
      },
      {
        degree: "C# 编程在线进修",
        school: "XMAK Pulse Open（线上课程）",
        period: "2024年1月 – 4月",
        details: [
          "完成5个ECTS，课程内容为C#编程与软件开发",
          "GPA：5.0 / 5.0"
        ]
      }
    ]
  }
};

export default function EducationPage({ params }: { params: { lang: Locale } }) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const t = content[params.lang];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">{t.title}</h1>
      
      <div className="space-y-6">
        {t.education.map((edu, index) => (
          <div key={index} className="bg-white/80 dark:bg-gray-800/80 p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h2>
            <p className="text-base text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.school}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 