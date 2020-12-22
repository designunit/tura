import React from 'react'
import { Section } from '../Section'
import { Step } from '../Step'
import { Steps } from '../Steps'
import { Title } from '../Title'

export const Roadmap: React.FC = () => {
    return (
        <Section>
            <Title level={2}>Как будет развиваться проект</Title>
            <Steps>
                <Step
                    title={'2019'}
                >
                    <ul>
                        <li>Выбор территории.</li>
                        <li>Проведение исследования территории и первых встреч с жителями.</li>
                    </ul>
                </Step>
                <Step
                    title={'Март 2020'}
                >
                    <ul>
                        <li>Разработка предварительной концепции проекта.</li>
                    </ul>
                </Step>
                <Step
                    title={'Апрель 2020'}
                >
                    <ul>
                        <li>
                            Уточнение предварительной концепции проекта.
                        </li>
                        <li>
                            Проведение интервью с горожанами и дополнительного опроса.
                        </li>
                        <li>
                            Запуск общественной кампании, общественного совета проекта.
                        </li>
                        <li>
                            Проведение онлайн встреч с жителями по обсуждению концепции.
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'Май 2020'}
                >
                    <ul>
                        <li>
                            Архитекторы дорабатывают проект с учетом полученной от жителей обратной связи.
                        </li>
                        <li>
                            Презентация итогового проекта жителям.
                        </li>
                        <li>
                            31 мая подача проекта на конкурс.
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'Июнь 2020'}
                >
                    <ul>
                        <li>
                            Оценка заявок федеральным жюри конкурса.
                        </li>
                        <li>
                            Очная защита проекта.
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'2021-2022'}
                >
                    <ul>
                        <li>
                            Реализация проекта.
                        </li>
                    </ul>
                </Step>
            </Steps>
        </Section>
    )
}

