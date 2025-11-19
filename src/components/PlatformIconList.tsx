import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { ParentPlatform } from "@/model/Platform";
import type { IconType } from "react-icons";

interface Props {
  parentPlatforms?: ParentPlatform[];
}

const PlatformIconList = ({ parentPlatforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
  };

  return (
    <HStack marginY={1}>
      {parentPlatforms.map((parentPlatform) => (
        <Icon
          key={parentPlatform.id}
          as={iconMap[parentPlatform.slug] ?? BsQuestionCircle}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
