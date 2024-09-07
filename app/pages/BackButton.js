import { useRouter } from "next/router";

const BackButton = () => {

    const router = useRouter();
    
    return (
      <header>
        <button onClick={() => router.back()}>Back</button>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
    )
  };

  export default BackButton;