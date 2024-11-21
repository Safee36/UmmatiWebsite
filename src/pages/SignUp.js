import React, { useState } from "react";
import { Button, Typography, Box, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import googleIcon from "../assets/icons/icons8-google.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [agreedToTerms, setAgreedToTerms] = useState(false); // New state for checkbox

  const handleTermsChange = (e) => {
    setAgreedToTerms(e.target.checked); // Update the state when checkbox is toggled
  };
  return (
    <div>
      <Header />
      <Box className="flex justify-center items-center bg-[#F7F5EF] p-4 sm:p-6 md:p-10">
        <Box
          sx={{
            width: "100%",
            maxWidth: "540px",
            height: "auto",
            borderRadius: "8px",
            padding: { lg: 6, xs: 4 },
            border: "1px solid #C4BAA2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px", // Adds equal spacing between all children
            boxSizing: "border-box", // Ensures padding doesn't push the element out of view
          }}
          className="p-6 bg-white shadow-lg"
        >
          {/* Header Text */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "40px",
              textAlign: "center",
              color: "#5A4283",
            }}
          >
           Sign Up With
          </Typography>

          {/* Google Login Button */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <img
                src={googleIcon}
                alt="Google Icon"
                style={{ width: "24px", height: "24px" }}
              />
            }
            onClick={handleGoogleLogin}
            sx={{
              boxShadow: "10px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              width: "100%",
              height: "54px",
              fontFamily: "Roboto", // Font Family
              fontWeight: 200, // Font Weight
              fontSize: "20px", // Font Size
              lineHeight: "23.44px",
              color: "#0000008A",
              textTransform: "none",
              padding: "10px",
            }}
          >
             Sign up with Google
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "16px 0", // Adjusts spacing around the divider
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "1px",
                backgroundColor: "#5A4283",
              }}
            />
            <Typography
              sx={{
                padding: "0 16px",
                fontSize: "14px",
                color: "#5A4283",
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: "1px",
                backgroundColor: "#5A4283",
              }}
            />
          </Box>

          {/* Email & Password Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* First Name Input */}

            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-[#8692A6] mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                placeholder="Write your First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-[#8692A6] rounded-lg shadow-sm focus:outline-none focus:ring-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-[#8692A6] mb-2"
              >
                First Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                placeholder="Write your Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-[#8692A6] rounded-lg shadow-sm focus:outline-none focus:ring-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#8692A6] mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Write your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-[#8692A6] rounded-lg shadow-sm focus:outline-none focus:ring-1"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#8692A6] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle the input type
                value={password}
                placeholder="Write your Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-[#8692A6] rounded-lg shadow-sm focus:outline-none focus:ring-1"
              />
              {/* Eye Icon for toggling password visibility */}
              <IconButton
                onClick={togglePasswordVisibility}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "70%",
                  transform: "translateY(-50%)",
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>

            <div className="flex justify-between items-center mb-4">
              {/* Empty space to align "Forgot password?" to the right */}
              {/* <div></div> */}
              <div className="mb-4">
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={agreedToTerms}
                    onChange={handleTermsChange}
                    required
                    sx={{
                      '& .MuiCheckbox-root': {
                        color: '#5A4283', // Set the default color of the checkbox
                      },
                      '&.Mui-checked': {
                        color: '#5A4283', // Set the color when checkbox is checked
                      },
                    }}
                  />
                  }
                  label={
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: "Poppins",
                        color: "#5A4283",
                        fontSize: "14px",
                        display: "inline", // Ensure the label text stays in line
                      }}
                    >
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="text-[#5A4283] hover:underline"
                      >
                        Terms and Conditions
                      </a>
                    </Typography>
                  }
                  sx={{ display: "flex", alignItems: "center" }} // Aligns checkbox and label in a row
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              sx={{
                fontSize: { lg: "20px" },
                fontFamily: "Quicksand",
                fontWeight: "700",
                backgroundColor: "#78B27B",
                borderRadius: "50px",
                textTransform: "none",
                width: "100%",
                padding: "12px",
                color: "white",
              }}
              disabled={!agreedToTerms}
            >
              Sign Up
            </Button>
          </form>

          {/* Register Link */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "Poppins",
              textAlign: "center",
              color: "grey",
              fontSize: "16px",
            }}
            className="text-sm text-center"
          >
            Do you already have an account?{" "}
            <a
              href="/register"
              className="text-[#5A4283] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Log in
            </a>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default SignUp;
