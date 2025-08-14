import React,{useRef} from 'react'
import Navbarcon from '../components/Navbarcon';
import ParticleContainer from '../components/ParticleContainer';
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa6";

function Contact() {
  const nameInput=useRef(null);
    const emailInput=useRef(null);
    const query_desc=useRef(null);
    function ContactHandler()
    {
        const username=nameInput.current.value;
        const useremail=emailInput.current.value;
        const userquery=query_desc.current.value;

        let user={
            name:username,
            email:useremail,
            query:userquery,
        }

        if(username.length >1 && useremail.length >3 && userquery.length >1)
            {
                fetch('https://portfolio-a5c8d-default-rtdb.firebaseio.com/user.json',{
                method:'post',
                body:JSON.stringify(user)
                }).then(()=>
                {
                    alert("Thank you for Contacting.");
                    nameInput.current.value="";
                    emailInput.current.value="";
                    query_desc.current.value="";
                })
            }
        else{
          alert("Please fill all Details.")
        }
    }
  return (
    <div>
        <Navbarcon />
        <ParticleContainer/>
        <div style={{marginTop:"80px"}} id='contact'>
            <div className="container-fluid">
              <div className="row justify-content-center align-content-center">
                <div className="col-md-10 px-3 py-0 mapbox">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.635076673744!2d72.74292258049819!3d19.81306396135792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f5d686ce90d%3A0x1e1f1fc84f9a2ba6!2sTAPS%20Gate!5e0!3m2!1sen!2sin!4v1715281456465!5m2!1sen!2sin" title='TAPS Gate' style={{border:"0",filter:"grayscale(1) invert(1)",borderRadius:"25px",height:"500px",width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              
              <div className="row justify-content-center p-2 mt-2">
              <div className="row">
                <div className="col-md-12 text-center my-1">
                  <h1 className="" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Contact <span className="text-info">Me</span></h1>
                </div>
              </div>
                <center><div className="row col-md-10 p-2 m-2">
                  <form data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <input type="text" placeholder='Enter your Name' className='rounded-4 w-50 bg-body text-black fs-4 inp px-4 py-1 mb-3' id='inp' ref={nameInput}/>
                    <input type="email" placeholder='Enter you Mail' className='rounded-4 w-50 bg-body text-black fs-4 px-4 py-1 mb-3' id='inp' ref={emailInput}/><br />
                    <textarea placeholder='Enter Your Message' rows="4" className='w-100 rounded-4 bg-body text-black fs-4 px-4 py-1 mb-3' ref={query_desc}></textarea><br />
                    <button className='btn btn-outline-info fs-5 px-4 py-1' onClick={ContactHandler}>Send Message</button>
                    <div className="row justify-content-center mt-5">
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="mailto:haamidraza03@gmail.com" target='_blank' rel="noreferrer"><TfiEmail className='text-danger fs-1' title='E-Mail' /><div className='text-white'>E-Mail</div></a></div>
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="https://www.linkedin.com/in/haamid-raza-kazi" target='_blank' rel="noreferrer"><FaLinkedin className='text-info fs-1' title='LinkedIn' /><div className='text-white'>LinkedIn</div></a></div>
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="whatsapp://send?phone=+91 9422671453&text=Heyy,%20I%20just%20saw%20your%20Portfolio%20Dark !" target='_blank' rel="noreferrer"><FaWhatsapp className='text-success fs-1' title='WhatsApp' /><div className='text-white'>WhatsApp</div></a></div>
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="https://www.instagram.com/the_hrk_03" target='_blank' rel="noreferrer"><FaInstagram className='text-danger fs-1' title='Instagram' /><div className='text-white'>Instagram</div></a></div>
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="https://t.me/thehrk03" target='_blank' rel="noreferrer"><FaTelegram className='text-info fs-1' title='Telegram' /><div className='text-white'>Telegram</div></a></div>
                    <div className="col-md-2 text-center mb-5 rounded-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><a href="https://www.youtube.com/@haamidrazakazi7506" target='_blank' rel="noreferrer"><FaYoutube className='text-danger fs-1' title='YouTube' /><div className='text-white'>YouTube</div></a></div>
                    </div>
                  </form>
              </div></center>
              </div>
              <div className="row justify-content-center bg-black text-center text-white py-3" data-bs-theme="dark">
                <footer className="footer">
                  <div>
                    Copyright &#169; Portfolio 2024. All Right Reserved.
                  </div>
                  <div>
                    Made with <i className="bi bi-heart-fill"></i> by Haamid Raza Kazi.
                  </div>
                </footer>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact