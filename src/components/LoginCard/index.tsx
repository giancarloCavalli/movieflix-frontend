import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { requestBackendLogin } from "utils/requests";
import { saveAuthData } from "utils/storage";

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};


const LoginCard = () => {
  
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then(response => {
        console.log('SUCESSO', response.data);
        saveAuthData(response.data);
        history.push('/movies');
      })
      .catch(error => {
        console.log('ERROR', error)
      });
  };

  return (
    <div className="login-card-container">
      <div className="login-card-title">
        <h1>LOGIN</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("username")}
            className="base-input"
            type="text"
            name="username"
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
