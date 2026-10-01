import LoginForm from "../components/login/loginForm";
import LoginHero from "../components/login/loginHero";
export default function LoginScreen() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8  justify-center items-start px-4 py-10">
        <LoginHero />
        <LoginForm />
      </div>
    </>
  );
}
