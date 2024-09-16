import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export const Login = () => {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);

  const signIn = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user && user.access_token) {
        try {
          const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          });

          if (response.ok) {
            const data = await response.json();
            setProfile(data);
          } else {
            console.log('Failed to fetch profile');
          }
        } catch (error) {
          console.log('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <div className="absolute top-12 w-full mt-12 flex justify-center items-center">
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
        <div className="p-2 w-96 h-96 border border-black flex flex-col gap-10 justify-center text-center">
          <h1 className="font-bold text-lg">SIGN - IN</h1>
          <input type="text" className="border border-green-600 p-2" placeholder="Username" />
          <input type="password" className="border border-green-600 p-2" placeholder="Password" />
          <div>
            <button className="w-[210px] border border-green-600 bg-blue-200 rounded-lg px-[5px] py-1">
              Sign In
            </button>
          </div>
          <button className="border border-black-200 p-1" onClick={signIn}>Sign In with Google🚀</button>
        </div>
      )}
    </div>
  );
};
