import * as S from '../../../styles/components/experience';
import { Title } from '../Title';

export function Experience(){
    return(
        <S.Container>
            <S.Wrapper>
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

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                        </p>
                    </S.Enterprise>
                    <S.Enterprise>
                        <div>
                            <p>C7 Business</p>
                            <p>Junho 22 à Dezembro 22 </p>
                            <h2>Desenvolvedor Front-end</h2>
                            <p>Portugal</p>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                            Sed rhoncus gravida ipsum sit amet iaculis.
                            Phasellus vel magna dapibus nisl porta maximus.
                        </p>
                    </S.Enterprise>
                </S.Experience>
            </div>
            </S.Wrapper>
        </S.Container>
    );
}