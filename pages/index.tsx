import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Skill, { Skills } from '../components/Skill/Skill'
import { Social } from '../components/Social/Social'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogdan Rudenko</title>
        <meta name="description" content="Genius NextJS app🌚" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__avatar} >
          <Image
            src='/avatar.jpg'
            alt="avatar"
            layout='fill'
          />
        </div>
        <h1 className={styles.main__title}>Bogdan Rudenko</h1>
        <h2 className={styles.main__subtitle}>Frontend Developer</h2>
        <div className={styles.main__cvlinks}>
          Download my CV in{' '}
          <Link href='/CV.pdf'>RU</Link>
          {' '}|{' '}
          <Link href='#'>EN</Link>
        </div>
        <div className={styles.main__skills}>
          <Skill name={Skills.TYPESCRIPT} />
          <Skill name={Skills.REACT} />
          <Skill name={Skills.SASS} />
          <Skill name={Skills.GRAPHQL} />
          <Skill name={Skills.APOLLO} />
          <Skill name={Skills.DOCKER} />
          <Skill name={Skills.NODEJS} />
        </div>
        <div className={styles.main__socialList}>
          <Social
            to='https://gitlab.com/roodan'
          >
            <div className={styles.main__social}>Gitlab</div>
          </Social>
          <Social
            to='https://github.com/r00dan'
          >
            <div className={styles.main__social}>Github</div>
          </Social>
          <Social
            to='https://hh.ru/resume/dc8bc19aff0245db4f0039ed1f633854625376'
          >
            <div className={styles.main__social}>HH</div>
          </Social>
          <Social
            to='https://career.habr.com/m74g'
          >
            <div className={styles.main__social}>Career.Habr</div>
          </Social>
          <Social
            to='https://geekjob.ru/gXHC'
          >
            <div className={styles.main__social}>GeekJob</div>
          </Social>
          <Social
            to='https://www.linkedin.com/in/bogdan-rudenko-143698108/'
          >
            <div className={styles.main__social}>LinkedIn</div>
          </Social>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
