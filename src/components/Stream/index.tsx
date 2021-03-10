import React, { useLayoutEffect, useEffect, useState } from "react";
import fetchPhotos, { Data } from "../../utils/fetchPhotos";
import fetchWord from "../../utils/fetchWord";

import StreamItem from "../StreamItem";
import StreamFilter from "../StreamFilter";

const styles = require("./index.module.scss");

const Stream: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<Data | undefined>(undefined);
  const [word, setWord] = useState<string>("");

  const hasData = data && data.items.length > 0;

  const search = (tag?: string, page: number = 1) => {
    setWord(tag || "");
    setLoaded(false);
    fetchPhotos.getPhotos(tag, page).then(
      (result) => {
        setLoaded(true);
        setData(result);
      },
      () => {
        setLoaded(true);
      }
    );
  };

  const randomSearch = () => {
    setLoaded(false);
    fetchWord.getWord().then((result) => {
      setWord(result.word);
      search(result.word);
    });
  };

  const tagSearch = (tag: string) => {
    setLoaded(false);
    setWord(tag);
    search(tag);
  };

  const clearSearch = () => {
    setWord("");
    search();
  };

  useLayoutEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);

  useEffect(() => {
    if (mounted) search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <div className={styles.stream}>
      <StreamFilter
        onClear={() => clearSearch()}
        onChange={(tag) => search(tag)}
        onRandomSearch={() => randomSearch()}
        word={word}
      />
      {!loaded && <div className={styles.streamStatus}>loading...</div>}
      {loaded && !hasData && (
        <div className={styles.streamStatus}>
          Sorry, no photos to show you. Please try another search.
        </div>
      )}
      <div className={styles.streamContainer}>
        {loaded &&
          hasData &&
          data?.items.map((image, index) => (
            <StreamItem
              {...image}
              key={index}
              onSearch={(tag) => tagSearch(tag)}
            />
          ))}
      </div>
    </div>
  );
};

export default Stream;
