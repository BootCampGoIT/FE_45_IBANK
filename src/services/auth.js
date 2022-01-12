import axios from "axios";

const API_KEY = "AIzaSyAfn-lDuBuI8ibSR0JmvHfomfvwoQhMm90";
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const signUp = async (credentials) => {
  try {
    const response = await axios.post(SIGNUP_URL, {
      ...credentials,
      returnSecureToken: true,
    });
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};
export const signIn = async (credentials) => {
  try {
    const response = await axios.post(SIGNIN_URL, {
      ...credentials,
      returnSecureToken: true,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
