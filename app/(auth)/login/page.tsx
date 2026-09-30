import AuthShowcase from "../AuthShowcase";
import LoginForm from "./LoginForm";

const heading = "Sign in with ease";

const description =
  "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.";

export default function LoginPage() {
  return (
    <AuthShowcase heading={heading} description={description}>
      <LoginForm />
    </AuthShowcase>
  );
}
