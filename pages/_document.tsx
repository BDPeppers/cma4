import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>CMA Fitness - Warner Robins Gym and Fitness Near You</title>
        <meta
          name="description"
          content="Warner Robins gym providing quality fitness to the Middle GA area.
                  Offering bodybuilding competition prep, personal training, meal and training guides,
                  group fitness classes, and even a gym daycare."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Hammersmith+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/cma.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
