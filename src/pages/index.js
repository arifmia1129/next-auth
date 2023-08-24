import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      {session?.user && (
        <h3 style={{ textAlign: "center" }}>
          The logged in user name is: {session?.user?.name}
        </h3>
      )}

      {user?.email && (
        <h3 style={{ textAlign: "center" }}>
          The logged in user email is: {user?.email}
        </h3>
      )}
    </div>
  );
};

export default HomePage;
