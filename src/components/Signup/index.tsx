import { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as S from "./style";
import { useRouter } from "next/router";

const Signup = () => {
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [noName, setNoName] = useState<boolean>(false);
  const [noId, setNoId] = useState<boolean>(false);
  const [noPw, setNoPw] = useState<boolean>(false);
  const [noCheckpw, setNoCheckpw] = useState<boolean>(false);
  const router = useRouter();

  function ChangeNameInput(e: any) {
    setNameValue(e.target.value);
  }

  function ChangeIdInput(e: any) {
    setIdValue(e.target.value);
  }

  function ChangePwInput(e: any) {
    setPwValue(e.target.value);
  }

  function ChangeCheckPw(e: any) {
    setCheckPw(e.target.value);
  }

  function CreateSnow() {
    const el = document.createElement("div");
    el.classList.add("snow");
    el.style.marginLeft = Math.floor(Math.random() * window.innerWidth) + "px";
    document.body.appendChild(el);
  }

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      CreateSnow();
    }
    if (nameValue !== "") {
      setNoName(false);
    }
    if (idValue !== "") {
      setNoId(false);
    }
    if (pwValue !== "") {
      setNoPw(false);
    }
    if (checkPw !== "") {
      setNoCheckpw(false);
    }
  }, [nameValue, idValue, pwValue, checkPw]);

  function SubmitSignup() {
    if (nameValue === "") {
      setNoName(true);
    } else {
      setNoName(false);
    }
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
    if (checkPw === "") {
      setNoCheckpw(true);
    } else {
      setNoCheckpw(false);
    }
  }

  return (
    <>
      <S.Background>
        <S.SignupBackground>
            <S.BackArrow onClick={() => {router.back()}} />
          <S.SignupWrap>
            <S.SignupTxt>
              <S.Signup회원>회원</S.Signup회원>
              <S.Signup가입>가입</S.Signup가입>
            </S.SignupTxt>
            <S.InputDiv>
              <S.InputTxt>닉네임 (이름)</S.InputTxt>
              <S.Input onChange={ChangeNameInput} />
              <S.NoInput visibility={noName === true ? "visible" : "hidden"}>
                닉네임을 입력해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.InputDiv>
              <S.InputTxt>아이디</S.InputTxt>
              <S.Input onChange={ChangeIdInput} />
              <S.NoInput visibility={noId === true ? "visible" : "hidden"}>
                아이디를 입력해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.InputDiv>
              <S.InputTxt>비밀번호</S.InputTxt>
              <S.InputPw onChange={ChangePwInput} type="password" />
              <S.NoInput visibility={noPw === true ? "visible" : "hidden"}>
                비밀번호를 입력해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.InputDiv>
              <S.InputTxt>비밀번호 확인</S.InputTxt>
              <S.InputPw onChange={ChangeCheckPw} type="password" />
              <S.NoInput visibility={noCheckpw === true ? "visible" : "hidden"}>
                비밀번호를 재확인해주세요
              </S.NoInput>
            </S.InputDiv>
            <S.SignupCheck>
              <S.SignupBtn onClick={SubmitSignup}>가입하기</S.SignupBtn>
            </S.SignupCheck>
          </S.SignupWrap>
        </S.SignupBackground>
      </S.Background>
    </>
  );
};

export default Signup;
