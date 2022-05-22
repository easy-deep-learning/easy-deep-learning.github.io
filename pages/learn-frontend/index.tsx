import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'antd';
const { Content } = Layout;
import { Typography, Divider } from 'antd';
import { Row, Col } from 'antd';

const { Paragraph } = Typography;

const LearnFrontend: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learn Frontend</title>
      </Head>
      <Row>
        <Col span="4"/>
        <Col span="18">
          <Content>

            <h2>Привет!</h2>

            <Paragraph>
              Вы наверное видели успевший стать знаменитым твит: <br/><br/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://twitter.com/alexbaumgertner/status/1527602497782788096">
                <img src="./images/twit_alexbaumgertner_1_49pm_May_20_2022.png" width="500px" alt="twit alexbaumgertner from 1.49pm May 20 2022" />
              </a>
            </Paragraph>

            <Paragraph>
              Многие откликнулось и я заметил, что есть два типа запросов:
            </Paragraph>

            <h3>
              1. Я раньше не работал(-а) с HTML/CSS/JS, но хочу научиться
            </h3>

            <Paragraph>— вам я рекомендую посмотреть и пройти два очень хороших вводных бесплатных курса:</Paragraph>

            <ul>
              <li>
                <strong>HTML/CSS верстка</strong>: <a href="https://htmlacademy.ru/courses/intro-to-web-development">https://htmlacademy.ru/courses/intro-to-web-development</a>
              </li>
              <li>
                <strong>JS: <a href="https://ru.hexlet.io/courses/introduction_to_programming">https://ru.hexlet.io/courses/introduction_to_programming</a></strong>
              </li>
            </ul>

            <h3>
              2. Я немного знаю  HTML/CSS/JS, хочу развиваться дальше
            </h3>

            <Paragraph>
              Попробуйте пройти <a href="https://nextjs.org/learn/foundations/about-nextjs">курс по NextJS</a>.
              Это отличный фреймворк для создания веб-сайтов на React.
            </Paragraph>

            <Paragraph>Страничка, которую вы сейчас читаете — <a href="https://github.com/easy-deep-learning/easy-deep-learning.github.io">сделана на NextJS</a>.</Paragraph>

            <Divider/>

            <h3>И первым и вторым самое главное — нужно придумать свой проект</h3>

            <Paragraph>Свой проект — главный мотиватор и необходимое условие успеха.</Paragraph>

            <Paragraph>
              По проекту:
              придумайте что-то, важное для вас, это может быть
            </Paragraph>

            <ul>
              <li>система учета финансов</li>
              <li>система учета еды, тренировок</li>
              <li>сайт благотворительной организации</li>
              <li>обучающая платформа по английскому/немецкому/турецкому/итд языку</li>
              <li>любой веб-сайт, о котором вы мечтали</li>
            </ul>


            <h3>У меня есть идея проекта, что дальше?</h3>

            <ul>
              <li>Создайте на github репозиторий, добавьте меня (alexbaumgertner) в collaborators</li>
              <li>
                создайте issue с описанием проекта, вашими текущими знаниями HTML/CSS/JS, программами проектирования сайтов типа https://www.figma.com/ и начнем работать :)
              </li>
            </ul>


            <Paragraph>Как работать с github</Paragraph>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=9dkzbSnN2FQ">https://www.youtube.com/watch?v=9dkzbSnN2FQ (RU)</a></li>
              <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk&t=426s">https://www.youtube.com/watch?v=RGOj5yH7evk&t=426s (EN)</a></li>
            </ul>

            <Paragraph>
              Не бойтесь!
              Абсолютно у всех будут проблемы и вопросы.
              Я первый раз начал изучать HTML в 2001 году, в 2008 нашел первую работу, а как разработчик стартовал в 2011.
            </Paragraph>

            <Paragraph>
              Если что-то не будет получаться — ничего страшного, пишите и спрашивайте в <a
              href="https://github.com/easy-deep-learning/learn-javascript/discussions">github.com/easy-deep-learning/learn-javascript/discussions</a>
            </Paragraph>

            <Paragraph>Удачи!</Paragraph>

          </Content>
        </Col>
      </Row>
    </>
  )
}

export default LearnFrontend
