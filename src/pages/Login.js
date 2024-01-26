import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";

export default function Login() {
  return (
    <div
      style={{
        width: "1440px",
        height: "1024px",
        top: "224px",
        left: "159px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8FAFF",
      }}
    >
      <div
        style={{
          width: "719.99px",
          height: "1024px",
          backgroundColor: "#605BFF",
          position: "absolute",
          clipPath: "polygon(0,0,100%,0,77%,100%,0%,100%)",
        }}
      >
        <p
          style={{
            width: "205px",
            height: "88px",
            position: "absolute",
            top: "462.37px",
            left: "196.33px",
            fontWeight: "700",
            fontSize: "72px",
            lineHeight: "87.77px",
            color: "#FFFFFF",
          }}
        >
          BASE
        </p>
        <div
          style={{
            width: "299px",
            height: "48px",
            position: "absolute",
            top: "909px",
            left: "144.5px",
            display: "flex",
            justifyContent: "space-between",
          }}
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
      <div style={{ width: "719.99px", height: "1024px" }}>
        <p
          style={{
            width: "143.81px",
            height: "48.3px",
            top: "235.32px",
            position: "absolute",
            left: "813.18px",
            fontFamily: "monospace",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "43.88px",
          }}
        >
          Sign In
        </p>
        <button
          style={{
            width: "197.6px",
            height: "32.93px",
            position: "absolute",
            top: "338.51px",
            left: "813.18px",
            borderStyle: "none",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          Google Sign in with google
        </button>
        <button
          style={{
            width: "197.6px",
            height: "32.93px",
            position: "absolute",
            top: "338.51px",
            left: "1038.22px",
            borderRadius: "10px",
            borderStyle: "none",
            backgroundColor: "#FFFFFF",
          }}
        >
          Apple Sign in with apple
        </button>

        <div
          style={{
            width: "422.64px",
            height: "390.8px",
            position: "absolute",
            top: "398.88px",
            left: "813.18px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <form
            style={{
              padding: "20px",
            }}
          >
            <label
              style={{
                width: "105.38px",
                height: "20.86px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19.2px",
                color: "#000000",
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
                top: "463.65px",
                left: "846.11px",
                borderRadius: "10px",
                borderStyle: "none",
                backgroundColor: "#F5F5F5",
              }}
            />
            <label
              style={{
                width: "74.65px",
                height: "20.86px",
                top: "529.52px",
                left: "846.11px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19.2px",
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
                top: "561.35px",
                left: "846.11px",
                borderRadius: "10px",
                borderStyle: "none",
                backgroundColor: "#EAEAEA",
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
            }}
          >
            <p
              style={{
                width: "111.93px",
                height: "23.84px",
                top: "679.91px",
                left: "969.7px",
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
            position: "absolute",
            top: "768.83px",
            left: "881.24px",
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
          </p>
          <a
            href="https://openinapp.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#346BD4" }}
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  );
}
