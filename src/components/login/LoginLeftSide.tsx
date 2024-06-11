import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import nxtbnlogo from "../../assets/nxtbn_black.png";
import useApi from "../../api";
import { login } from "../../redux/authSlice";
import { AxiosResponse } from "axios";

interface LoginResponse {
  user: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
  };
  token: {
    access: string;
    refresh: string;
  };
}


function LoginLeftSide() {
  const dispatch = useDispatch();
  const api = useApi();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = formData.email.includes('@') && formData.password.length >= 1;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.adminLogin(formData).then((response: AxiosResponse<LoginResponse>) => {
      const loginResponse = response as unknown as LoginResponse; // Cast response to LoginResponse
      dispatch(login(loginResponse.token.access));
      navigate('/dashboard');
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="flex flex-col md:gap-[70px] gap-[150px] px-3 mt-[35px] md:mt-[80px] md:px-[5%] lg:px-[15%] xl:px-[20%]">
      <div>
        <img src={nxtbnlogo} alt="NXTBN Logo" className="w-[100px] md:w-[252px]" />
      </div>

      <div className="flex flex-col justify-center mb-[150px] md:justify-start w-[100%] px-3 gap-10">
        <h3 className="text-[32px] font-nunito-h3 text-center md:text-start">Login to your account</h3>
        <div className="flex flex-col gap-10">
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-secondary-50 outline-none border-none px-5 py-2 rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-secondary-50 outline-none border-none px-5 py-2 rounded-md"
              required
              minLength={1}
            />

            <button
              className={`flex justify-center items-center gap-3 px-7 py-3 rounded-xl text-white font-nunito-button ${
                isFormValid
                  ? "bg-primary-500 active:bg-primary-500"
                  : "bg-[#86D7B0] cursor-not-allowed"
              }`}
              disabled={!isFormValid}
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="text-red-500">
            Stop right there! Admin credentials needed to proceed. Don't have them? Your friendly web admin can assist. Developers, you know the routine!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginLeftSide;
