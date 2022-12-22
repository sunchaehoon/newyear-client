import { NextPage } from "next";
import * as S from "./style"

const Main: NextPage = () => {
    return (
        <>
            <S.Wrapper>
                <S.Background>
                    <S.NavLine />
                </S.Background>
            </S.Wrapper>
        </>
    );
}

export default Main;