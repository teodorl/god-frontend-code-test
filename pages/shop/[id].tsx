import React from 'react';
import { useRouter } from 'next/router'
import { Block, Flex, Text } from 'vcc-ui';
import { TopNav } from '../../components/TopNav';

const Shop = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <TopNav />
            <Flex>
                <Flex extend={{ alignItems: 'center' }}>
                    <Text variant="ootah">Buy a {id}</Text>
                    <Block extend={{ marginTop: 8 }}>
                        <Text>Stay tuned for more info</Text>
                    </Block>
                </Flex>
            </Flex>
        </>
    );
};

export default Shop;
