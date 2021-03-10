import fetch from "fetch-jsonp";

export interface Data {
  title: string;
  link: string;
  description: string;
  items: Photo[];
}

export interface Photo {
  title: string;
  link: string;
  media: { m: string };
  description: string;
  author: string;
  author_id: string;
  tags: string;
}

const fetchPhotos = {
  getPhotos(tag?: string, page?: number): Promise<Data> {
    return fetch(
      `https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=&format=json&safe_search=1&tags=${tag}`,
      { jsonpCallbackFunction: "jsonFlickrFeed" }
    ).then((res) => res.json());
  },
};

export default fetchPhotos;
