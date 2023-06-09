import axios from "axios";
// https://www.pre-onboarding-selection-task.shop
export const loginAPI = (email, password) => {
  const API = "https://www.pre-onboarding-selection-task.shop/auth/signin";

  return axios.post(
    API,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const SignUpAPI = (email, password) => {
  const API = "https://www.pre-onboarding-selection-task.shop/auth/signup";

  return axios.post(
    API,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
