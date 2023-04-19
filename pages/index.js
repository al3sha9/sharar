import { Footer } from "@/components/footer";
import { Feature } from "@/components/goals";
import HEADER from "@/components/header";
import { Content } from "@/components/projects";
import { Team } from "@/components/team";




export default function Home() {
  return (
    <>
    <HEADER />
    <Feature />
    <Content />
    <Team />
    <Footer />
    </>
  )
}
