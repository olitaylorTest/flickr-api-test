import React, { useState, useEffect } from "react";
const styles = require("./index.module.scss");

export interface Props {
  onChange: (value: string) => void;
  onClear: () => void;
  onRandomSearch: () => void;
  word?: string;
}

const StreamFilter: React.FC<Props> = ({
  onChange,
  onClear,
  onRandomSearch,
  word = "",
}) => {
  const [search, setSearch] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const inputOnChange = (value: string): void => {
    setSearch(value);
  };

  useEffect(() => {
    if (word.length > 0) setSearch(word);
  }, [word]);

  const reset = (): void => {
    setSearch("");
    setHasSearched(false);
    onClear();
  };

  const submit = (search: string): void => {
    onChange(search);
    setHasSearched(true);
  };

  return (
    <div className={styles.streamFilter}>
      <label htmlFor="search-term">First Name</label>
      <input
        data-testid="streamInput"
        type="text"
        value={search}
        aria-label="Search term"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          inputOnChange(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.code === "Enter" && search.length > 0) {
            submit(search);
          }
        }}
        placeholder="search term"
      />
      <button
        aria-label="Search images"
        disabled={search.length < 2}
        onClick={() => submit(search)}
      >
        Search
      </button>
      <button aria-label="Random search" onClick={() => onRandomSearch()}>
        Random
      </button>
      <button
        aria-label="Reset search"
        disabled={!hasSearched && word.length === 0}
        className={styles.streamFilterClear}
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
};

export default StreamFilter;
