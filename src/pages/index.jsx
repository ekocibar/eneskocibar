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
           Hello, <br/> This is Enes Kocibar.
        </BigTitle>
        <Subtitle>A Software Developer</Subtitle>
      </Hero>



      <Projects offset={1}>
        <Title>Some side Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="EAGLE FENCE&DECK"
            link="https://www.eaglefencedeck.ca/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A NextJs project along with NetlifyCMS, Express [WIP]
          </ProjectCard>
          <ProjectCard
            title="Organik Lezzetler"
            link="https://www.organiklezzetler.net/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
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
            title="Enes Kocibar"
            link="https://eneskocibar.nl"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            You are here now
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Enes Kocibar" />
          <AboutSub>
            A passionate lifetime learner.  
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        I wrote my first codes more than 10 years ago in C, but I joined the club again 3 years back. 
        Like empowering my stack, and invest my time on it. Everyday single day should be better than the day before...<br /><br />
        <span style={{textDecoration: 'underline'}}>CURRENT STACK </span><br/>
        Main Languages    :  Python, JavaScript<br />
        Backend           :  Django, Flask, Express<br />
        Frontend          :  React, AngularJs(1), Node, HTML5, CSS3<br />
        Test - QA         :  Autofixture, Jest, Enzyme <br />
        Design / Arch     :  OOP <br/>
        API's             :  Tastypie<br />
        Methodologies     :  Agile w/ Scrum, TDD <br />
        PM tools          :  Jira, Trello, Slack<br />
        Business Platforms:  CRMSuite, CMS<br />
        Dev Tools         :  Docker, Postman<br />
        RDBMS             :  MySQL<br />
        Cloud Platforms   :  gcloud <br/>
        Version Control   :  Git, GitLab

        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ekocibar@hotmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://linkedin.com/in/eneskocibar/">LinkedIn</a> &{' '}
            <a href="https://github.com/ekocibar/">GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2020{' '}
          <a href="https://instagram.com/eneskocibar">Enes Kocibar</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
