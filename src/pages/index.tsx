import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Section } from 'src/components/Section'
import { Meta, IMeta } from 'src/components/Meta'
import { About } from 'src/components/About'
import { Story } from 'src/components/Story'
import { Article } from 'src/components/Article'
import { Title } from 'src/components/Title'
import { Footer } from 'src/components/Footer'
import { Button } from 'src/components/Button'
import { PageLayout } from 'src/components/PageLayout'
import { Caption } from 'src/components/Caption'
import { Map } from 'src/components/Map'
import { Votes } from 'src/components/Votes'
import React from 'react'
import { Roadmap } from 'src/components/Roadmap'
import { OpinionForm } from 'src/components/OpinionForm'

interface PageProps {
    meta: IMeta
}

const Index: NextPage<PageProps> = props => (
    <PageLayout>
        <ParallaxProvider>
            <Head>
                <title>#БЕРЕГУРАЙ</title>
                <Meta meta={props.meta} />
            </Head>

            {true ? null : <OpinionForm />}

            <Hero />

            <span id='votes' />
            <Votes />

            <span id='about' />
            <About />

            <span id='roadmap' />
            <Roadmap />

            <span id='map' />
            <Map />

            {/* ЖИТЕЛИ О НАБЕРЕЖНОЙ */}
            <span id='stories' />
            {true ? null : (
                <Section backgroundColor={'rgba(204, 215, 255, 0.5)'}>
                    <Title level={2}>Жители о набережной</Title>

                    <Story
                        condition='left'
                        picturePath='/static/annaizumova.png'
                    >
                        <Article>
                            <Title level={3}>Анна Изюмова</Title>
                            <Caption>
                                центр молодежи и дополнительного образования
                    </Caption>

                            <p>
                                Молодежному центру на набережной интересна фестивальная деятельность. Абсолютно разные фестивали: и декоративно-прикладные, и музыкальные, и хобби различные.
                    </p>
                            <p>
                                Для меня важнее всего чтобы она оставалась рентабельной, чтобы там не было чего-то нагроможденного. Что-то мобильное, максимально полезное. Оставить площадку для волейбола, в другом месте ее организовать нельзя. Сцена нужна. Для массовых мероприятий на набережной большое пространство, там и дискотеки молодежные, они хоть в городе мешать не будут.
                    </p>
                            <p>
                                Чтобы не повторять особенности наших городских площадей, надо, чтобы на этой территории были скверы, лавочки. Ещё нужно что-то такое, чтобы можно было детям и взрослым где-то быть. А вот ту, пустую территорию, использовать с минимальными затратами. Мне кажется, это самое лучшее применение: небольшие точечные культурные облагораживания и всё! Лишнего ничего не нужно туда. Мне кажется, что нельзя против природы идти, наоборот нужно использовать то что имеется максимально.

                    </p>
                        </Article>
                    </Story>
                    <Story
                        condition='left'
                    >
                        <Article>
                            <Title level={3}>
                                Попова Лариса Анатольевна
                    </Title>
                            <Caption>
                                заместитель директора по УВР школы №6
                    </Caption>

                            <p>
                                Физкультура может проходить на набережной, ИЗО и окружающий мир может быть, если будут какие-то аллеи и зоны.
                    </p>
                            <p>
                                Вот, например, у нас по школьной программе идут сезонные экскурсии: осенне- весенние изменения в природе, зимние изменения в природе, и зачастую мы просто гуляем по территории школы. Один год погуляли — на следующий год уже не интересно. А поскольку территория набережной больше, то и интереса там погулять и понаблюдать будет больше. У нас очень красивая река, очень красивый лес.
                    </p>
                        </Article>
                    </Story>
                    <Story
                        condition='left'
                        picturePath='/static/antonarguchinsky.png'
                    >
                        <Article>
                            <Title level={3}>
                                Антон Аргучинский
                    </Title>
                            <Caption>
                                предприниматель, активный житель
                    </Caption>

                            <p>
                                Да не нужно какой-то прям инфраструктуры, банальное подключение к электричеству. У меня много друзей играющих на электроинструментах. Мы собираемся, они начинают исполнять известные композиции и петь. И молодёжи это заходит. Да и на сцене можно и стендап проводить, и поиграть с детьми, да даже музыку просто включить. У нас сейчас набирает обороты брейк данс, проводили бы театр на свежем воздухе. Но всё же проблема с электричеством, а возить генераторы не каждый себе может позволить. Главное электричество, а дальше уже и пойдет, идеи будут, и это будет пользоваться спросом.
                    </p>
                        </Article>
                    </Story>
                    <Story
                        condition='left'
                    >
                        <Article>
                            <Title level={3}>
                                Парфентьева Алла Александровна
                    </Title>
                            <Caption>
                                директор управления градостроительства, землепользования и природопользования города Урай
                    </Caption>

                            <p>
                                Раньше в Колосье купались каждый вечер летом, пока жили на берегу. Прогулки с детьми, купание. Катание с горки на санках, катание на лыжах от 2 микрорайона до 3. Рыбу ловили постоянно и зимой и летом. Грибы собирали постоянно на другом берегу. С собаками постоянно гуляли и гуляем  — целое братство там. Просто закат посмотреть или радугу над Кондой!
                    </p>
                            <p>
                                Набережная объединяет два микрорайона, удобна для прогулок, транзита, вроде рядом с жилыми районами, и в то же время оказываешься на природе. Река успокаивает и притягивает.
                    </p>
                            <p>
                                Это место для разных сообществ. Места всем хватит: и бабушкам, и спортсменам, и собачникам. Должны быть спокойные уютные местечки и места сбора, где можно пошуметь, потанцевать, покричать.
                    </p>
                        </Article>
                    </Story>
                    <Button
                        size='big'
                        href='https://docs.google.com/forms/d/e/1FAIpQLSfoGigVnGxanZPdSK09A8xZ8APUgPeyePbG_nI9USyEg7hiUA/viewform'
                    >
                        Поделись мнением
            </Button>
                </Section>
            )}

            {/* ФАК */}
            <span id='faq' />
            <Section backgroundColor={'#fff'}>
                <Title level={2}>Вопрос / ответ</Title>
                <Story
                    condition='faq'
                >
                    <Article>
                        <Title level={3}>
                            В&nbsp;Верхней Туре есть множество других проблем городской среды, почему делают набережную?
                        </Title>
                        <p>Цель грантового конкурса — создание привлекательных городских пространств, способствующих повышению качества жизни, привлечению в город посетителей, развитию индустрии услуг. Финансирование выделяется только на развитие общественных пространств. Соответственно средства федерального конкурса невозможно пустить на решение других средовых проблем города, для этого существуют другие федеральные и региональные программы выделения средств.</p>
                    </Article>
                </Story>
                <Story
                    condition='faq'
                >
                    <Article>
                        <Title level={3}>
                            Когда будет построена набережная?
                        </Title>
                        <p>В 2022-2023 годах набережная будет реализована.</p>
                    </Article>
                </Story>
                <Story
                    condition='faq'
                >
                    <Article>
                        <Title level={3}>
                            Кто разрабатывает проект набережной?
                        </Title>
                        <p>Проектная студия <a href="https://unit4.io">design unit 4</a> (г. Санкт-Петербург). Проекты студии можно посмотреть на сайте <a href="https://unit4.io">unit4.io</a>. Команда студии участвовала в разработке проектов-победителей конкурса лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ.</p>
                    </Article>
                </Story>
                <Story
                    condition='faq'
                >
                    <Article>
                        <Title level={3}>
                            Как рассказать о моих идеях для будущей набережной?
                        </Title>
                        <p>Шаг 1. Пройти опрос и написать проблемы/ценности/предложения на карте. Шаг 2. Следить за новостями сайта и принять участие в открытых онлайн-встречах по проекту Шаг 3. По желанию вступить в общественный совет проекта.</p>
                    </Article>
                </Story>

                <Story
                    condition='faq'
                >
                    <Article>
                        <Title level={3}>
                            Опрос прошел, как еще могу помочь?
                        </Title>
                        <p>Расскажите о проекте вашим знакомым и соседям, поделитесь ссылкой на сайт и опрос.</p>
                    </Article>
                </Story>
            </Section>

            <Footer />

        </ParallaxProvider>
    </PageLayout>
)

export const getStaticProps = async () => {
    const meta: IMeta = {
        title: 'ТУРА МОЯ ТУРА',
        description: 'Если ты это читаешь то надо запилить мета теги',
        image: 'https://tura.manhir.vercel.app/static/hero.jpg',
        imageWidth: 2500,
        imageHeight: 1635,

        url: 'https://берегурай.рф/',
        siteName: 'Набережная г.Урай',
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

export default Index