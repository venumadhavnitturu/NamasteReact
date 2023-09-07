import { cardsList } from "../utils/mock-data"; 
import ResturantCard from "./ResturantCard";
const Body = () => (
    <div className="body">
        <div className="search"></div>
        <div className="cards-container">
            {cardsList.map(resturant => <ResturantCard key={resturant.id} resData={resturant}/> )}
        </div>
    </div>
);

export default Body;