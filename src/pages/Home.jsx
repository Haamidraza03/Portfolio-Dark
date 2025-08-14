import Navbar from '../components/Navbar';
import ParticleContainer from '../components/ParticleContainer';
import myimg from '../images/myimg.jpg';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import AboutMe from '../components/AboutMe';
import MySkills from '../components/MySkills';
import MyExperience from '../components/MyExperience';
import MyEducation from '../components/MyEducation';
import MyProjects from '../components/MyProjects';

function Home() {

    return (
        <>
            <Navbar />
            <div style={{ marginTop: "70px" }}>
                <div className="container-fluid">
                    <div className="row justify-content-evenly align-content-center" id="home">
                        <ParticleContainer />
                        <div className="col-md-4 justify-content-center">
                            <img src={myimg} alt="my pic" id='myimg' className="img-fluid mt-4 shadow rounded-circle justify-content-center" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out" />
                        </div>
                        <div className="col-md-5 text-white align-self-center">
                            <p className="mb-0 fs-5 text-info" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Heyy, I am</p>
                            <p className='fs-1 m-0' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Haamid Raza Kazi</p>
                            <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-4 m-0">A Computer Engineer and passionate Web Developer who works in technologies like HTML, CSS, JavaScript, Bootstrap, and MERN stack. Experienced in building responsive and user-friendly web applications.</p>
                            <a href="https://drive.google.com/file/d/1-shueaCT2um_pOdcZd_k1C6reQ775mri/view?usp=sharing" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-info fs-4 mt-2 px-3 rounded-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Check My Resume</button></a>
                        </div>
                    </div>

                    <ScrollToTopButton />

                    {/* about me start */}
                    <AboutMe />
                    {/* about end */}

                    {/* skills starts  */}
                    <MySkills />
                    {/* skills ends  */}

                    {/* my experience starts */}
                    <MyExperience />
                    {/* my experience ends  */}
                    
                    {/* my education starts */}
                    <MyEducation />
                    {/* my education ends */}

                    {/* my project start */}
                    <MyProjects />
                    {/* my project end */}

                    <div className="row justify-content-center bg-black text-center text-white py-3" data-bs-theme="dark">
                        <footer className="footer">
                            <div>
                                Copyright &#169; Portfolio 2025. All Right Reserved.
                            </div>
                            <div>
                                Made with <i className="bi bi-heart-fill"></i> by Haamid Raza Kazi.
                            </div>
                        </footer>
                    </div>
                    {/* end of container-fluid */}
                </div>

            </div>
        </>
    )
}

export default Home