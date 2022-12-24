import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./style";
import Navbar from "../Navbar";

const Main: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  function NavClick() {
    setShowNav((prev) => !prev);
  }

  useEffect(() => {
    console.log(showNav);
  }, [showNav]);

  return (
    <>
      <S.Background>
      <S.NavLine onClick={NavClick} />
        <Navbar showNav={showNav} />
      </S.Background>
    </>
  );
};

export default Main;
