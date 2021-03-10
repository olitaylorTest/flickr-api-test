import React from "react";
import Stream from "./components/Stream";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Stream />
    </div>
  );
}

export default App;
