import React from 'react'
import Timeline from './Timeline';

function MyExperience() {

    const experiences = [
        {
            companyName: 'Tax-O-Smart LLP',
            title: 'Java Developer (ReactJS)',
            description1: 'This was my first paid internship. I did this internship for one month where I contributed in converting an AngularJS application to a ReactJS application with great user interface and functionality, where I added dynamic featured components for better code reusability and maintainability.',
            description2: 'During this internship I learned how to debug using firefox developer tools, some git commands and logically using JavaScript to create dynamic and logical components.',
            description3: 'It was a great experience and exposure to real world company exxperience and work culture. I learned a lot from my mentor and the team, and it was a great start to my career as a developer.',
            date: 'June 2025'
        },
        {
            companyName: 'SDAC Infotech',
            title: 'Software Development Intern',
            description1: 'This was a three month onsite internship in which my team and I had to develop an real time project titled Import Export System, using Java Full Stack technologies like HTML, CSS, Bootstrap, J2SE, Servlet, JSP, MySQL and XML in Eclipse.',
            description2: 'During this internship i was very well trained first in the above mentioned technologies and other skills like understanding SRS, Problem Solving, Apache Server Configuration, Software development Life Cycle, Web Architecture, MVC2, etc.',
            description3: 'The whole three months were very much insightful, and helped me in understanding the real IT industry scenario and stress, what we have to go through as we have to deal with that while making the project. Overall it was a reality check and Amazing Experience.',
            date: 'December 2024 - February 2025'
        },
        {
            companyName: 'Ceres Canopus Pvt Ltd',
            title: 'Frontend Developer & Team Leader',
            description1: 'This was a one month online internship in which i had to develop an Online Code Editor while leading a team of three members, using frontend technologies like HTML, CSS, JavaScript and Bootstrap.',
            description2: 'My team and I created the Online Code Editor which was assigned us for the internship, it was a great learning, collaborating and developing Experience. And i hosted the project on Vercel so that everyone can see our exceptional work of the internship.',
            date: 'September 2024'
        },
        {
            companyName: 'CodeAlpha',
            title: 'Frontend Development Intern',
            description1: 'This was a three months online internship in which i had to complete total 3 tasks using the frontend languages like HTML, CSS, JavaScript and Bootstrap.',
            description2: 'I created all the 3 tasks which was assigned for the internship, it was a great learning and developing Experience. And i hosted all the tasks on Vercel so that everyone can see my exceptional work in the internship.',
            date: 'June 2024 - September 2024'
        },
        {
            companyName: 'Prodigy Info Tech',
            title: 'Frontend Development Intern',
            description1: 'This was a one month online internship in which i had to complete total 5 tasks using the frontend languages like HTML, CSS, JavaScript and i was given the liberty to choose any frameworks like Bootstrap, ReactJS etc.',
            description2: 'I created all the 5 tasks which was assigned for the internship, it was a great learning and developing Experience. And i hosted all the tasks on Vercel so that everyone can see my exceptional work in the internship.',
            date: 'April 2024 - May 2024'
        },
        {
            companyName: 'Nuclear Power Corporation of India Limited',
            title: 'Project Trainee',
            description1: 'This was a one month on-site internship in which i learned about Cybersecurity and Networking, also i was give a task to create a web page for their TMS Network Schema.',
            description2: 'It was a great Workplace Experience, i learned a lot from my mentors and understood the importance of networks, communication, cybersecurity and work culture.',
            date: 'June 2023'
        },
        {
            companyName: 'CodingWiz',
            title: 'Frontend Development Intern',
            description1: 'This was a one month online internship in which i had to develop two websites using the technologies HTML, CSS, JavaScript and Bootstrap.',
            description2: 'The two websites which i had to create were a tours and travel website and another was a gym website, which i developed very well with good user interface and functionality.',
            date: 'May 2023 - June 2023'
        }
    ];

    return (
        <>
            <div className="row" id="exp">
                <div className="col-md-12 text-center my-1">
                    <h1 className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"><span className="text-info">My </span>Experience</h1>
                </div>
            </div>

            <Timeline experiences={experiences} />
        </>
    )
}

export default MyExperience