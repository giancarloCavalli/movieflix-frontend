import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "utils/requests";

import "./styles.css";

type FormData = {
  email: string,
  password: string
}

const LoginCard = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div className="login-card-container">
      <div className="login-card-title">
        <h1>LOGIN</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("email")}
            className="base-input"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            {...register("password")}
            className="base-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div>
          <button className="button login-submit" type="submit">
            FAZER LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
