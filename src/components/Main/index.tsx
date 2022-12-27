import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./style";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const Main: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [clickMypg, setClickMypg] = useState<boolean>(false);
  const [clickSchedule, setClickSchedule] = useState<boolean>(false);
  const [clickFeed, setClickFeed] = useState<boolean>(false);
  const [clickLuck, setClickLuck] = useState<boolean>(false);
  const [showArrow, setShowArrow] = useState("none");
  const router = useRouter();
  const ro = router.pathname;

  function NavClick() {
    setShowNav((prev) => !prev);
  }

  function CreateSnow() {
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = Math.floor(Math.random() * window.innerWidth) + 'px';
    document.body.appendChild(el);
  }

  useEffect(() => {
    for(let i=0; i<50; i++) {
      CreateSnow();
    }
    if(clickMypg === true || clickSchedule === true || clickFeed === true || clickLuck === true) {
      setShowArrow("block");
    }
  }, [clickMypg, clickSchedule, clickFeed, clickLuck]);
  

  return (
    <>
      <S.Background>
        <S.NavLine onClick={NavClick} />
        <Navbar
          showNav={showNav}
          setClickMypg={setClickMypg}
          setClickSchedule={setClickSchedule}
          setClickFeed={setClickFeed}
          setClickLuck={setClickLuck}
        />
        <S.Capsule>
          <S.CapsuleTxt>
            {clickMypg === true
              ? "마이페이지"
              : clickSchedule === true
              ? "신년 계획 쓰러가기"
              : clickFeed === true
              ? "신년 피드"
              : clickLuck === true
              ? "신년 운세 보러가기"
              : ""}
          </S.CapsuleTxt>
          <S.Button display={showArrow}>
            <Link href={
                clickMypg === true
                ? "/Mypg"
                : clickSchedule === true
                ? "/Schedule"
                : clickFeed === true
                ? "/Feed"
                : clickLuck === true
                ? "/Luck"
                : ""
              }
            ><S.Arrow  /></Link>
          </S.Button>
        </S.Capsule>
      </S.Background>
    </>
  );
};

export default Main;
