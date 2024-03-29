import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setSignedIn }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100%",
        backgroundColor: "#F8FAFF",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#605BFF",
        }}
      >
        <p
          style={{
            width: "99.9%",
            height: "88px",
            // border: "1px solid yellow",
            fontWeight: "700",
            fontSize: "72px",
            lineHeight: "87.77px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          BASE
        </p>
        <div
          // style={{
          //   width: "99.8%",
          //   height: "48px",
          //   border: "1px solid yellow",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   gap: "8rem",
          // }}
          className="footer"
        >
          <BsGithub
            style={{
              width: "44px",
              height: "44px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
          <AiFillTwitterCircle
            style={{
              width: "44px",
              height: "44px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
          <FaLinkedin
            style={{
              width: "44px",
              height: "44px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
          <RxDiscordLogo
            style={{
              width: "44px",
              height: "44px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid green",
        }}
      >
        <div className="subcontainer">
          <div className="childcontainer">
            <p className="para1">Sign In</p>
            <div className="btncontainer">
              <button className="btn1">
                <FcGoogle /> Sign in with google
              </button>
              <button className="btn1">
                <TiVendorApple /> Sign in with apple
              </button>
            </div>
          </div>

          <div className="loginform">
            <form
              style={{
                padding: "20px",
              }}
              className="form"
            >
              <label
                style={{
                  width: "105.38px",
                  height: "20.86px",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19.2px",
                  color: "#000000",
                  padding: "2px",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                id="emailaddress"
                name="email"
                value={"johndoe@gmail.com"}
                style={{
                  width: "356.77px",
                  height: "43.91px",

                  borderRadius: "10px",
                  borderStyle: "none",
                  backgroundColor: "#F5F5F5",
                  padding: "2px",
                }}
              />
              <label
                style={{
                  width: "74.65px",
                  height: "20.86px",

                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19.2px",
                  padding: "2px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={"johndoe123"}
                style={{
                  width: "356.77px",
                  height: "43.91px",

                  borderRadius: "10px",
                  borderStyle: "none",
                  backgroundColor: "#EAEAEA",
                  padding: "2px",
                }}
              />
            </form>
            <a
              href="https://openinapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#346BD4",
                width: "136.12px",
                height: "20.86px",
                padding: "20px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19.2px",
              }}
            >
              Forgot password
            </a>
            <button
              style={{
                backgroundColor: "#605BFF",
                width: "356.77px",
                height: "43.91px",
                borderRadius: "10px",
                borderStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={function () {
                setSignedIn(true);
                navigate("/dashboard");
              }}
            >
              <p
                style={{
                  width: "111.93px",
                  height: "23.84px",

                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  textAlign: "center",
                }}
              >
                Sign in
              </p>
            </button>
          </div>
          <div
            style={{
              width: "286.51px",
              height: "20.86px",
            }}
          >
            <p
              style={{
                color: "#858585",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19.2px",
                textAlign: "center",
              }}
            >
              Don't have an account?
              <span>
                <a
                  href="https://openinapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#346BD4" }}
                >
                  Register here
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
