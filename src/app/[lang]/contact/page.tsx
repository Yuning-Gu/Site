import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Contact | Yuning Gu',
  description: 'Get in touch with Yuning Gu for academic collaboration and research opportunities.',
};

const content = {
  en: {
    title: 'Contact',
    sections: {
      academic: {
        title: 'Academic Contact',
        items: [
          {
            label: 'Email',
            value: 'yuning.gu@buffalo.edu',
            link: 'mailto:yuning.gu@buffalo.edu'
          },
          {
            label: 'Office',
            value: 'Jacobs School of Medicine and Biomedical Sciences, University at Buffalo',
            link: null
          }
        ]
      },
      social: {
        title: 'Professional Networks',
        items: [
          {
            label: 'LinkedIn',
            value: 'Yuning Gu',
            link: 'https://www.linkedin.com/in/yuning-gu'
          },
          {
            label: 'ResearchGate',
            value: 'Yuning Gu',
            link: 'https://www.researchgate.net/profile/Yuning-Gu'
          },
          {
            label: 'ORCID',
            value: '0000-0000-0000-0000',
            link: 'https://orcid.org/0000-0000-0000-0000'
          }
        ]
      }
    },
    message: 'Feel free to reach out for academic collaboration, research opportunities, or any inquiries related to pharmaceutical sciences and traditional Chinese medicine research.'
  },
  zh: {
    title: '联系方式',
    sections: {
      academic: {
        title: '学术联系',
        items: [
          {
            label: '邮箱',
            value: 'yuning.gu@buffalo.edu',
            link: 'mailto:yuning.gu@buffalo.edu'
          },
          {
            label: '办公室',
            value: '布法罗大学雅各布医学与生物医学科学学院',
            link: null
          }
        ]
      },
      social: {
        title: '专业社交网络',
        items: [
          {
            label: '领英',
            value: '谷昱宁',
            link: 'https://www.linkedin.com/in/yuning-gu'
          },
          {
            label: 'ResearchGate',
            value: '谷昱宁',
            link: 'https://www.researchgate.net/profile/Yuning-Gu'
          },
          {
            label: 'ORCID',
            value: '0000-0000-0000-0000',
            link: 'https://orcid.org/0000-0000-0000-0000'
          }
        ]
      }
    },
    message: '欢迎就学术合作、研究机会或任何与药学和中医药研究相关的问题与我联系。'
  }
};

export default function ContactPage({ params }: { params: { lang: string } }) {
  const t = content[params.lang as keyof typeof content] || content.en;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{t.title}</h1>
      
      {/* Message */}
      <p className="text-lg text-gray-600">
        {t.message}
      </p>

      {/* Contact Sections */}
      {Object.entries(t.sections).map(([key, section]) => (
        <section key={key} className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="font-medium min-w-[100px]">{item.label}:</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-gray-600">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 