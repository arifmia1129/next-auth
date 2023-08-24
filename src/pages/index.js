import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {
  const { data: session } = useSession();
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
    </div>
  );
};

export default HomePage;
