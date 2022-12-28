import Head from "next/head"
import { useRouter } from "next/router"
import { Mypage } from "../components"

export default function LoginPg() {
  return (
    <>
      <Head>
        <title>N&Y Mypage</title>
      </Head>
      <Mypage />
    </>
  )
}