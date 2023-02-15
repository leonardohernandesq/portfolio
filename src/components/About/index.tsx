import * as S from '../../../styles/components/about'

import Image from 'next/image';
import { Title } from '../Title';


export function About(){
    return(
        <S.Container>
            <S.Wrapper id='about'>
                <Title>Quem Sou</Title>
                <S.AboutSection>
                    <div>
                        <p>Meu nome é Leonardo Hernandes sempre fui apaixonado por tecnologia e artes marciais desde cedo. Passava horas estudando novas habilidades e tendências na área de desenvolvimento.</p>
                        <p>Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> na Faculdade Impacta de Tecnologia, hoje busco me especializar em desenvolvimento <strong>front-end</strong>, pois acredito que essa área permite unir minhas paixões por <strong>tecnologia e criatividade</strong>.</p>
                        <p>Após se formar, iniciei minha carreira como desenvolvedor front-end em uma empresa de publicidade e propaganda, onde rapidamente me destaquei por meu esforço e paixão pelo trabalho. Me dedicava constantemente para <strong>oferecer soluções inovadoras e criativas aos clientes</strong>, sempre buscando aprimorar as habilidades na área de tecnologia.</p>
                        <p>Hoje possuo aproximadamente 2 anos de experiência com o desenvolvimento front-end, entre empresas no Brasil e também em Portugal.</p>
                    </div>
                    <div>
                        <Image src="/leonardo-author.jpg" alt="Imagem relacionada a uma foto de perfil do autor do site" width={540} height={340}/>
                        <div className='border-image'></div>
                    </div>
                </S.AboutSection>
            </S.Wrapper>
        </S.Container>
    );
} 