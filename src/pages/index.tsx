import {Hero} from "@src/component/Hero";
import { Projects } from "@src/component/Projects";
import { Expertise } from "@src/component/Expertise/Expertise";
import { Main } from "@src/component/Main";
import { Header } from "@src/component/Header";
import { Testimonials } from "@src/component/Testimonials";
import {Footer} from "@src/component/Footer";
import { Design } from "@src/component/Design";
import { Modal } from  "@src/component/Modal"

export default function IndexPage() {
    return (
        <>  
            <Header/>
            <Main>
                <Hero/>
                <Projects/>
                <Expertise/>
                <Design/>
                <Testimonials/>
            </Main>
            <Footer/>
            <Modal/>
        </>
    );
}