import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com'),title:{default:'TMN Business | Business Setup, PRO & Visa Services in Dubai',template:'%s | TMN Business Dubai'},description:'TMN Business in Al Qusais, Dubai: company formation, trade licence renewal, PRO, visas, MOHRE, Ejari, tenancy contracts and document clearing services.',robots:{index:true,follow:true},openGraph:{type:'website',siteName:'TMN Business',locale:'en_AE'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
