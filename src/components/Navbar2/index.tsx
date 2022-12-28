import { NextPage } from "next";
import * as S from "./style";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar2 = () => {
  const router = useRouter();
  const ro = router.pathname;

  return (
    <>
      <S.NavContainer>
        <S.NavWrapper>
          <S.NY />
          <S.Line />
          <S.LoginWrap>
            <S.UsernameText>딱1기나스</S.UsernameText>
            <S.LoginTxt>님의</S.LoginTxt>
          </S.LoginWrap>
          <S.MypageText>마이페이지입니다</S.MypageText>

          <S.Line />
          <S.Category>
            <S.Lists style={{ color: ro === "/" ? "#C5C5C5" : "white" }}>
              <Link href="/">메인페이지</Link>
            </S.Lists>
            <S.Lists
              style={{ color: ro === "/Mypage" ? "#C5C5C5" : "white" }}
              onClick={() => {}}
            >
              <Link href="/Mypage">마이페이지</Link>
            </S.Lists>
            <S.Lists
              style={{ color: ro === "/Schedule" ? "#C5C5C5" : "white" }}
              onClick={() => {}}
            >
              <Link href="/Schedule">신년 계획 작성</Link>
            </S.Lists>
            <S.Lists
              style={{ color: ro === "/Feed" ? "#C5C5C5" : "white" }}
              onClick={() => {}}
            >
              <Link href="/Feed">신년 피드</Link>
            </S.Lists>
            <S.Lists
              style={{ color: ro === "/Luck" ? "#C5C5C5" : "white" }}
              onClick={() => {}}
            >
              <Link href="/Luck">신년 운세 보러가기</Link>
            </S.Lists>
          </S.Category>
          <S.NavFooter>
            <S.NavLi>알림</S.NavLi>
            <S.NavLi>설정</S.NavLi>
            <S.NavLi>로그아웃</S.NavLi>
          </S.NavFooter>
        </S.NavWrapper>
      </S.NavContainer>
    </>
  );
};

export default Navbar2;
