import Frase from "./frase";

import styles from "./goodMorning.module.css";

function GoodMorning() {
  return (
    <div className={styles.goodMorninContent}>
      <Frase />

      <h3>Bom dia!/Good morning!</h3>
    </div>
  );
}
export default GoodMorning;
