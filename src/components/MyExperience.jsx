import React from 'react'
import Timeline from './Timeline';

function MyExperience() {

    const experiences = [
        {
            companyName: 'X-Biz TechVentures Private Limited',
            title: 'Python Developer Intern',
            description1: 'This was a three months paid on-site internship from 8th September to 8th December, where I was involved in multiple projects focusing on document processing, computer vision, and full-stack web development. My initial work centered on Optical Character Recognition (OCR) systems. I began with implementing and improving OCR accuracy using various engines like Paddle OCR and Surya OCR, followed by integrating document segmentation for Fintech documents. I enhanced the system with fuzzy matching (rapidfuzz) for better document recognition and added Aadhar card detection. I developed a Flask-based web application with a Bootstrap frontend for multi-file upload, implemented bounding box visualization for text detection, and worked on image preprocessing for handling rotated documents. I also learned basics of Docker, and I learned and implemented API security using Basic Auth and JWT through Postman with Flask API.',
            description2: "Concurrently, I worked on computer vision tasks including face liveness detection. This involved implementing blink detection, real vs. fake smile analysis, and motion detection using OpenCV's Haar Cascade and MediaPipe libraries. I also explored and implemented fake face detection by combining MediaPipe with YOLO object detection models, building a comprehensive pipeline to verify the presence of a live person.",
            description3: "I expanded into object detection and generative AI. I built and trained a custom YOLOv8 model from scratch to detect geometric shapes and signatures, complete with live webcam inference. Another major task was developing a screen detection model, which I tested and refined on a dataset of 669 images, achieving an accuracy of 93.91% and generating detailed Excel reports. Additionally, I explored Text-to-Speech (TTS) technologies, implementing and tuning models like gTTS, pyttsx3, and AI4Bharat's TTS to produce human-like speech, and experimented with offline systems like Tortoise-TTS.",
            description4: 'My work also involved backend infrastructure and modern frontend development. I learned and implemented microservices architecture using Docker Compose, establishing connections between services and a SQL Server database. I also dedicated significant time in learning the Next.js framework, progressing through its official learning modules to build foundational full-stack applications.',
            description5: 'Also because I had proven frontend experience, I was provided code with basic user interface and a live video capture application for close-face detection with a basic UI, which I modified to make it look professional with multiple device responsiveness, theme toggling, and blinking for better user experience.',
            description6: "In the final phase, I added backend database integration for storing results for the face detection. And also I implemented a Face Matching code with proper detection and percentage calculator which detected the uploaded and live face if its matching or not. Then I focused on advanced document analysis. I researched and implemented Table OCR using Paddle OCR's PP-StructureV3 to extract and reconstruct tabular data from images and PDFs. I built a comprehensive Flask API for this system with features like ZIP file processing, per-table Excel downloads, and page previews. Furthermore, I integrated Large Language Models by implementing Ollama, creating a workflow where extracted OCR text is processed by the model to generate structured key-value pairs, enhancing data extraction capabilities.",
            description7: 'Through this immersive experience, I successfully delivered multiple end-to-end projects, from conceptual research and model training to building scalable backend APIs and polished, user-friendly frontends. I demonstrated a strong ability to quickly adapt and contribute across a diverse technology stack—spanning computer vision, backend development, and frontend technologies. This internship provided me with substantial hands-on experience in solving real-world problems by integrating various AI/ML models into practical applications.',
            date: 'September 2025 - December 2025'
        },
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