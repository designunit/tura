import s from './styles.module.css'
import Image from 'next/image'
import React from 'react'
import { Article } from '../Article'
import { Button } from '../Button'
import { Section } from '../Section'
import { Title } from '../Title'

export const About: React.FC = () => (
    <Section>
        <Title level={2}>
            Концепция развития<br />
            территории набережной реки Конда
        </Title>
        <div className={s.container} >
            <div className={s.picture}>
                <Image
                    src='/static/kondariver.png'
                    width={1000}
                    height={750}
                />
            </div>
            <div className={s.text}>
                <Article>
                    <p>
                        В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ. Победители конкурса получают на реализацию от 50 до 100 миллионов. Урайцы участвовали в опросах и встречах, где обсуждали задачи и свое видение развития территории.
                    </p>
                    <p>
                        В 2020 году проектная студия <a href='https://unit4.io'>design unit 4</a> (г. Санкт-Петербург) разработала предварительную концепцию набережной, основываясь на пожеланиях горожан, по заказу Администрации города.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button
                            href={'/concept'}
                            size='big'
                            theme={'primary'}
                            style={{
                                width: '100%',
                            }}
                        >
                            Посмотреть концепцию
                        </Button>
                    </div>
                    <p>
                        Сейчас команда проекта уточняет концепцию, проводит интервью с жителями. А также запустила дополнительный опрос для того, чтобы получить обратную связь на предложенные идеи.
                    </p>
                    <p>
                        В мае мы запустим общественный совет проекта, который будет влиять на все решения о проекте, проведем онлайн встречи с жителями о проекте. Итоговой проект будет представлен горожанам и для жюри конкурса до 31 мая 2020.
                    </p>
                </Article>
            </div>
        </div>
    </Section>

)
