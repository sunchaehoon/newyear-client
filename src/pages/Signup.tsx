import Head from "next/head"
import { useRouter } from "next/router"
import { Signup } from "../components"

export default function SignupPg() {
  return (
    <>
      <Head>
        <title>N&Y Signup</title>
      </Head>
      <Signup />
    </>
  )
}