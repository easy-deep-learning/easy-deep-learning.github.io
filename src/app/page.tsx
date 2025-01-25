import type { NextPage } from 'next'
import Link from 'next/link'

const IndexPage: NextPage = () => {
  return (
    <div className="IndexPage">
      <h1>
        Образование спасет мир!
      </h1>
      <h3>Курсы</h3>
      <ul>
        <li>
          <Link href="/learn-frontend">
            Фронтенд/Бекенд на JS
          </Link>, начался в конце мая 2022 года.
        </li>
      </ul>

      <h3>Книги</h3>

      <ul>
        <li><a href="https://mybook.ru/tags/sovremennoe-obrazovanie/">Современное образование (Книги в mybook)</a></li>
        <li><a href="https://newtonew.com/book/most-influential-education-books">10 самых влиятельных книг об образовании</a> <br />
          От Руссо до Илича: десять книг, которые сформировали современную педагогику и определили, что мы думаем об образовании сегодня.
        </li>
      </ul>

      <h3>Видео</h3>

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
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="video-item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/n13hg-zFeyA"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="video-item">
          <iframe width="560"
                  height="315"
                  src="https://www.youtube.com/embed/a-bkQtKgD04"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
          />
        </div>

      </div>
    </div>
  )
}

export default IndexPage
