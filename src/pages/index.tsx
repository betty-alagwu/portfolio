import React from 'react'
import ReactDOM from 'react-dom'
import { gql } from 'graphql-request'
import 'react-tooltip/dist/react-tooltip.css'
import { About, Footer, Skill, Testimonial, Work, } from '@/container/'
import { Navbar } from '@/components/Navbar'
import { client } from 'Contentful/client'
import { Header } from '../container'
import { fetchAllCollection } from 'Contentful/graphql-client'
import {
  About as AboutInterface,
  Work as WorkInterface,
  Skills as SkillsInterface,
  Experiences as experiencesInterface,
  WorkExperience as WorkExperienceInterface,
  Testimonial as TestimonialInterface,
  Brand as BrandInterface,
  // ContactIput as ContactInterface
} from 'types/types'


export interface HomePageProps {
  aboutSectionResults: AboutInterface[]
  workSectionResults: WorkInterface[]
  skillsSectionResults: SkillsInterface[]
  experienceSectionResults: experiencesInterface[]
  workExperienceSectionResults: WorkExperienceInterface[]
  testimonialSectionResults: TestimonialInterface[]
  brandSectionResults: BrandInterface[]
  // contactSectionResults: ContactInterface[]
}

const HomePage = ({
  aboutSectionResults,
  workSectionResults,
  skillsSectionResults,
  experienceSectionResults,
  workExperienceSectionResults,
  testimonialSectionResults,
  brandSectionResults,
  // contactSectionResults
   }: HomePageProps) => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About data={aboutSectionResults} />
      <Work data={workSectionResults} />
      <Skill data={skillsSectionResults}
        experiences={experienceSectionResults}
        workExperience={workExperienceSectionResults}
      />
      <Testimonial data={testimonialSectionResults}
       brands={brandSectionResults} />
      <Footer  />
    </div>
  )
}



export async function getStaticProps() {
  const results = await fetchAllCollection();

  return {
    props: {
      aboutSectionResults: results.aboutCollection.items,
      workSectionResults: results.workCollection.items,
      skillsSectionResults: results.skillsCollection.items,
      experienceSectionResults: results.experiencesCollection.items,
      workExperienceSectionResults: results.workExperienceCollection.items,
      testimonialSectionResults: results.testimonialCollection.items,
      brandSectionResults: results.brandCollection.items,
      // contactSectionResults: results.contactCollection.items
    }
  }
}


export default HomePage
