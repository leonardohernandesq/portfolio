import * as S from '../../../styles/components/skills';

import { Title } from '../Title';

import Image from 'next/image';

export function Skills() {
    return (
        <S.Container>
            <S.Wrapper>
                <Title>Skills</Title>
                <S.ContainerStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon HTML' src='/stacks/html.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon CSS' src='/stacks/css.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon JS' src='/stacks/js.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon TS' src='/stacks/typescript.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon Next' src='/stacks/next.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon NodeJS' src='/stacks/nodejs.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon React' src='/stacks/react.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon FireBase' src='/stacks/firebase.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon WordPress' src='/stacks/wordpress.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon MongoDB' src='/stacks/mongodb.png' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon Git' src='/stacks/git.svg' width={50} height={50} />
                    </S.DivStack>
                    <S.DivStack>
                        <div className='border'></div>
                        <Image alt='Icon PostgreSQL' src='/stacks/postgresql.png' width={50} height={50} />
                    </S.DivStack>
                </S.ContainerStack>
                <div className='effect-ball'>
                </div>
            </S.Wrapper>
        </S.Container>
    );
}