import GuestLayout from "../Components/Layouts/GuestLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserLayout from "@/Components/Layouts/UserLayout";
import { Button } from "@/Components/ui/button";

export default function Home() {
  const [auth, setAuth] = useState(true);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const navigateTo = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.username);
          setAuth(true);
          setUsername(res.data.username);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error fetching authentication status:", error);
        setAuth(false);
        setMessage(
          "An error occurred while fetching the authentication status."
        );
      });
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:3002/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {auth ? (
        <UserLayout>
          <div className="max-w-3xl w-full h-full p-8">
            {/* <span className="text-2xl text-violet-700 font-semibold">
              Welcome {username}!
            </span> */}
            <p className="text-3xl text-violet-700 font-semibold">
              Stable Diffusion Image Discrimination: Comparative Study Using
              Support Vector Machines And Convolutional Neural Networks
            </p>
          </div>
        </UserLayout>
      ) : (
        <GuestLayout>
          <div className="">Not Authenticated {message}</div>
        </GuestLayout>
      )}
    </>
  );
}
