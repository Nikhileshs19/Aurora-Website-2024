import { Link } from 'react-router-dom'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'

export default function Footer() {
    return (
        <div className="bg-footer-texture bg-transparent h-screen bg-blend-darken bg-fixed bg-cover bg-bottom">
            <div>
                <div className="lg:pt-[20rem] pt-80">
                    <div className='text-center text-xl text-blue-600'><Link to='/developers' className='text-white'>Click to meet the Team!!!</Link></div>
                    <h4 className="text-white p-5 text-center">Contact Us:</h4>
                    <div className="flex relative lg:left-[45%] left-[29%] w-fit">
                        <button className="relative top-[0.3rem] p-1"><img src={instagram} alt="" /></button>
                        <button className="p-2"><img src={facebook} alt="" /></button>
                        <button className="p-2"><img src={linkedin} alt="" /></button>
                    </div>
                    <h4 className="text-center p-5 text-white">Copyright &copy; 2023 All Rights Reserved | Made by ISTE Manipal</h4>
                </div>
            </div>
        </div>
    )
}
