import { NextPage } from "next";
import * as S from "./style";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = ({ showNav }: any) => {
    const router = useRouter();
    const ro = router.pathname;

    return (
        <>
            <S.NavContainer right={showNav === true ? "0" : "-21%"}>
            <S.NavWrapper>
              <S.NY />
              <S.Line />
              <S.LoginWrap>
                <Link href="/Login">
                  <S.LoginText>로그인</S.LoginText>
                </Link>
                <S.LoginTxt>해주세요</S.LoginTxt>
              </S.LoginWrap>
              <S.AccountWrap>
                <S.AccountText>계정이 없으신가요?</S.AccountText>
                <Link href="Signup">
                  <S.Signup>회원가입</S.Signup>
                </Link>
              </S.AccountWrap>

              <S.Line />
              <S.Category>
                <S.Lists style={{color: ro === "/" ? "yellow" : "white"}}>메인페이지</S.Lists>
                <S.Lists>마이페이지</S.Lists>
                <S.Lists>신년 계획 작성</S.Lists>
                <S.Lists>신년 피드</S.Lists>
                <S.Lists>외국의 신년 문화</S.Lists>
                <S.Lists>신년 운세 보러가기</S.Lists>
              </S.Category>
              <S.NavFooter>
                <S.NavLi>로그인</S.NavLi>
              </S.NavFooter>
            </S.NavWrapper>
          </S.NavContainer>
        </>
    );
};

export default Navbar;