export interface Word {
  definition: string;
  word: string;
}

const fetchPhotos = {
  getWord(): Promise<Word> {
    return fetch(`https://random-words-api.vercel.app/word`).then(res => res.json()).then(res => res[0])
  },
};

export default fetchPhotos;
