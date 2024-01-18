import meetjr from "../images/MeettheTeam.svg"
import meetsr from "../images/Meettheheads.svg"
import mugi from "../images/mugi.jpg"
import linkedin from '../images/bi_linkedin.svg'
import gitlogo from '../images/github_logo.svg'
import Nav from "../components/Nav"


const Kiri = {
    name : "Prabhav Agarwal",
    git_link : "https://github.com/Kirit0me",
    linkedin : "https://www.linkedin.com/in/prabhav-agarwal-a7186aa0/",
    img : mugi
}

const Juniors = [Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri]
const Seniors = [Kiri, Kiri, Kiri]

function JuniorCard( {member} ) {
    return (
        <div className="w-2/3 p-6 m-auto">
            <div className="flex flex-col align-middle rounded-3xl border-1 border-white bg-gradient-to-r from-slate-700 to-black text-white p-6">
                <div className="p-4"><img className="rounded-full w-24 h-24 m-auto" src={member.img}></img></div>
                <h1 className="text-center text-2xl font-bold py-4">{member.name}</h1>
                <div className="rounded-3xl border-white border-2 p-2">
                    <h1 className="text-center text-xl px-4"> Junior Designer </h1>
                </div>
                <div className="flex flex-row justify-center">
                    <a href ={member.linkedin}><button className="p-2"><img src={linkedin} alt="" /></button></a>
                    <a href ={member.git_link}><button className="p-2"><img src={gitlogo} alt="" /></button></a>
                </div>
            </div>
        </div>
    )
}

function SeniorCard( {member} ) {
    return (
        <div className="w-2/3 p-6 m-auto">
            <div className="flex flex-col rounded-3xl border-1 border-white bg-gradient-to-r from-slate-700 to-black text-white p-6">
                <div className="p-4"><img className="rounded-full w-24 h-24 m-auto" src={member.img}></img></div>
                <h1 className="text-center text-2xl font-bold py-4">{member.name}</h1>
                <div className="rounded-3xl border-white border-2 p-2">
                    <h1 className="text-center text-xl px-4"> Senior Designer </h1>
                </div>
                <div className="flex flex-row justify-center">
                    <a href ={member.linkedin}><button className="p-2"><img src={linkedin} alt="" /></button></a>
                    <a href ={member.git_link}><button className="p-2"><img src={gitlogo} alt="" /></button></a>
                </div>
            </div>
        </div>
    )
}

export default function Developers() {
    return (
        <>
        <Nav />
        <div className="bg-black pt-16">
            <div className="p-10"><img src={meetjr} className="m-auto"></img></div>
            <div className="grid grid-cols-3 p-6">
            {Juniors.map((member) => (
                <JuniorCard key={member.id} member={member} />
            ))}
            </div>
            <div className="p-10"><img src={meetsr} className="m-auto"></img></div>
            <div className="grid grid-cols-3 p-6">
            {Seniors.map((member) => (
                <SeniorCard key={member.id} member={member} />
            ))}
            </div>
        </div>
        </>
    )
}