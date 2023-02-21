import styles from "./funcionario.module.css";

function Funcionario({ nome, foto, idade, profissao }) {
  return (
    <div className={styles.funcionarioconteiner}>
      <img src={foto} alt="imagem do funcionário " />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}
export default Funcionario;
