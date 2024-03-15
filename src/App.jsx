import './App.css'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { useState,useEffect } from 'react'

function App() {
  
  let [userName, setUserName]  = useState(null)
  let [userPicture, setUserPicture] = useState(null)

  

  return (
    <>
      <h1>This is just a test application for an activity</h1>
      <LoginSocialFacebook
        appId='7568321253207635' // Replace with your app ID
        onResolve={(response) => {
          console.log(response);
          userName = "Welcome" + response.name;
          setUserName(userName) 
          // userPicture = response.picture.data.url
          // setUserPicture(userPicture) 
        }}
        onReject={(error) => console.log(error)}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      <div>
          <h1>{userName}</h1>
          <img src={userPicture}></img>
        </div>
    </>
  )
}

export default App
