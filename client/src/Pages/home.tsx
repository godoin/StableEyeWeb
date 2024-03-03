import GuestLayout from "../Components/Layouts/GuestLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserLayout from "@/Components/Layouts/UserLayout";
import { Button } from "@/Components/ui/button";

export default function Home() {
  const [auth, setAuth] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigateTo = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.username);
          setAuth(true);
          setName(res.data.username);
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
          <div className="">Authenticated {name}</div>
          <Button variant="destructive" onClick={handleDelete}>
            Logout
          </Button>
        </UserLayout>
      ) : (
        <GuestLayout>
          <div className="">Not Authenticated {message}</div>
        </GuestLayout>
      )}
    </>
  );
}
