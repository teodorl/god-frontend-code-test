import React from 'react';
import type { Car } from '../interfaces/car';
import { CarDetails } from '../components/CarDetails';
import { CarDetailsActionBar } from '../components/CarDetailsActionBar';
import { ProductCarousel } from '../components/ProductCarousel';
import { getCars } from '../helpers/api';
import { LoadingBar } from 'vcc-ui';

const Index = () => {
    const { data, error } = getCars();

    if (error) return <div>Failed to load cars</div>;
    if (!data) return <LoadingBar isLoading={true} />;

    const sliderItems = data.map((car: Car, index: number) => {
        return {
            id: index,
            renderItem: (
                <div>
                    <CarDetails {...car} />
                    <CarDetailsActionBar id={car.id} />
                </div>
            ),
        };
    });

    return <ProductCarousel items={sliderItems} />;
};

export default Index;
