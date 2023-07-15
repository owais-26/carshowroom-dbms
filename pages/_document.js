//NEXTJS
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {" "}
      {/* Set the language of the document */}
      <Head /> {/* Include the head section of the document */}
      <body className="bg-slate-200">
        {" "}
        {/* Set the background color of the body */}
        <Main /> {/* Render the main content */}
        <NextScript /> {/* Include the Next.js scripts */}
      </body>
    </Html>
  );
}
