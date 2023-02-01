export interface About {
  title: string;
  image: {
    url: string;
  };
  description: string;
}

export interface Work {
  title: string;
  image: {
    url: string;
  };
  description: string;
  projectLink: string
  codeLink: string
  tags: string
}

export interface Skills {
  name: string
  bgColor: string
  icon: {
    url: string
  }
} 

export interface Experiences{
  year: number
}

export interface WorkExperience{
  description: string
  name: string
  company: string
}

export interface Testimonial{
  name: string
  company: string
  image: {
    url: string
  }
  feedback: string
}

export interface Brand{
  name: string
  image:{
    url: string
  }
}

export interface ContactIput{
  username: string
  email: string
  message: string
}