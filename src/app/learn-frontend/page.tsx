import type { NextPage, Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Learn Frontend',
}

const LearnFrontend: NextPage = () => {
  return (
    <article>

      <h2>Привет!</h2>

      <p>
        Вы наверное видели успевший стать знаменитым твит: <br /><br />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="https://twitter.com/alexbaumgertner/status/1527602497782788096">
          <img src="./images/twit_alexbaumgertner_1_49pm_May_20_2022.png" width="500px" alt="twit alexbaumgertner from 1.49pm May 20 2022" />
        </a>
      </p>

      <p>
        Многие откликнулось и я заметил, что есть два типа запросов:
      </p>

      <h3 id="novice">
        1. Я раньше не работал(-а) с HTML/CSS/JS, но хочу научиться
      </h3>

      <p>— вам я рекомендую посмотреть и пройти несколько очень хороших вводных бесплатных курсов:</p>

      <ul>
        <li>
          <strong>HTML/CSS верстка</strong>: <a
          href="https://htmlacademy.ru/courses/intro-to-web-development">https://htmlacademy.ru/courses/intro-to-web-development</a>
        </li>
        <li>
          <strong>HTML</strong>: <a href="https://ru.code-basics.com/languages/html">https://ru.code-basics.com/languages/html</a>
        </li>
        <li>
          <strong>CSS</strong>: <a href="https://ru.code-basics.com/languages/css">https://ru.code-basics.com/languages/css</a>
        </li>
        <li>
          <strong>JS</strong>: <a href="https://ru.code-basics.com/languages/javascript">https://ru.code-basics.com/languages/javascript</a>
        </li>
        <li>
          <strong>Больше теории: <a
            href="https://ru.hexlet.io/courses/introduction_to_programming">https://ru.hexlet.io/courses/introduction_to_programming</a></strong>
        </li>
      </ul>

      <h3 id="intermediate">
        2. Я немного знаю HTML/CSS/JS, хочу развиваться дальше
      </h3>

      <p>
        Попробуйте пройти <a href="https://nextjs.org/learn/foundations/about-nextjs">курс по NextJS</a>.
        Это отличный фреймворк для создания веб-сайтов на React.
      </p>

      <p>Страничка, которую вы сейчас читаете — <a href="https://github.com/easy-deep-learning/easy-deep-learning.github.io">сделана на NextJS</a>.</p>

      <h3 id="own-project">И первым и вторым самое главное — нужно придумать свой проект</h3>

      <p>Свой проект — главный мотиватор и необходимое условие успеха.</p>

      <p>
        По проекту:
        придумайте что-то, важное для вас, это может быть
      </p>

      <ul>
        <li>система учета финансов</li>
        <li>система учета еды, тренировок</li>
        <li>сайт благотворительной организации</li>
        <li>обучающая платформа по английскому/немецкому/турецкому/итд языку</li>
        <li>любой веб-сайт, о котором вы мечтали</li>
      </ul>


      <h3 id="next-steps">У меня есть идея проекта, что дальше?</h3>

      <ul>
        <li>Создайте на github репозиторий, добавьте меня (alexbaumgertner) в collaborators</li>
        <li>
          создайте issue с описанием проекта, вашими текущими знаниями HTML/CSS/JS, программами проектирования сайтов типа https://www.figma.com/ и начнем
          работать :)
        </li>
        <li>
          Будет здорово, если вы составите схему сайта в figma — макет каждой страницы, можно максимально схематично: какие блоки информации будут в каких
          местах.
          <p>Примеры макетов:</p>
          <ul>
            <li><a href="https://www.figma.com/community/file/849342658995967505">https://www.figma.com/community/file/849342658995967505</a></li>
            <li><a href="https://www.figma.com/community/file/829474905036527548">https://www.figma.com/community/file/829474905036527548</a></li>
          </ul>
        </li>
      </ul>

      <p>Кстати, хороший курс по Figma: <a
        href="https://www.freecodecamp.org/news/figma-crash-course/">https://www.freecodecamp.org/news/figma-crash-course/</a></p>


      <h3 id="github">Как работать с github</h3>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=9dkzbSnN2FQ">https://www.youtube.com/watch?v=9dkzbSnN2FQ (RU)</a></li>
        <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk&t=426s">https://www.youtube.com/watch?v=RGOj5yH7evk&t=426s (EN)</a></li>
      </ul>

      <p>
        Не бойтесь!
        Абсолютно у всех будут проблемы и вопросы.
        Я первый раз начал изучать HTML в 2001 году, в 2008 нашел первую работу, а как разработчик стартовал в 2011.
      </p>

      <p>
        Если что-то не будет получаться — ничего страшного, пишите и спрашивайте в <a
        href="https://github.com/easy-deep-learning/learn-javascript/discussions">github.com/easy-deep-learning/learn-javascript/discussions</a>
      </p>

      <p>Удачи!</p>

    </article>
  )
}

export default LearnFrontend
