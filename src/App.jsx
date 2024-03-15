import './App.css'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'

function App() {
  
  return (
    <>
      <h1>This is just a test application for an activity</h1>
      <LoginSocialFacebook
        appId='7568321253207635' // Replace with your app ID
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => console.log(error)}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </>
  )
}

export default App
