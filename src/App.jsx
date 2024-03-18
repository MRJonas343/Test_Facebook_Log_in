import './App.css'
import { LoginSocialFacebook, LoginSocialTwitter } from 'reactjs-social-login'
import { FacebookLoginButton,TwitterLoginButton } from 'react-social-login-buttons'

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
      
      <LoginSocialTwitter
      consumerKey={"al9HcVl6M1NKWEhwY1BRN19xdkM6MTpjaQ"}
      consumerSecret={"afIQjcqN3c2pYTl4s0WfCG6WPbASWuovmsvSFKa_va1IzpGTJB"}
      >
        <TwitterLoginButton/>
      </LoginSocialTwitter>
    </>
  )
}

export default App
