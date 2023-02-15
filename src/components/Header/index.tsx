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
                    <Link href="#">
                        <h2>Leonardo Hernandes</h2>
                    </Link>
                </S.Logo>

                <S.NavHeader>
                    <Link href="#">Home</Link>
                    <Link href="#about">Quem Sou</Link>
                    <Link href="#">Skills</Link>
                    <Link href="#">Experiências</Link>
                    <Link href="#">Projetos</Link>
                    <Link href="#">Contato</Link>
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
                                        <Link href="#">Home</Link>
                                        <Link href="#about">Quem Sou</Link>
                                        <Link href="#">Skills</Link>
                                        <Link href="#">Experiências</Link>
                                        <Link href="#">Projetos</Link>
                                        <Link href="#">Contato</Link>
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

