import Head from "next/head"
import { useRouter } from "next/router"
import { Main } from "../components"

export default function Home() {
  return (
    <>
      <Head>
        <title>N&Y</title>
      </Head>
      <Main />
    </>
  )
}
