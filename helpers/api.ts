import useSWR from 'swr';

export const getCars = () => {
    return useSWR('/api/cars.json', (apiURL: string) => fetch(apiURL).then(res => res.json())); 
};
