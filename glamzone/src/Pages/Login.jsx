import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import { Box, Center, Text } from "@chakra-ui/react";

// email- eve.holt@reqres.in
// password - cityslicka

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, isAuth} = useContext(AuthContext)
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({email,password})
      });

      res = await res.json()

      login(res.token)
      console.log(res.token)
      setDisabled(true)
      
    } catch (error) {
      console.log("errrr", error)
    }

  };

  if(isAuth){
    return <Navigate to="/" />
  } 


  return (
    <div onSubmit={handleSubmit}>
      <Center>
      
      <Box w={"20%"} p={"40px"} py={"40px"} background={"#c9cfd8"} margin={"20px"} marginTop={"150px"} borderRadius={"10px"}>
      <Text fontSize={"22px"} textDecoration={"underline"} fontWeight={"bold"} marginBottom={"20px"}>Log In</Text>
      <form>
        <div style={{}}>
          <label>
            <input style={{padding: "10px" , borderRadius: "10px", marginBottom: "10px"}}
            
            type="email" 
            placeholder="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
            style={{padding: "10px" , borderRadius: "10px", marginBottom: "10px"}}
              
              type="password"
              placeholder="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button style={{background: "black", color: "white", padding: "10px 30px 10px 30px", borderRadius: "10px", marginTop: "20px" }} disabled={disabled} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div style={{marginTop: "20px"}}>
        <Link to="/">
          Go to Home Page
        </Link>
      </div>
      </Box>
      </Center>
    </div>
  );
}
export default Login;