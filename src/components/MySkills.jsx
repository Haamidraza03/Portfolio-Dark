import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import c from '../images/letter-c.png';
import cpp from '../images/c++.png';
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";

function MySkills() {
    return (
        <>
            <div className="row" id="skills">
                <div className="col-md-12 text-center my-1">
                    <h1 className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">My <span className="text-info">Skills</span></h1>
                </div>
            </div>

            <div className='row justify-content-evenly mb-3 py-2 px-2'>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out"><FaHtml5 className='text-danger fs-1' title='HTML' /><div className='fs-5'>HTML</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1300" data-aos-easing="ease-in-out"><FaCss3Alt className='text-info fs-1' title='CSS' /><div className='fs-5'>CSS</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out"><SiJavascript className='text-warning fs-1' title='JavaScript' /><div className='fs-5'>JavaScript</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1700" data-aos-easing="ease-in-out"><FaBootstrap style={{ color: "blueviolet" }} className='fs-1' title='Bootstrap' /><div className='fs-5'>Bootstrap</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaGitAlt className='fs-1' style={{ color: "orangered" }} title='Git' /><div className='fs-5'>Git</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaGithub className='text-secondary fs-1' title='Github' /><div className='fs-5'>Github</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaReact className='text-info fs-1' title='ReactJS' /><div className='fs-5'>ReactJS</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><DiNodejs className='text-success fs-1' title='NodeJS' /><div className='fs-5'>NodeJS</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2300" data-aos-easing="ease-in-out"><SiMongodb className='text-success fs-1' title='MongoDB' /><div className='fs-5'>MongoDB</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2900" data-aos-easing="ease-in-out"><SiFirebase className='text-warning fs-1' title='Firebase' /><div className='fs-5'>Firebase</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><img src={c} className='img-fluid' width={45} alt="C" title='C' /><div className='fs-5'>C</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><img src={cpp} className='img-fluid' width={45} alt="C++" title='C++' /><div className='fs-5'>C++</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><FaJava className='text-warning fs-1' title='Java' /><div className='fs-5'>Java</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><SiSpringboot className='text-success fs-1' title='Java' /><div className='fs-5'>Spring Boot</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2700" data-aos-easing="ease-in-out"><FaPython className='text-primary fs-1' title='Python' /><div className='fs-5'>Python</div></div>
                <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2900" data-aos-easing="ease-in-out"><GrMysql className='text-info fs-1' title='SQL' /><div className='fs-5'>MySQL</div></div>
            </div>
        </>
    )
}

export default MySkills