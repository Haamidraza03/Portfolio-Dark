import React from 'react'

function AboutMe() {
    return (
        <>
            <div className="row" id="about">
                <div className="col-md-12 text-center my-1">
                    <h1 className="mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"><span className="text-info">About</span> Me</h1>
                </div>
            </div>

            <div className="row justify-content-evenly align-items-center mt-2 mb-4 mx-1 flex-wrap-reverse">

                <div className="col-md-6 bg-info py-3 rounded mx-1" data-aos="flip-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <div className="row justify-content-center my-2 mx-0">
                        <div className="col-md-10 bg-dark text-white px-2 rounded pt-2 my-2">
                            <h3><i className="bi bi-credit-card-2-front"></i> Full Stack Development</h3>
                            <p className="par p-2" style={{ fontSize: "18px" }}>Working with Full Stack technologies such as MongoDB, Express, React, Node, Java, Spring Boot, MySQL, Firebase. <br /> I take it as a challenge to successfully interact with backend and frontend when i dive into the world of developing full stack web applications, and the outcomes are very visually appealing with great Functionality.</p>
                        </div>
                        <div className="col-md-10 bg-dark text-white px-2 rounded pt-2 my-2">
                            <h3><i className="bi bi-credit-card-2-front"></i> Frontend Development</h3>
                            <p className="par p-2" style={{ fontSize: "18px" }}>Working with frontend technologies such as HTML, CSS, Javascript, Bootstrap, Git, ReactJS. <br /> I become very creative when i dive into the world of developing website and web applications, and the outcomes are very visually appealing with great User Interface.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 py-3">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">What<span className="me"> I'm able</span> to do?</h2>
                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-5">I can handle projects related to Full Stack and Frontend Development. If I talk about the complexity of the projects, they can range from easy to intermediate levels. </p>

                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-5">I have created some projects using technologies like HTML, CSS, JavaScript, Bootstrap, ReactJS, and the MERN stack. Additionally, I have worked with backend technologies such as Java, Spring Boot, MySQL, Hibernate, and JDBC, which has strengthened my understanding of server-side development.</p>
                    <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-5">Currently, I’m nourishing my skills further in Full Stack Development while expanding my expertise in modern frameworks to build more efficient and scalable web applications.</p>
                    <a href="#projects"><div className="btn btn-outline-info fs-5 mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Check my Projects</div></a>
                </div>
            </div>
        </>
    )
}

export default AboutMe