import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import './login.scss'

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/home");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
      <form className="login" onSubmit={handleNavigation}>
        <div className="login-wrapper">
          <h2 className="login-title">Hello!</h2>
          <div className="control-container">
            <div className="control-wrapper">
              <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                placeholder="Aquí tu nombre"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          
            <div className="control-wrapper">
              <TextField 
                id="outlined-basic" 
                label="Password:" 
                variant="outlined" 
                placeholder="Aquí tu contraseña"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="control-wrapper">
              <Button 
                type="submit" 
                variant="contained"
                endIcon={<SendIcon />}
                disabled={username === '' || password === '' ? true : false}
              >Login</Button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default Login;