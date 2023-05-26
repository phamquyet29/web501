import { contact } from "../components/contact";
import { home } from "../components/home";
import { nav } from "../components/nav";
import { project } from "../components/project";
import { skill } from "../components/skill";

const Homepage = () =>{
    return `
    ${nav()}
    ${home()}
    ${skill()}
    ${project()}
    ${contact()}
    `
}
export default Homepage;