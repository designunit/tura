import s from './styles.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export type LogoProps = {
    style?: React.CSSProperties
}

export const Logo: React.SFC<LogoProps> = props => {
    const router = useRouter()
    const main = router.asPath === '/'

    if (main) {
        return (

            <span className={s.logo} style={props.style}>
                Набережная В. Тура
            </span>
        )
    }

    return (
        <Link href={'/'}>
            <a className={s.logo} style={props.style}>
                Набережная В. Тура
            </a>
        </Link>
    )
}