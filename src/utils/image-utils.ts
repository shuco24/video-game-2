import noImage from "@/assets/no-image-placeholder.webp";
import { GAME_IMAGE_SIZE } from "@/constants/gameCard";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return (
    url.slice(0, index) +
    `crop/${GAME_IMAGE_SIZE.width}/${GAME_IMAGE_SIZE.height}/` +
    url.slice(index)
  );
};

export default getCroppedImageUrl;
