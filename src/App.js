import codiLogo from './logo_codi_academy.png'

import './App.css';

function Header() {
  return (
    <header>
      <img src={codiLogo} className="codi-logo" alt="logo" />
    </header>
  )
}

function Footer() {
  return (
    <div className="buttons">
      <div className="quiz-progress">
        10%
      </div>
      <button>Próxima</button>
    </div>
  )
}

function QuestionPanel() {
  return (
    <div className="question-box codi-box-style">
      <div className="quiz-stats">
        <div className="quiz-number-questions">
          1/10
        </div>
      </div>
      <Question />
      <Footer />
    </div>

  )
}

function Question() {
  return (
    <div className="question">
      <h3>Pergunta 1:</h3>
      <h2>Qual é o animal do símbolo da linguagem GoLang?</h2>
      <ul className="question-answers">
        <li className="codi-box-style">Gato</li>
        <li className="codi-box-style">Cachorro</li>
        <li className="codi-box-style">Macaco</li>
        <li className="codi-box-style">Hamster</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className="quiz-window">
        <h1>Questionário de Tecnologia</h1>
        <QuestionPanel />
      </div>
    </>
  );
}

export default App;
