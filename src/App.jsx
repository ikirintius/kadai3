import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">日本大学文理学部情報科学科 Webプログラミングの演習課題</h1>
          </div>
        </div>
      </header>
    );
  }

  function Name(){
    return(
      <div className="container is-fluid">
  <div className="notification is-primary">
  This page was created by <strong>長谷川泰山</strong>My student ID number is 5420069, thank you in advance🐶!
  </div>
</div>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={props.src} alt="cute shibe!" />
            
          </figure>
        </div>
      </div>
    );
    function Calc() {
      const x = 6;
      const y = 7;
      return (
        <p>
          {x} * {y} = {x * y}
        </p>
      );
    }
  }

  function Loading() {
    return <p>Loading...</p>;
  }  

    function Gallery(props) {
        const { urls } = props;
        if (urls == null) {
            return <Loading />;
          }
    return (
      <div className="columns is-vcentered is-multiline">
         {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
      </div>
    );
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
      fetchImages().then((urls) => {
        //console.log(urls);
        setUrls(urls);
      });
    }, []);
    return (
      <main>
        <section className="section">
          <div className="container">
          <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Shibe images are retrieved from https://shibe.online/</p>
          <p>
            <a href="https://shibe.online/">join to shibe API</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Name />
        <Main />
        <Footer />
      </div>
    );
  }

  
  
  export default App;