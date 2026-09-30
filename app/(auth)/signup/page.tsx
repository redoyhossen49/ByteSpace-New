import AuthShowcase from "../AuthShowcase";
import SignupForm from "./SignupForm";

const heading = "Sign up and come in";

const description =
  "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.";

export default function SignupPage() {
  return (
    <AuthShowcase heading={heading} description={description}>
      <SignupForm />
    </AuthShowcase>
  );
}
