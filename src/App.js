import styles from "./styles/StyleMain.module.css"
import Main from "./components/Main";
import React from "react";

function App() {
  return (
      <div className={styles.backGr}>
          <h1 className={styles.title}> CV Generator App</h1>
          <Main />

      </div>
  );
}

export default App;
