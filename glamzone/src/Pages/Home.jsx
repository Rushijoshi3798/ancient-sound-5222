import React from 'react'
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{width: "100%"}}>
        <div
          style={{
            position: "relative",
            width: "100%",
          }}>
          <img
            src="https://images.dsw.com/is/image/DSWShoes/P222162_ft_boots?impolicy=qlt-medium&imwidth=1400&imdensity=1"
            alt="Snow"
            style={{ width: "100%", height: "600px" }}
          />
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "40px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
            }}>
            Need-Now Boots Under $100
          </p>
          <p
            style={{
              border: "none",
              position: "absolute",
              top: "42%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "14px",
              padding: "12px 20px",
              width: "35%",
              borderRadius: "5px",
              textAlign: "center",
              letterSpacing: "0.1em",
            }}>
            Your Kind of Boots at Your kind of Prices
          </p>
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "43%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 45px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline"
            }}>
            SHOP WOMEN'S
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "57%",
              transform: "translate(-50%, -50%)",
              MediaStreamTransform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "14px",
              fontWeight: "bolder",
              padding: "12px 50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              textDecoration: "underline"
            }}>
            SHOP MEN'S
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Home;
