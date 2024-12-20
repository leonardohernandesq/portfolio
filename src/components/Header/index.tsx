import * as S from '../../../styles/components/header';
import {useState} from 'react'

import { FiAlignCenter, FiX } from 'react-icons/fi'
import Link from 'next/link';

export function Header(){
    const [visible, setVisible] = useState(false);

    function OpenModal(){
        setVisible(!visible)
    }

    return(
        <S.Container>
            <S.Header>
                <S.Logo>
                    <Link href="/">
                        <h2>Leonardo Hernandes</h2>
                    </Link>
                </S.Logo>

                <S.NavHeader>
                    <Link aria-label='Acesse a Homepage' href="/">Home</Link>
                    <Link aria-label='Acesse a área de Quem Sou' href="#about">Quem Sou</Link>
                    <Link aria-label='Acesse a área de Skills' href="#skills">Skills</Link>
                    <Link aria-label='Acesse a área de Experiências' href="#experience">Experiências</Link>
                    <Link aria-label='Acesse a área de Projetos' href="#project">Projetos</Link>
                    <Link aria-label='Acesse a área de Contato' href="#contato">Contato</Link>
                </S.NavHeader>

                <S.DropMobile>
                    <button aria-label='Abrir o menu' onClick={() => OpenModal()}>
                        {
                            visible ?
                                <FiX/>
                            :
                                <FiAlignCenter/>
                        }
                    </button>

                        {
                            visible ?
                            <>
                                <S.DropDown>
                                    
                                    <div className='menu'>
                                        <Link aria-label='Acesse a Homepage' href="/" onClick={() => OpenModal()}>Home</Link>
                                        <Link aria-label='Acesse a área de Quem Sou' href="#about" onClick={() => OpenModal()}>Quem Sou</Link>
                                        <Link aria-label='Acesse a área de Skills' href="#skills" onClick={() => OpenModal()}>Skills</Link>
                                        <Link aria-label='Acesse a área de Experiências' href="#experience" onClick={() => OpenModal()}>Experiências</Link>
                                        <Link aria-label='Acesse a área de Projetos' href="#project" onClick={() => OpenModal()}>Projetos</Link>
                                        <Link aria-label='Acesse a área de Contato' href="#contato" onClick={() => OpenModal()}>Contato</Link>
                                    </div>
                                </S.DropDown>
                            </> :
                            <></>
                        }
                </S.DropMobile>
            </S.Header>
        </S.Container>
    );
}

