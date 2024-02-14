import React from 'react'
import Navbar from '../components/landing/Navbar'
import Subscribe from '../components/landing/Subscribe';

const About = () => {
  return (
    <div>
      <section className='section1'>
      <Navbar />

      <div className="card-container3">
<div className="card-slider">
  <div className="profil">
  <div className="avatar"></div>
  <div className="person">
  <h1>Airlangga Hartanto</h1>
    <h2>Menteri Koordinator dan Perekonomian RI</h2>
  </div>
  </div>

  <div className="details">

    <p>Saya minta kepada segenap pengurus DPD, provinsi, kabupaten, dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat.</p>
  </div>
</div>

<div className="card-slider">
  <div className="profil">
  <div className="avatar"></div>
  <div className="person">
  <h1>Jokowi Dodo</h1>
    <h2>Presiden RI</h2>
  </div>
  </div>

  <div className="details">

    <p>Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan.</p>
  </div>
</div>

<div className="card-slider">
  <div className="profil">
  <div className="avatar"></div>
    <div className="avatur">
    <h1>Puan Maharani</h1>
    <h2>Ketua DPR dan Fraksi PDI Perjuangan</h2>
    </div>
  </div>

  <div className="details">

    <p>Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketika proses demokratisasi berlangsung.</p>
  </div>
  </div>
  </div>

  <Subscribe />
    </section>
    
    </div>


  )
}

About.propTypes = {}

export default About