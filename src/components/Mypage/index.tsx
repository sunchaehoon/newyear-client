import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar2 from "../Navbar2";
import * as S from "./style";

const Mypage = () => {
  const router = useRouter();

  const refreshServerSide = () => {
    router.replace(router.asPath);
  };

  function CreateSnow() {
    const el = document.createElement("div");
    el.classList.add("snow");
    el.style.marginLeft = Math.floor(Math.random() * window.innerWidth) + "px";
    el.style.zIndex = "1";
    document.body.appendChild(el);
  }

  useEffect(() => {
    refreshServerSide();
    CreateSnow();
    console.log(router.asPath);
  }, []);
  return (
    <>
      <S.Background>
        <Navbar2 />
        <S.WhiteBackground>
          <S.BackgroundWrap>
            <S.MypageTitle>
              <S.Username>딱1기나스</S.Username>
              <S.MypageText>님의 마이페이지</S.MypageText>
            </S.MypageTitle>
            <S.ContentWrap>
              <S.LeftWrap>
                <S.FeedWrap>
                  <S.FeedText>딱1기나스 님의 신년 피드</S.FeedText>
                  <S.FeedContainer></S.FeedContainer>
                </S.FeedWrap>
                <S.AlermWrap>
                  <S.Alermtext>알림</S.Alermtext>
                  <S.AlertmContainer></S.AlertmContainer>
                </S.AlermWrap>
              </S.LeftWrap>
              <S.Luckwrap>
                <S.LuckText>딱1기나스 님의 신년 운세</S.LuckText>
                <S.LuckContainer></S.LuckContainer>
              </S.Luckwrap>
            </S.ContentWrap>
          </S.BackgroundWrap>
        </S.WhiteBackground>
      </S.Background>
    </>
  );
};

export default Mypage;
