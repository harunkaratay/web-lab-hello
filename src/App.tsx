import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <a href="#main-content">Ana icerige atla</a>
      <header>
        <h1>Harun Karatay - Kisisel Portfoy</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      
      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          <figure>
            <img
              src="/profil.jpg"
              alt="Muhammed Harun Karatay'in vesikalik fotografi"
              width={300}
              height={300}
            />
            <figcaption>
              Muhammed Harun Karatay - Yazilim Muhendisligi Ogrencisi
            </figcaption>
          </figure>

          <p>
            Merhaba, ben Harun Karatay. Yazilim Muhendisligi ogrencisiyim.
            Web gelistirme alaninda kendimi gelistiriyor ve modern
            teknolojiler ile projeler uretmeyi seviyorum.
          </p>

          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>
              Urun listeleme, sepet ve admin paneli iceren
              tam fonksiyonel bir web uygulamasi.
            </p>
          </article>

          <article>
            <h3>Blog Uygulamasi</h3>
            <p>
              Kullanici girisi, yazi ekleme ve yorum sistemi
              iceren dinamik blog platformu.
            </p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>

          <form noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div>
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" role="alert"></small>
              </div>

              <div>
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" role="alert"></small>
              </div>

              <div>
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" role="alert"></small>
              </div>

              <div>
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}required minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Muhammed Harun Karatay. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App
