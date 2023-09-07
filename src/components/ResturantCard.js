import { CARD_LOGO } from "../utils/constants";
const ResturantCard = ({resData}) => {
    const {name, cuisines, avgRating, locality, cloudinaryImageId} = resData.info;
    return(
        <div className="res-card">
        <img alt="CardLogo" src={CARD_LOGO+ cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{cuisines.join(',')}</h4>
        <div>{avgRating}</div>
        <div>{locality}</div>
    </div>
    );
};

export default ResturantCard;