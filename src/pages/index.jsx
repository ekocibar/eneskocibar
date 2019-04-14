import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpeg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Enes Kocibar.
        </BigTitle>
        <Subtitle>I'm the king of the 7 kingdoms, and protector of the realm.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Starks"
            link="https://gameofthrones.fandom.com/wiki/House_Stark"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Rulers of the North from the castle of Winterfell.
          </ProjectCard>
          <ProjectCard
            title="Targaryens"
            link="https://gameofthrones.fandom.com/wiki/House_Targaryen"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Former royal house and rulers of the Crownlands from the castle of the Red Keep.
          </ProjectCard>
          <ProjectCard
            title="Baratheons"
            link="https://gameofthrones.fandom.com/wiki/House_Baratheon"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Rulers of the Crownlands and Stormlands from the Red Keep and Storm's End, respectively. 
          </ProjectCard>
          <ProjectCard
            title="Lannisters"
            link="https://gameofthrones.fandom.com/wiki/House_Lannister"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Rulers of the Westerlands from the castle of Casterly Rock.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Enes Kocibar" />
          <AboutSub>
          Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        SOME WORDS.. <br /><br />
        Sırt üstü gömülür insanlar Ama sen beni yüzüstü bıraktın. <br />
        Oyun bitti perde kapandı gerçek hayata hoş geldin.<br />
        Sustuğum yerde sen varsın. Konuştuğum yerde özlemin…<br />
        Seninde sevgin yalan, yalan dünya gibi sende yalansın.<br />
        İstersem çare, istemezsem bahane bulurum. Sen rahat ol!<br />
        Masal kitabı gibisin, okuması güzel ama inanması çok zor.<br />
        Ölürsem beni yarimin kalbine gömün. Mekanım cennet olsun.<br />
        Ve sonra anlıyorsun. Hiç kimsenin hiçbir şeye değmediğini…
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ekocibar@hotmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/eneskocibar/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/eneskocibar/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019{' '}
          <a href="https://github.com/pesh12/eneskocibar">Enes Kocibar</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
