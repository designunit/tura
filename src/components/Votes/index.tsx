import React from 'react'
import { Article } from '../Article'
import { Chatbar } from '../Chatbar'
import { Section } from '../Section'
import { Title } from '../Title'
import s from './index.module.css'

export const Votes: React.FC = () => {
    return (
        <Section>
            <div className={s.container}>
                <div className={s.text}>
                    <Title level={2} style={{textAlign: 'left'}}>
                        Итоги голосования
                    </Title>
                    <Article>
                        <p>
                            В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ. Победители конкурса получают на реализацию от 50 до 100 миллионов. Урайцы участвовали в опросах и встречах, где обсуждали задачи и свое видение развития территории.
                        </p>
                    </Article>
                </div>
                <div className={s.chatbar}>
                    <Chatbar />
                </div>
            </div>
        </Section>
    )
}