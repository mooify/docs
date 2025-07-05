import {Layout, Navbar} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import {ReactNode} from "react";

export const metadata = {
    title: 'Mooify Docs'
}

interface Props {
    children?: ReactNode
}

export default async function RootLayout(props: Props) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>

        </Head>
        <body>
        <Layout
            navbar={<Navbar logo={<b>Mooify Docs</b>}/>}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/mooify/docs"
        >
            {props.children}
        </Layout>
        </body>
        </html>
    )
}