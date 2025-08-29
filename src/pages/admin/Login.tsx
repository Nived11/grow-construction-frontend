import { useSelector } from "react-redux";
import { LoginForm } from "../../features/admin-auth";
import type { RootState } from "@/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { admin } = useSelector((state: RootState) => state.admin);

  const navigate = useNavigate();

  if (admin) {
    navigate("/admin/dashboard");
  }
  
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
      <img
        src="/images/login-bg.png"
        alt="Login background image"
        className="w-full h-[40vh] md:h-full object-cover"
      />
      <LoginForm />
    </main>
  );
};

export default Login;
