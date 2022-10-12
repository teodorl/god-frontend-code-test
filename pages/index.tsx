import React, { useState } from 'react';
import type { Car } from '../interfaces/car';
import { CarDetails } from '../components/CarDetails';
import { CarDetailsActionBar } from '../components/CarDetailsActionBar';
import { ProductCarousel } from '../components/ProductCarousel';
import { FilterBar } from '../components/FilterBar';
import { getCars } from '../helpers/api';
import { LoadingBar, View } from 'vcc-ui';

const Index = () => {
    const { data, error } = getCars();
    const [activeFilter, setActiveFilter] = useState('');

    if (error) return <div>Failed to load cars</div>;
    if (!data) return <LoadingBar isLoading={true} />;

    const sliderItems = getFilteredItems(data, activeFilter)?.map((car: Car, index: number) => {
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
    const bodyTypes = [...new Set(data.map((car: Car) => car.bodyType))] as string[];
    bodyTypes.unshift('all');

    return (
        <>
            <FilterBar items={bodyTypes} onFilterChange={setActiveFilter}></FilterBar>
            <View extend={{ padding: 24 }}>
                <ProductCarousel items={sliderItems} />
            </View>
        </>
    )
};

const getFilteredItems = (items: Car[], activeFilter: string) => {
    if (!items) return [];
    if (activeFilter === '' || activeFilter === 'all') return items;

    return items.filter((item) => item.bodyType === activeFilter);
}

export default Index;
