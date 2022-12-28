import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./style";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [noId, setNoId] = useState(false);
  const [noPw, setNoPw] = useState<boolean>(false);
  const router = useRouter();
  const ro = router.pathname;
  const currentUrl = router.asPath;

  function CreateSnow() {
    const el = document.createElement("div");
    el.classList.add("snow");
    el.style.marginLeft = Math.floor(Math.random() * window.innerWidth) + "px";
    document.body.appendChild(el);
  }

  useEffect(() => {
    console.log(ro);
    console.log(currentUrl);
    for (let i = 0; i < 100; i++) {
      CreateSnow();
    }
    if (idValue !== "") {
      setNoId(false);
    }
    if (pwValue !== "") {
      setNoPw(false);
    }
  }, [idValue, pwValue]);

  function ChangeIdInput(e: any) {
    setIdValue(e.target.value);
  }

  function ChangePwInput(e: any) {
    setPwValue(e.target.value);
  }

  function SubmitLogin() {
    if (idValue === "") {
      setNoId(true);
    } else {
      setNoId(false);
    }
    if (pwValue === "") {
      setNoPw(true);
    } else {
      setNoPw(false);
    }
  }

  return (
    <>
      <S.Background>
        <S.LoginBackground>
          <S.BackArrow onClick={() => {router.back()}} />
          <S.LoginWrap>
            <S.LoginTxt>
              <S.LoginLO>LO</S.LoginLO>
              <S.LoginGIN>GIN</S.LoginGIN>
            </S.LoginTxt>
            <S.InputDiv>
              <S.InputIdTxt>아이디</S.InputIdTxt>
              <S.InputId onChange={ChangeIdInput} />
              <S.NoInput visibility={noId === true ? "visible" : "hidden"}>
                아이디를 입력해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.InputDiv>
              <S.InputPwTxt>비밀번호</S.InputPwTxt>
              <S.InputPw onChange={ChangePwInput} type="password" />
              <S.NoInput visibility={noPw === true ? "visible" : "hidden"}>
                비밀번호를 입력해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.LoginCheck>
              <S.LoginBtn onClick={SubmitLogin}>로그인</S.LoginBtn>
            </S.LoginCheck>
            <S.NoAccountWrap>
              <S.NoAccountTxt>계정이 없으신가요?</S.NoAccountTxt>
              <S.Register>
                <Link href="/Signup">회원가입</Link>
              </S.Register>
            </S.NoAccountWrap>
          </S.LoginWrap>
        </S.LoginBackground>
      </S.Background>
    </>
  );
};

export default Login;
