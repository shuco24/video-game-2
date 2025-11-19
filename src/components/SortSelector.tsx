import { sortOrders, type sortOrderKeys } from "@/store/GameQuery";
import { Button, Menu, Portal, Icon, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: sortOrderKeys | null;
  onSelect: (sortOrder: sortOrderKeys) => void;
}

function SortSelector({ selectedSortOrder, onSelect }: Props) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Order by:{" "}
          <Text fontWeight="bold">
            {selectedSortOrder ? sortOrders[selectedSortOrder] : "Relevance"}
          </Text>
          <Icon as={BsChevronDown} boxSize={2} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {Object.entries(sortOrders).map(([id, text]) => (
              <Menu.Item
                key={id}
                value={id}
                cursor="pointer"
                onClick={() => onSelect(id as sortOrderKeys)}
              >
                {text}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
