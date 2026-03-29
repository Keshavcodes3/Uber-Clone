import { setError, setUser, setLoading } from "../Slices/authSlice.js";
import {
  registerCaptain,
  loginCaptain,
  logOutCaptain,
  getCaptainProfile,
} from "../Service/captain.service.js";
import { useDispatch } from "react-redux";

export const useCaptain = () => {
  const dispatch = useDispatch();

  const handleRegister = async (captainData) => {
    try {
      dispatch(setLoading(true));
      const data = await registerCaptain(captainData);

      if (data?.success) {
        dispatch(setUser(data.captain));   
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occurred during Register")
        );
      }

      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occurred during Register")
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogin = async (captainData) => {
    try {
      dispatch(setLoading(true));
      const data = await loginCaptain(captainData);

      if (data?.success) {
        dispatch(setUser(data.captain));  
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occurred during Login")
        );
      }

      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occurred during Login")
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetProfile = async () => {
    try {
      const data = await getCaptainProfile();

      if (data?.success) {
        dispatch(setUser(data.captain));   // 🔥 captain here
        dispatch(setError(null));
      } else {
        dispatch(
          setError(
            data?.error || "Something error occurred during fetching profile"
          )
        );
      }

      return data;
    } catch (err) {
      dispatch(
        setError(
          err?.message || "Something error occurred during fetching profile"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogOut = async () => {
    dispatch(setLoading(true));
    try {
      const data = await logOutCaptain();

      if (data?.success) {
        dispatch(setUser(null));
        dispatch(setError(null));
      } else {
        dispatch(
          setError(data?.error || "Something error occurred during logout")
        );
      }

      return data;
    } catch (err) {
      dispatch(
        setError(err?.message || "Something error occurred during logout")
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGetProfile,
  };
};