import React, { useState } from "react";
import { Photo } from "../../utils/fetchPhotos";
const styles = require("./index.module.scss");

const StreamItem: React.FC<Photo & { onSearch: (tag: string) => void }> = ({
  title,
  link,
  author,
  author_id,
  description,
  tags,
  media: { m: image },
  onSearch,
}) => {
  const [seeDescription, setSeeDescription] = useState(false);
  const splitTags = tags.split(" ").filter(Boolean);
  let authorName = author.match(/\(([^)]+)\)/) ? author.match(/\(([^)]+)\)/)![1] : "";
  authorName = authorName.replace(/"/g, "");

  return (
    <div className={styles.streamItem} data-testid="streamItem">
      <img src={image} alt={title} />

      <div>
        <div className={styles.streamItemIntro}>
          <a className={styles.streamItemTitle} href={link}>{title}</a>
          <span>by</span>
          <a href={`https://www.flickr.com/photos/${author_id}`}>
            {authorName}
          </a>
        </div>

        <button
          className={styles.streamItemDescToggle}
          onClick={() => setSeeDescription(!seeDescription)}
        >
          {seeDescription ? "Close" : "View description"}
        </button>

        {seeDescription && (
          <div
            className={styles.streamItemDesc}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {splitTags.length > 0 && (
          <div className={styles.StreamItemTags}>
            <span>Tags:</span>
            {splitTags.map((tag, index) => (
              <button data-testid="searchTag" key={index} onClick={() => onSearch(tag)}>{tag}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamItem;
