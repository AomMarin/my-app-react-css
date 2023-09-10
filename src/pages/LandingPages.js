import virus from "../assets/icons/virus.png"
import { useNavigate } from "react-router-dom";
function LandingPage () {
    const navigate = useNavigate();
    const handleTodetail=()=>{navigate("/details")};
    return (
        <div className="text-center">
            <p class="text-5xl  font-bold uppercase text-pink-950  mx-36 italic ...">About Me</p>
            <div className=" flex justify-center ">
            <img src={virus} alt = "virus"  className="cursor-pointer rounded-full w-[20%] " />
            </div>
            <p class="text-md mt-2  font-bold uppercase text-white mx-36">ontrary to popular belief, Lorem Ipsum is not simply random text. <br/>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.<br/>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
            {"\n"}
            <button className="text text-neutral-950 underline  " onClick={()=>handleTodetail()}> NEXT </button>
        </div>

    );
}

export default LandingPage;