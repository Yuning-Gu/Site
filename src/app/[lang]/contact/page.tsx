import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Contact | Yuning Gu',
  description: 'Get in touch with Yuning Gu for academic collaboration and research opportunities.',
};

const content: Record<Locale, any> = {
  en: {
    title: 'Contact',
    intro: 'If you are interested in my research or have any questions related to pharmacology, traditional Chinese medicine modernization, or drug delivery systems, I would be sincerely grateful for the opportunity to connect, learn, and collaborate.',
    academicTitle: 'Academic Contact',
    emailLabel: 'Email',
    emails: [
      { address: 'yuning.gu@buffalo.edu', type: 'academic' },
      { address: 'yuning.gu@outlook.com', type: 'personal' }
    ],
    phoneLabel: 'Phone',
    phones: [
      { number: '+86 139 8714 3998', location: 'China' },
      { number: '+1 (716) 536-5736', location: 'USA' }
    ],
    affiliationLabel: 'Affiliation',
    affiliation: 'University at Buffalo, The State University of New York',
    schoolLabel: 'School',
    school: 'Jacobs School of Medicine and Biomedical Sciences',
    departmentLabel: 'Department',
    department: 'Department of Pharmacology and Toxicology',
    profilesTitle: 'Academic Profiles',
    profilesIntro: '(Feel free to learn more about my work)',
    profiles: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/yuninggu2002' },
      { platform: 'ResearchGate', url: 'https://www.researchgate.net/profile/Yuning-Gu' },
      { platform: 'ORCID', id: '0009-0003-2561-8122' }
    ]
  },
  zh: {
    title: '联系方式',
    intro: '如果您对我的研究方向感兴趣，或在药学、中药现代化、药物递送系统等领域有任何学术交流、项目合作、求学指导相关的问题，欢迎随时与我联系。我非常期待向您请教、学习与合作。',
    academicTitle: '学术联系',
    emailLabel: '电子邮箱',
    emails: [
      { address: 'yuning.gu@buffalo.edu', type: '学校邮箱' },
      { address: 'yuning.gu@outlook.com', type: '个人邮箱' }
    ],
    phoneLabel: '联系电话',
    phones: [
      { number: '+86 139 8714 3998', location: '中国' },
      { number: '+1 (716) 536-5736', location: '美国' }
    ],
    affiliationLabel: '所在单位',
    affiliation: '美国纽约州立大学布法罗分校（University at Buffalo）',
    schoolLabel: '学院',
    school: '雅各布医学院与生物医学科学学院（Jacobs School of Medicine and Biomedical Sciences）',
    departmentLabel: '系别',
    department: '药理与毒理学系（Department of Pharmacology and Toxicology）',
    profilesTitle: '学术社交平台',
    profilesIntro: '（欢迎进一步了解我的研究工作）',
    profiles: [
      { platform: '领英 LinkedIn', url: 'https://www.linkedin.com/in/yuninggu2002' },
      { platform: 'ResearchGate', url: 'https://www.researchgate.net/profile/Yuning-Gu' },
      { platform: 'ORCID', id: '0009-0003-2561-8122' }
    ]
  }
};

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const t = content[params.lang];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">
        {t.title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-sm">
        {t.intro}
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {t.academicTitle}
        </h2>
        <div className="space-y-2.5 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{t.emailLabel}:</span>
            <div className="flex flex-col space-y-1">
              {t.emails.map((email: { address: string, type: string }) => (
                <a key={email.address} href={`mailto:${email.address}`} className="text-blue-600 hover:underline dark:text-blue-400">
                  {email.address} ({email.type})
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{t.phoneLabel}:</span>
            <div className="flex flex-col space-y-1">
              {t.phones.map((phone: { number: string, location: string }) => (
                <span key={phone.number} className="text-gray-700 dark:text-gray-300">
                  {phone.number} ({phone.location})
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start">
            <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{t.affiliationLabel}:</span>
            <span className="text-gray-700 dark:text-gray-300">{t.affiliation}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start">
            <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{t.schoolLabel}:</span>
            <span className="text-gray-700 dark:text-gray-300">{t.school}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start">
            <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{t.departmentLabel}:</span>
            <span className="text-gray-700 dark:text-gray-300">{t.department}</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {t.profilesTitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
          {t.profilesIntro}
        </p>
        <div className="space-y-2.5 text-sm">
          {t.profiles.map((profile: { platform: string, url?: string, id?: string }) => (
            <div key={profile.platform} className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-medium text-gray-900 dark:text-white min-w-[100px] sm:text-right mr-3 mb-1 sm:mb-0">{profile.platform}:</span>
              {profile.url ? (
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 break-all">
                  {profile.url}
                </a>
              ) : profile.id ? (
                <a href={`https://orcid.org/${profile.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 break-all">
                  {`https://orcid.org/${profile.id}`}
                </a>
              ): null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 