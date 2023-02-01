import '@/styles/globals.css'
import '@/container/About/About.scss'
import '@/container/Footer/Footer.scss'
import '@/container/Header/Header.scss'
import '@/container/Skill/Skill.scss'
import '@/container/Testimonial/Testimonial.scss'
import '@/container/Work/Work.scss'
import '@/components/Navbar/Navbar.scss'
import '@/App.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
