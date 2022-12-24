import Head from "next/head"
import { useRouter } from "next/router"
import { Main } from "../components"

export default function Home() {
  const router = useRouter
  return (
    <>
      <Head>
        <title>N&Y</title>
      </Head>
      <Main />
    </>
  )
}
