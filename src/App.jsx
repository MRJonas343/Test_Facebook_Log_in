import './App.css'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
function App() {
  

  return (
    <>
    <h1>Estas es solo una aplicacion de prueba para una actividad</h1>
      <LoginSocialFacebook
      appId='7568321253207635'
      onResolve={(response) =>{
        console.log(response)
      }}
      onReject={(error)=>console.log(error)}
      >
        <FacebookLoginButton/>
      </LoginSocialFacebook>
    </>
  )
}

export default App