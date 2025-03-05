import fakepic from '../assets/fakepic.png';

function Home() {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
        <div className="info">
          <h2>HII, I'M SHAURYA GUPTA</h2>
          <h3>SOFTWARE DEVELOPER</h3>
          <a href="#" className="btn">DOWNLOAD CV <i className="fas fa-arrow-circle-right"></i></a>
        </div>
        <div className="blob">
          <img src={fakepic} alt="Profile" />
        </div>
      </div>
      <a href="#about" className="scroll-down">SCROLL DOWN <i className="fas fa-arrow-down"></i></a>
    </section>
  );
}

export default Home;