import Link from 'next/link';
import * as S from '../../../styles/components/footer';

export function Footer(){
    const data = new Date();
    return(
        <S.Container>
            <S.Footer>
                <Link aria-label='Conheça o meu Linkedin' href="https://www.linkedin.com/in/leonardo-hernandes/" target='_blank'>
                    <p>Desenvolvido por Leonardo Hernandes | {data.getFullYear()} - ©</p>
                </Link>
            
            </S.Footer>
        </S.Container>
    );
}