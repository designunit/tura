import s from './styles.module.css'
import { Button } from "../Button"
import { useRef } from "react"

interface MenuProps {
    onClick: () => void
}

export const Menu: React.FC<MenuProps> = ({ onClick }) => {

    const underline = useRef(null)

    const buttons = [
        {
            href: '/#about',
            text: 'О проекте' 
        },
        {
            href: '/#map',
            text: 'Карта идей' 
        },
        // {
        //     href: '/#stories',
        //     text: 'Жители о набережной' 
        // },
        {
            href: '/#faq',
            text: 'Вопрос/Ответ' 
        },
        // {
        //     href: '/concept',
        //     text: 'Концепция' 
        // },
    ]

    return (
        <>
            {buttons.map((x, i) => (
                <div key={i} style={{
                    fontFamily: 'Bebas Neue',
                }}>
                    <Button
                        href={x.href}
                        theme={'link'}
                        underlineRef={underline}
                        onClick={onClick}
                        className='mobileMenuButton'
                        style={{
                            fontSize: '22px'
                        }}
                    >
                        {x.text}
                    </Button>
                </div>
            ))}
            <div
                ref={underline}
                className={s.underline}
                style={{
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    backgroundColor: '#111b47',
                    transition: 'all .5s',
                }}
            />
        </>
    )
}