import { useSelector } from "react-redux";

import { selectFavoriteCars } from '../../redux/cars/selectors';
import CatalogItem from "../CatalogItem/CatalogItem";

import { ContainerFavorites } from "./Favorites.styled";
import { Alert } from "antd";

const Favorites = () => {
    const favoriteCars = useSelector(selectFavoriteCars);

    return (
        <ContainerFavorites>
            {favoriteCars.length > 0 ? (
                favoriteCars.map(car => (
                    <CatalogItem key={car.id} car={car} />
                ))
            ) : (
                <Alert
                message="Sorry, no favorite cars !"
                description="Add the model you are interested in so you don't lose it."
                type="info"
                showIcon
                />
            )}
        </ContainerFavorites>
    );
}

export default Favorites;
