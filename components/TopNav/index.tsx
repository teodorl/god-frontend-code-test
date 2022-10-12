import React from 'react';
import { useRouter } from 'next/router';
import { Flex, IconButton, Text } from 'vcc-ui';

export const TopNav: React.FC = () => {
    const router = useRouter();

    const navigateToProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/');
    };

    return (
        <Flex extend={{ flexDirection: 'row', margin: 16 }}>
            <Flex>
                <IconButton onClick={navigateToProducts} aria-label="Back to products overview" iconName="navigation-chevronback" />
            </Flex>
            <Flex>
                <Text variant="bates" extend={{ marginLeft: 10 }}>Back to products</Text>
            </Flex>
        </Flex>
    );
};
