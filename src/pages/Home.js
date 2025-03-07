import React from 'react';

const Home = () => {
  return (
    <div className="home-page container">
      <section className="hero">
        <h1>Welcome to Project's Corner </h1>
        <p>Discover the projects and ideas that shape Team work.</p>
        <a href="/projects" className="btn">Explore Projects</a>
      </section>

      <section className="intro">
        <h2>About This Site</h2>
        <p>
          This website showcases All projects with detailed descriptions. Browse through to learn more about All work
          and the process behind it.
        </p>
      </section>
    </div>
  );
};

export default Home;
