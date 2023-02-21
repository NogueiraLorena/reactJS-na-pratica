import Funcionario from "./components/funcs/funcionario";
import GoodMorning from "./components/phrases/goodMorning";
import "./index.css";

function sub(x, y) {
  return x - y;
}

// no arquivo App.js exist para que o HTML e o Javascrit possam ser usadas em um mesmo arquivo

function App() {
  const title = "Olá!";
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>&rarr;Estou praticando ReactJS. </h2>

      <img
        className="bread"
        alt="imagem de um pão"
        src="https://www.estadao.com.br/resizer/T8cVmJxj_W4h4aseDxoUESSBpXI=/0x900/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/BSRFGPQARVI7ZHFPKHOT4RBE54.jpg"
      />

      <p>Sub:{sub(7, 2)}</p>
      <GoodMorning />

      <GoodMorning />

      {/*os componentes devem ser reutilizaveis */}

      <Funcionario
        foto="https://cdn.masmovil.es/embed/84bdd452c3437e77d4304707ffb42c9c1616066753/soy-funcionario-puedo-trabajar-en-otra-cosa.jpg?imagick=1"
        nome="Carlos Magalhães"
        idade="35"
        profissao="Programador"
      />

      <Funcionario
        foto="https://lasoposiciones.net/wp-content/uploads/2018/09/derechos-de-los-funcionarios.jpg"
        nome="Flávio de Souza"
        idade="40"
        profissao="Médico"
      />

      <Funcionario
        foto="https://sampi.net.br/dir-arquivo-imagem/2022/10/86c1cfdb3b4c1d46bc659d2d7d3e1a01.jpg"
        nome="Sara Lima"
        idade="25"
        profissao="Engenheira Eletricista"
      />

      <p>Estou achando as coisas bem interessantes.</p>
    </div>
  );
}
export default App;
