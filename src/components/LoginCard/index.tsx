import "./styles.css";

const LoginCard = () => {
  return (
    <div className="login-card-container">
      <div className="login-card-title">
        <h1>LOGIN</h1>
      </div>

      <form>
        <div>
          <input
            className="base-input"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="base-input"
            type="password"
            name="senha"
            placeholder="Senha"
          />
        </div>
      </form>

      <div>
        <button className="button" type="button">
          FAZER LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
