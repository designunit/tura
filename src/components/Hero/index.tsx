import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'

export const Hero: React.FC = () => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src='/static/hero.jpg'
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                />
            )}
            contentStyle={{
                width: '100%',
            }}
        >
            <Title>
                <div className={`${s.whiteBg} ${s.titleLine}`}>
                    Набережная до ул. Молодцова<br/>
                </div>
                <div className={`${s.whiteBg} ${s.titleLine} ${s.titleTura}`}>
                    Верхняя тура
                </div>
            </Title>

            <span className={s.heroSubtitle}>
                <p className={`${s.description} ${s.whiteBg}`}>
                   — общественная кампания проекта развития территории набережной реки Конда. Горожане, эксперты, бизнес, администрация города и архитекторы объединились для того, чтобы создать новые общественный центр для досуга всех жителей Урая.
                </p>
            </span>

            <div className={s.heroButtons}>
                <Button
                    href={mapUrl}
                    size='big'
                >
                    Карта идей
                </Button>
                <div className={s.buttonsSpacer} />
                <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfoGigVnGxanZPdSK09A8xZ8APUgPeyePbG_nI9USyEg7hiUA/viewform'
                    size='big'
                    theme={'primary'}
                >
                    Пройти опрос
                </Button>
            </div>
        </SectionParalaxedBack>
    )
}