import { signIn } from "@/app/page";
import Link from "next/link";

interface pageProps {}

const Register = ({}) => {
  return (
    <div>
      <button className="text-center p-8" onClick={signIn}>
        Sign In
      </button>
      <Link href="/auth/register" className="text-center p-10 w-full">
        Does not have an account ? Register Instead
      </Link>
    </div>
  );
};

export default Register;
