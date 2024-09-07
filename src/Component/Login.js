import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
export const Login = () => {
  const [profile, setProfile] = useState(null);
  const [ user, setUser ] = useState([]);
  // const responseMessage = (response) => {
  //   console.log(response);
    
  //   if (response.credential) {
  //     fetch(
  //       `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.credential}`,
  //       {
  //         mode: 'no-cors',
  //         headers: {
  //           Authorization: `Bearer ${response.credential}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         } else {
  //           throw new Error('Failed to fetch user info');
  //         }
  //       })
  //       .then((data) => setProfile(data))
  //       .catch((err) => console.error("Error fetching user info:", err));
  //   }
  // };

  // const errorMessage = (error) => {
  //   console.error("Login Failed:", error);
  // };
  const SignIn = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="w-full flex justify-center text-center">
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <div className="my-10 m-4 p-2 w-96 h-96 border border-black flex flex-col gap-10 justify-center text-center">
          <h1 className="font-bold text-lg">SIGN - IN</h1>
          <input type="text" className="border border-green-600 p-2" placeholder="Username" />
          <input type="password" className="border border-green-600 p-2" placeholder="Password" />
          <div className="">
            <button className="w-[210px] border border-green-600 bg-blue-200 rounded-lg px-[5px] py-1">
              Sign In
            </button>
          </div>
           <button className="border border-black-200 p-1" onClick={()=>SignIn()} >Sign In with Google🚀</button>
        </div>
      )}
    </div>
  );
};
