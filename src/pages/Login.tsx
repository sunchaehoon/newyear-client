import Head from "next/head"
import { useRouter } from "next/router"
import { Login } from "../components"

export default function LoginPg() {
  return (
    <>
      <Head>
        <title>N&Y Login</title>
      </Head>
      <Login />
    </>
  )
}
