import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root w="100%" h="100%">
      <Skeleton aspectRatio={600 / 400} />
      <Card.Body>
        <SkeletonText noOfLines={3} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
