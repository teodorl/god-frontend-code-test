import React from 'react';
import { useRouter } from 'next/router'
import { TopNav } from '../../components/TopNav';
import { Block, Flex, Text } from 'vcc-ui';

const Learn = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <TopNav />
            <Flex>
                <Flex extend={{ alignItems: 'center' }}>
                    <Text variant="ootah">Learn more about {id}</Text>
                    <Block extend={{ marginTop: 8 }}>
                        <Text>Stay tuned for more info</Text>
                    </Block>
                </Flex>
            </Flex>

        </>
    );
};

export default Learn;
