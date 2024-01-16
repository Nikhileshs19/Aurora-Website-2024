import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'

export default function Footer() {
    return (
        <div className="bg-footer-texture h-screen bg-blend-darken bg-fixed bg-cover bg-bottom">
            <div className="lg:pt-0 pt-96">
                <h4 className="text-white p-5 text-center">Contact Us:</h4>
                <div className="flex relative lg:left-[45%] left-[29%]">
                    <button className="relative top-[0.3rem] p-1"><img src={instagram} alt="" /></button>
                    <button className="p-2"><img src={facebook} alt="" /></button>
                    <button className="p-2"><img src={linkedin} alt="" /></button>
                </div>
                <h4 className="text-center p-5 text-white">Copyright &copy; 2023 All Rights Reserved | Made by ISTE Manipal</h4>
            </div>
        </div>
    )
}
