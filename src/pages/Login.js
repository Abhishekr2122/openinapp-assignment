export default function Login() {
  return (
    <div
      style={{
        width: "1440px",
        height: "1024px",
        top: "224px",
        left: "159px",
      }}
    >
      <div style={{ width: "719.99px", height: "1024px" }}></div>
      <div style={{ width: "719.99px", height: "1024px" }}>
        <p
          style={{
            width: "143.81px",
            height: "48.3px",
            top: "235.32px",
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
            top: "338.51px",
            left: "813.18px",
            backgroundColor: "transparent",
          }}
        >
          Google Sign in with google
        </button>
        <button
          style={{
            width: "197.6px",
            height: "32.93px",
            top: "338.51px",
            left: "1038.22px",
          }}
        >
          Apple Sign in with apple
        </button>

        <div
          style={{
            width: "422.64px",
            height: "390.8px",
            top: "398.88px",
            left: "813.18px",
            borderRadius: "10px",
          }}
        >
          <form>
            <label
              style={{
                width: "105.38px",
                height: "20.86px",
                top: "431.82px",
                left: "846.11px",
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
              password
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
                backgroundColor: "#EAEAEA",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
