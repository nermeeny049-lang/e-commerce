import SignupForm from "../components/signup/signupForm";
import SignupHero from "../components/signup/signupHero";
export default function SignupScreen() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8  justify-center items-start px-4 py-10">
        <SignupHero />
        <SignupForm />
      </div>
    </>
  );
}
