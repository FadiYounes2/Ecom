
function Team() {
  return (
    <section className="team-section">
      <div className="container">

        <div className="row">

       
          <div className="col-lg-3 col-md-6">
            <div className="team-card">

              <img
                src={teacher1}
                alt="Sasha Payne"
                className="team-image"
              />

              <h3>Sasha Payne</h3>

              <p>Co-Founder</p>

              <div className="social-links">
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">x</a>
              </div>

            </div>
          </div>


          <div className="col-lg-3 col-md-6">
            <div className="team-card">

              <img
                src={teacher2}
                alt="Jennie Roberts"
                className="team-image"
              />

              <h3>Jennie Roberts</h3>

              <p>Manager</p>

              <div className="social-links">
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">x</a>
              </div>

            </div>
          </div>



          <div className="col-lg-3 col-md-6">
            <div className="team-card">

              <img
                src={teacher3}
                alt="Mila Parker"
                className="team-image"
              />

              <h3>Mila Parker</h3>

              <p>Spanish Teacher</p>

              <div className="social-links">
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">x</a>
              </div>

            </div>
          </div>


          <div className="col-lg-3 col-md-6">
            <div className="team-card">

              <img
                src={teacher4}
                alt="Monica Pouli"
                className="team-image"
              />

              <h3>Monica Pouli</h3>

              <p>English Teacher</p>

              <div className="social-links">
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">x</a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;