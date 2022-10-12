import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { Flex, Icon, View } from 'vcc-ui';

interface ProductCarouselProps {
    items: any,
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ items }) => {
    const [activeItem, setActiveItem] = useState(0);
    const { carouselFragment, useListenToCustomEvent, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        gutter: 24,
        items,
        itemsPerSlide: 4,
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setActiveItem(parseInt(event?.nextItem?.id));
        }
    });

    return (
        <>
            {carouselFragment}
            <View display={{
                untilL: 'none',
            }}>
                <Flex>
                    <Flex extend={{ flexDirection: 'row', justifyContent: 'right' }}>
                        <div style={styles.arrow} onClick={slideToPrevItem}><Icon type="mediacircled-previous-40" /></div>
                        <div style={styles.arrow} onClick={slideToNextItem}><Icon type="mediacircled-next-40" /></div>
                    </Flex>
                </Flex>
            </View>

            <View display={{
                fromL: 'none',
            }}>
                <Flex extend={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {items.map((item: string, index: number) =>
                        <div key={index} style={{
                            ...styles.dot,
                            ...(index === activeItem && { backgroundColor: '#141414' })
                        }} />
                    )}
                </Flex>
            </View>
        </>
    )
};

const styles = {
    arrow: {
        cursor: 'pointer',
    },
    dot: {
        height: '8px',
        width: '8px',
        backgroundColor: '#ebebeb',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '4px',
    },
};
