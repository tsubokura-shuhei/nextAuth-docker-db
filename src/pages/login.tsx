import { NextPage } from "next"
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
const {data:session} = useSession()

return(
  <>
  {
  // セッションがある場合、ログアウトを表示
    session && (
      <div>
        <h1>ようこそ, {session.user && session.user.email}</h1>
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    )
  }
  {
    // セッションがない場合、ログインを表示
    // ログインボタンを押すと、ログインページに遷移する
    !session && (
      <div>
        <p>ログインしていません</p>
        <button onClick={() => signIn()}>ログイン</button>
      </div>
    )
  }
  </>
)
}

export default Login;

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         ログイン中
//         ログイン名： {session.user} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       サインインしていません <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )

// }