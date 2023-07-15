//STYLES
import "../styles/globals.css";
//NEXTJS
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // Render the main App component
  return (
    <>
      <Head>
        <title>CRUD APP using Next.js + MySQL</title> {/* Set the title of the page */}
        <link rel="icon" type="image/x-icon" href="/crud.png" />{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet"/>
        {/* Set the favicon for the page */}
      </Head>
      <Component {...pageProps} /> {/* Render the component with its props */}
    </>
  );
}
