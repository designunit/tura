import Head from 'next/head'
import { NextPage } from 'next'
import { Slides } from 'src/components/Slides'
import { Meta, IMeta } from 'src/components/Meta'

interface PageProps {
    meta: IMeta
}

const Project: NextPage<PageProps> = props => {
    const images = [
        '/static/project/YRAI_1.png',
        '/static/project/YRAI_2.png',
        '/static/project/YRAI_3.png',
        '/static/project/YRAI_4.png',
        '/static/project/YRAI_5.png',
        '/static/project/YRAI_6.png',
        '/static/project/YRAI_7.png',
        '/static/project/YRAI_8.png',
    ]

    return (
        <>
            <Head>
                <title>КОНЦЕПЦИЯ</title>
                <Meta meta={props.meta} />
            </Head>

            <Slides
                images={images}
            />
        </>
    )
}

export const getStaticProps = async () => {
    const meta: IMeta = {
        title: '#БЕРЕГУРАЙ',
        description: 'Концепт набережной г. Урай',
        image: 'https://берегурай.рф/static/project/YRAI_1.png',
        imageWidth: 1191,
        imageHeight: 843,

        url: 'https://берегурай.рф/concept',
        siteName: 'Концепт набережной г. Урай',
        locale: 'ru_RU',
        type: 'website',
        domain: 'берегурай.рф',

        twitterCard: 'summary_large_image',
        twitterSite: '@',
        twitterCreator: '@tmshv',
    }

    return {
        props: {
            meta,
        }
    }
}

export default Project