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
          Hello, <br /> This is Enes Kocibar.
        </BigTitle>
        <Subtitle>A Software Developer</Subtitle>
      </Hero>

      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Energiepartners"
            link="https://www.energiepartners.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A static NextJs project with a content management system
          </ProjectCard>
          <ProjectCard
            title="Energieplanner"
            link="https://www.energieplanner.nl/"
            bg="linear-gradient(to right, #0d6b13 0%, #80bfbd 100%)"
          >
            Backend: Django <br /> Frontend : React, AngularJs
          </ProjectCard>
          <ProjectCard
            title="EAGLE FENCE&DECK"
            link="https://www.eaglefencedeck.ca/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A NextJs project along with NetlifyCMS, Express [WIP]
          </ProjectCard>
          <ProjectCard
            title="Organik Lezzetler"
            link="https://www.organiklezzetler.org/"
            bg="linear-gradient(to right, #6e7513 0%, #f0ff26 100%)"
          >
            A React Project
          </ProjectCard>
          <ProjectCard
            title="Kerim Teknik"
            link="https://kerimteknik.netlify.app/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A Gatsby Project with NetlifyCMS
          </ProjectCard>
          <ProjectCard
            title="Hyfer Education"
            link="https://hyfer.herokuapp.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fullstack React project.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Enes Kocibar" />
          <AboutSub>Every single day should be better than the day before.</AboutSub>
        </AboutHero>
        <AboutDesc>
          I wrote my first codes more than 10 years ago in C, but I joined the club again 4 years back. I am a full
          stack developer motivated to achieve goals. I have over four years of experience with full-stack development
          and at this stage, I focus primarily on Django and React. Like empowering the stack, and invest my time on it.
          <br />
          <br />
          <span style={{ textDecoration: 'underline' }}>CURRENT STACK </span>
          <br /> Main Languages : Python, JavaScript
          <br /> Backend : Django, Flask, Express, Sitecore
          <br /> Frontend : React, Vue, AngularJs(1), Node, HTML5, CSS3
          <br /> Test - QA : Autofixture, Jest, Enzyme
          <br /> Design / Arch : OOP
          <br /> API's : Tastypie
          <br /> Methodologies : Agile w/ Scrum, TDD
          <br /> PM tools : Jira, Webex, Trello, Slack
          <br /> Business Platforms: CRMSuite, CMS
          <br /> Dev Tools : Docker, Postman, TravisCI, Octopus
          <br /> RDBMS : MySQL
          <br /> Cloud Platforms : GCP
          <br /> Version Control : Git, GitLab
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ekocibar@hotmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://linkedin.com/in/eneskocibar/" target="_blank" >LinkedIn</a> &{' '}
            <a href="https://github.com/ekocibar/" target="_blank" >GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2022 <a href="https://instagram.com/eneskocibar" target="_blank">Enes Kocibar</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
