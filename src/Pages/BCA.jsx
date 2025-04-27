import SearchBar from "../components/SearchBar"
import { Link } from "react-router"
import RectangleCard from "../components/RectangleCard"

function BCA(){
    return(

        <>
       
        <div className="pt-10">
            <SearchBar/>
        </div>
        <div className="semCards ">

        <Link to={'SemOne'} className="card" >
          <RectangleCard name="Sem-I" />
        </Link>
        
        <Link to={'SemTwo'} >
          <RectangleCard name="Sem-II" />
        </Link>
        <Link to={'SemThree'} >
          <RectangleCard name="Sem-III" />
        </Link>
        <Link to={'SemFour'} >
          <RectangleCard name="Sem-IV" />
        </Link>
        <Link to={'SemFive'} >
          <RectangleCard name="Sem-V" />
        </Link>
        <Link to={'SemSix'} >
          <RectangleCard name="Sem-VI" />
        </Link>
        </div>
        </>
    )
}

export default BCA