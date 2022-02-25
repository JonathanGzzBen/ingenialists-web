import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </div>
  );
}
