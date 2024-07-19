import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Verified from "@mui/icons-material/Verified";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import InputField from "../UI/InputField";
import Btn from "../UI/Btn";
import BodyText from "../UI/BodyText";
import SubBodyText from "../UI/SubBodyText";
import axios from "axios";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailList, setEmailList] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const fetchEmails = async () => {
    try {
      const response = await axios.get(
        "http://localhost/exp_tracker_API/get_emails.php"
      );
      const emails = response.data;

      localStorage.setItem("userEmails", JSON.stringify(emails));
      setEmailList(emails);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const registerHandle = (e) => {
    e.preventDefault();

    // Display error message for blank field submission
    if (!email || !password || !name || !phone) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "All fields are required",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    // Check if email exists in emailList
    if (emailList.includes(email)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Email ID already used",
        showConfirmButton: false,
        timer: 2000,
      });
      setPassword("");
      return;
    }

    axios
      .post(
        "http://localhost/exp_tracker_API/register.php",
        {
          name: name,
          email: email,
          phone: phone,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 2000,
        });

        fetchEmails();

        setName("");
        setPhone("");
        setEmail("");
        setPassword("");

        navigate("/login");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="bg-white border-3 border-main-grey rounded-[8px] w-[500px] py-8 px-12">
        <div className="text-center border-b-2 border-b-main-grey py-3">
          {/* <Heading title="Expense Tracker" /> */}
          <Heading title="Logo" cssClass="text-medium-blue" />
        </div>

        <div className="text-center my-8">
          <SubHeading title="Sign Up" cssClass="text-medium-blue" />
        </div>

        <div>
          <div className="mx-0 my-5">
            <InputField
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              cssClass="w-full"
              required={true}
            />
          </div>
          <div className="mx-0 my-5">
            <InputField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              cssClass="w-full"
              required={true}
            />
          </div>
          <div className="mx-0 my-5">
            <InputField
              type="text"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              cssClass="w-full"
              required={true}
            />
          </div>
          <div className="mx-0 my-5">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
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
              label="Register"
              startIcon={<Verified />}
              onClick={registerHandle}
              cssClass="w-full"
              sx={{ backgroundColor: "#2398F8" }}
            />
          </div>

          <div className="text-center">
            <Link to="/login">
              <BodyText>Already have an account?</BodyText>
            </Link>
            <SubBodyText content="Forgot Password?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
