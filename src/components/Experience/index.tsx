import * as S from '../../../styles/components/experience';
import { Title } from '../Title';

export function Experience(){
    return(
        <S.Container>
            <S.Wrapper id='experience'>
            <Title> Experiências </Title>
            <div>
                <S.Experience>
                    <S.Enterprise>
                        <div>
                            <p>Phoenix Publicidade</p>
                            <p>Março 20 à Abril 22 </p>
                            <h2>Desenvolvedor Web</h2>
                            <p>Brasil</p>
                        </div>

                        <p className='descriptionExp'>
                            Responsável pela criação e o desenvolvimento de sites institucionais, lojas virtuais e landing pages,
                            administração e manutenção em servidores, concertar bugs que possam ocorrer ao
                            decorrer das atualizações de plugins e linguagens, desenvolvimento e planejamento de aplicativos em
                            React-Native.
                        </p>
                    </S.Enterprise>
                    <S.Enterprise>
                        <div>
                            <p>C7 Business</p>
                            <p>Junho 22 à Dezembro 22 </p>
                            <h2>Desenvolvedor Front-end</h2>
                            <p>Portugal</p>
                        </div>

                        <p className='descriptionExp'>
                            Desenvolvimento do front-end de sistemas internos da empresa e aplicativos para resolver problemas de funcionários e clientes.
                            Planejamento e desenvolvimento do Site Institucional das empresas!
                        </p>
                    </S.Enterprise>
                </S.Experience>
            </div>
            </S.Wrapper>
        </S.Container>
    );
}