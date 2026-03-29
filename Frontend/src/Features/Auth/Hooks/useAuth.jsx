import { setError, setUser, setLoading } from "../Slices/authSlice.js";
import {
  registerUser,
  loginUser,
  logOutUser,
  getProfile,
} from "../Service/user.service.js";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const handleRegister = async (userData) => {
    try {
      dispatch(setLoading(true));
      const data = await registerUser(userData);
      if (data?.success) {

        dispatch(setUser(data.user));
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occured during Register"),
        );
      }
      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occured during Register"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleLogin = async (userData) => {
    try {
      dispatch(setLoading(true));
      const data = await loginUser(userData);
      if (data?.success) {
        
        dispatch(setUser(data.user));
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occured during login"),
        );
      }
      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occured during login"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleGetProfile = async () => {
    try {
      const data = await getProfile();
      if (data?.success) {
        dispatch(setUser(data.user));
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occured during login"),
        );
      }
      return data
    } catch (err) {
      dispatch(
        setError(
          err?.message || "Something error occured during fetching profile",
        ),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleLogOut = async () => {
    dispatch(setLoading(true));
    try {
      const data = await logOutUser();
      if (data?.success) {
        localStorage.removeItem('token')
        dispatch(setUser(null));
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occured during loggin out"),
        );
      }
      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occured during loggin out"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  return {handleRegister,handleLogin,handleLogOut,handleGetProfile}
};
