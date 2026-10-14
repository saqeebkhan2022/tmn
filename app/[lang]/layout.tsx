import {notFound} from 'next/navigation';
export function generateStaticParams(){return [{lang:'en'},{lang:'ar'}]}
export default function LanguageLayout({children,params}:{children:React.ReactNode;params:{lang:string}}){if(!['en','ar'].includes(params.lang))notFound();return <div lang={params.lang} dir={params.lang==='ar'?'rtl':'ltr'}>{children}</div>}
