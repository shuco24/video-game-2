import useParentPlatforms from "@/hooks/useParentPlatforms";
import type { ParentPlatform } from "@/model";
import { Button, Menu, Portal, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: ParentPlatform | null;
  onSelect: (parentPlatform: ParentPlatform) => void;
}

function PlatformSelector({ selectedPlatform, onSelect }: Props) {
  const { data: parentPlatforms, error } = useParentPlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
          <Icon as={BsChevronDown} boxSize={2} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {parentPlatforms?.map((parentPlatform) => (
              <Menu.Item
                key={parentPlatform.id}
                onClick={() => onSelect(parentPlatform)}
                value={String(parentPlatform.id)}
                cursor="pointer"
              >
                {parentPlatform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
