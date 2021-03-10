import { Photo } from "../../utils/fetchPhotos";

const defaultData: Photo & {onSearch: (tag: string) => void} = {
  title: "Photo",
  link: "/link",
  author: "nobody@flickr.com (\"vanhuy7nguyen7\")",
  author_id: "Oliver (\"Oliver\")",
  description: "",
  tags: "tag1 tag2 tag3",
  media: { m: "/image.png" },
  onSearch: (tag: string) => {}
};

export default defaultData;
