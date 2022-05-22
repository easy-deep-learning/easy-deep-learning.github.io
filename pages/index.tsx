import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy deep learning</title>
      </Head>

      <main>
        <h1>
          Образование спасет мир!
        </h1>

        <p><a href="https://github.com/easy-deep-learning">github</a></p>
        <p><a href="https://mybook.ru/tags/sovremennoe-obrazovanie/">Современное образование (Книги в mybook)</a></p>
        <p>
          <a href="https://newtonew.com/book/most-influential-education-books">10 самых влиятельных книг об образовании</a> <br/>
          От Руссо до Иллича: десять книг, которые сформировали современную педагогику и определили, что мы думаем об образовании сегодня.
        </p>

        <div className="video-list">

          <div className="video-item">
            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/yKWrP42ySUw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-item">
            <iframe
              width="560"
              height="315" src="https://www.youtube.com/embed/p-Z-hrZx3UQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n13hg-zFeyA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-item">
            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/a-bkQtKgD04"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

      </main>

      <footer/>
    </>
  )
}

export default Home
