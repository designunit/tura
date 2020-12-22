import { Header } from 'src/components/Header'
import { useState, useCallback } from 'react'
import { Menu } from '../Menu'

export const PageLayout: React.FC = props => {    
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const onClick = useCallback(() => setIsOpen(false),[])

    return (
        <main>
            <Header
                isOpen={isOpen}
                onClickMenu={onClickMenu}
                menu={(
                    <Menu 
                        onClick={onClick}
                    />
                )}
            />
            {props.children}
        </main>
    )
}
