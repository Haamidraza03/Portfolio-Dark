import aecs from '../images/aecs.jpeg';
import sjcem from '../images/sjcem.jpg';

function MyEducation() {
    return (
        <>
            <div className="row" id="edu">
                <div className="col-md-12 text-center my-1">
                    <h1 className="mt-3" data-aos="slide-up" data-aos-duration="1000" data-aos-easing="ease-in-out">My <span className='text-info'>Education</span></h1>
                </div>
            </div>

            <div className="row justify-content-evenly mb-3 py-2 px-3">
                <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <img src={aecs} alt="aecs1" className="img-fluid rounded-5 p-2 pt-3" />
                    <div className="col-md-10"><h6>Atomic Energy Central School</h6><h6>SSC, CBSE Board</h6></div>
                    <div className="col-md-2"><h6>2019</h6><h6>75.8%</h6></div>
                </div>
                <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    <img src={aecs} alt="aejc1" className="img-fluid rounded-5 p-2 pt-3" />
                    <div className="col-md-10"><h6>Atomic Energy Junior College</h6><h6>HSC, Maharashtra Board</h6></div>
                    <div className="col-md-2"><h6>2021</h6><h6>85.5%</h6></div>
                </div>
                <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out">
                    <img src={sjcem} alt="sjcem" className="img-fluid rounded-5 p-2 pt-5 mt-4 mb-4" />
                    <div className="col-md-10 mt-4"><h6>St. John College of Engineering and Management</h6><h6>B.E., University of Mumbai</h6></div>
                    <div className="col-md-2 mt-4"><h6>2021-2025</h6><h6>8.08</h6></div>
                </div>
            </div>
        </>
    )
}

export default MyEducation