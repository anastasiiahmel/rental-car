import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/selectors';
import CatalogItem from "../CatalogItem/CatalogItem";
import { ContainerFavorites } from "./Favorites.styled";
import { Alert } from "antd";
import ModalCar from '../Catalog/Modal/Modal';


const Favorites = () => {
    
    const favoriteCars = useSelector(selectFavoriteCars);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const handleLearnMore = (car) => {
        setSelectedCar(car);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedCar(null);
    };

    return (
        <ContainerFavorites>
            {favoriteCars.length > 0 ? (
                favoriteCars.map(car => (
                    <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
                ))
            ) : (
                <Alert
                message="Sorry, no favorite cars!"
                description="Add the model you are interested in so you don't lose it."
                type="info"
                showIcon
            />

            )}
            {selectedCar && (
                <ModalCar
                    car={selectedCar}
                    onClose={handleCloseModal}
                    visible={modalVisible}
                />
            )}
        </ContainerFavorites>
    );
};

export default Favorites;
