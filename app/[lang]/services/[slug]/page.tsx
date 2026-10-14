import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {ServicePage} from '@/components/Site';
import {services,Lang} from '@/lib/content';
export function generateStaticParams(){return ['en','ar'].flatMap(lang=>services.map(s=>({lang,slug:s.slug})))}
export function generateMetadata({params}:{params:{lang:Lang;slug:string}}):Metadata{const s=services.find(x=>x.slug===params.slug);if(!s)return{};return {title:`${s[params.lang].title} | TMN Business Dubai`,description:s[params.lang].details,alternates:{canonical:`/${params.lang}/services/${params.slug}`,languages:{en:`/en/services/${params.slug}`,ar:`/ar/services/${params.slug}`}}}}
export default function Page({params}:{params:{lang:Lang;slug:string}}){const s=services.find(x=>x.slug===params.slug);if(!s||!['en','ar'].includes(params.lang))notFound();return <ServicePage lang={params.lang} service={s}/>}
