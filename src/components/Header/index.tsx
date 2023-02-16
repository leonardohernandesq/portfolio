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
                    <Link href="/">Home</Link>
                    <Link href="#about">Quem Sou</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#experience">Experiências</Link>
                    <Link href="#project">Projetos</Link>
                    <Link href="#contato">Contato</Link>
                </S.NavHeader>

                <S.DropMobile>
                    <button onClick={() => OpenModal()}>
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
                                        <Link href="/" onClick={() => OpenModal()}>Home</Link>
                                        <Link href="#about" onClick={() => OpenModal()}>Quem Sou</Link>
                                        <Link href="#skills" onClick={() => OpenModal()}>Skills</Link>
                                        <Link href="#experience" onClick={() => OpenModal()}>Experiências</Link>
                                        <Link href="#project" onClick={() => OpenModal()}>Projetos</Link>
                                        <Link href="#contato" onClick={() => OpenModal()}>Contato</Link>
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

