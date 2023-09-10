import virus from "../assets/icons/virus.png"
function DetailsPage(){
    return(
        <div>
            <img src={virus} alt = "virus"  className="cursor-pointer rounded-full w-[20%] " />  
            <p>Details Page</p>
        </div>
    );
}

export default DetailsPage;