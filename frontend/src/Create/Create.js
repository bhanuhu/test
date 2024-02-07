import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { TextField, Stack, createStyles, colors } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OutlinedCard() {
  const[valid,setvalid]=useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values: ", values);
    if (values.name !== "" && values.email !== "") {
      const { name, email } = values;
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        console.log('Invalid email address');
        setvalid(true);
      }
      else{
        
      setvalid(false);
      const res = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true 
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });
      console.log(res);
      console.log(res.data);
      const data = await res.json();
      console.log("status: ", res.status);

      if (res.status === 201) {
        navigate('../inside');
      } else if (res.status === 403) {
        console.log(data);
        alert(data);
      } else {
        console.log(data);
      }
    }}
  };

  return (
    <Box sx={{ maxWidth: 215, textAlign: "center", mt: "3%" }}>
      <Card
        variant="outlined"
        sx={{
          alignItems: "center",
          borderColor: "#191919",
          ml: "300%",
          mr: "-400%",
          borderRadius:5
        }}
      >
        <CardContent sx={{ backgroundColor: "#191919" }}>
          <RocketLaunchIcon
            sx={{ color: "white", fontSize: "3rem", mt: "7%" }}
          />
          <Typography sx={{ color: "white", mb: "15%", mt: "5%" }} variant="h4">
            Create Your Accont
          </Typography>

          <Stack>
            <TextField
              label="Enter Your Name"
              InputProps={{ style: { borderRadius: 50, bordercolor: "white" } }}
              name="name"
              required
              onChange={handleChange}
              style={{borderColor:'white',border:'1px solid white',borderRadius:50}}
              sx={{
                input: { color: "white", borderColor: "white" },
                label: { color: "white" },
                border: { color: "white" },
                mb: "5%",
              }}
            />
            <TextField
              label="Enter Email ID"
              InputProps={{ style: { borderRadius: 50, bordercolor: "white" } }}
              name="email"
              required
              onChange={handleChange}
              style={{borderColor:'white',border:'1px solid white',borderRadius:50}}
              sx={{
                input: { color: "white", borderColor: "white" },
                label: { color: "white" },
                border: { color: "white" },
                mb: "10%",
              }}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ backgroundColor: "#404040", borderRadius: 5, mt: "4%" }}
            >
              <Box>Continue</Box>
              <ArrowForwardIcon />
            </Button><Box sx={{color:"white"}}>
            {valid?<div >Email id is not valid</div>:<></>}</Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}