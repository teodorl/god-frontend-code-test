import React from 'react';
import Link from 'next/link';
import { Link as VCCLink, Flex } from 'vcc-ui'; 

interface CarDetailsActionBarProps {
    id: string,
}

export const CarDetailsActionBar: React.FC<CarDetailsActionBarProps> = ({ id }) => {
    return (
        <Flex extend={{ flexDirection: 'row', gap: 18, justifyContent: 'center' }}>
            <Link href={`/learn/${encodeURIComponent(id)}`}>
                <VCCLink arrow="right">Learn</VCCLink>
            </Link>
            <Link href={`/shop/${encodeURIComponent(id)}`}>
                <VCCLink arrow="right">Shop</VCCLink>
            </Link>
        </Flex>
    );
};
