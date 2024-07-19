import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import InputField from "../UI/InputField";
import Btn from "../UI/Btn";
import BodyText from "../UI/BodyText";
import SubBodyText from "../UI/SubBodyText";
import Swal from "sweetalert2";
import axios from "axios";
import { UserInfo } from "../Context/UserInfo";

function Login() {
  const { setUser } = useContext(UserInfo);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailList, setEmailList] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Function to fetch emails from API
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          "http://localhost/exp_tracker_API/get_emails.php"
        );
        const emails = response.data;
        // Save the email list to localStorage
        localStorage.setItem("userEmails", JSON.stringify(emails));
        setEmailList(emails);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    // Check if emails are already in localStorage
    const cachedEmails = localStorage.getItem("userEmails");
    if (cachedEmails) {
      setEmailList(JSON.parse(cachedEmails));
    } else {
      fetchEmails();
    }
  }, []);

  const loginHandle = () => {
    // Display error message for blank field submission
    if (!email || !password) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "All fields are required",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Check if email exists in emailList
    if (!emailList.includes(email)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "User not found",
        showConfirmButton: false,
        timer: 2000,
      });
      setPassword("");
      return;
    }

    axios
      .post(
        "http://localhost/exp_tracker_API/login.php",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle successful login response
        if (response.data.user) {
          // Store user details & navigate to another page
          setUser(response.data.user); // Set the user data in context
          navigate("/layout");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "An error occurred while logging in. Please try again later.",
        });
      });
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="bg-white border-3 border-main-grey rounded-[8px] w-[500px] py-8 px-12">
        <div className="text-center border-b-2 border-b-main-grey py-3 mx-[30px]">
          {/* <Heading title="Expense Tracker" /> */}
          <Heading title="Logo" cssClass="text-medium-blue" />
        </div>

        <div className="text-center my-8">
          <SubHeading title="Login" cssClass="text-medium-blue" />
        </div>

        <div>
          <div className="mx-0 my-5">
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              cssClass="w-full"
              required={true}
            />
          </div>
          <div className="mx-0 my-5">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"} // Add type to InputField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              cssClass="w-full"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              required={true}
            />
          </div>
          <div className="my-10">
            <Btn
              label="Login"
              startIcon={<LoginIcon />}
              onClick={loginHandle}
              cssClass="w-full"
              sx={{ backgroundColor: "#2398F8" }}
            />
          </div>

          <div className="text-center">
            <BodyText>
              Don't have an account?<Link to="/signup"> Sign-up</Link>
            </BodyText>
            <SubBodyText content="Forgot Password?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
