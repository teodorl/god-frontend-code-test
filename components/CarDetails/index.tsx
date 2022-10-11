import React from "react";
import { Flex, Text } from 'vcc-ui';
import type { Car } from '../../interfaces/car';
import Image from 'next/image';

export const CarDetails: React.FC<Car> = ({
  bodyType,
  imageUrl,
  modelName,
  modelType,
}) => {
  return (
    <>
      <Flex>
        <Flex>
          <Text variant="bates" subStyle="emphasis" extend={{ color: '#707070', textTransform: 'uppercase' }}>{bodyType}</Text>
        </Flex>
        <Flex extend={{ fromL: { flexDirection: 'row' }}}>
          <Text variant="columbus" subStyle="emphasis" extend={{ marginRight: 5 }}>{modelName}</Text>
          <Text variant="columbus" extend={{ color: '#707070' }}>{modelType}</Text>
        </Flex>
      </Flex>
      <div>
        <Image
          src={imageUrl}
          height={300}
          width={400}
          alt={`Image of the ${modelName} model`}
        />
      </div>
    </>
  );
};
