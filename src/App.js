import { useState, useEffect } from 'react';

import codiLogo from './logo_codi_academy.png'
import './App.css';

import { perguntas } from './perguntas'

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

function QuestionPanel(props) {
  const { perguntas } = props
  const numberQuestions = perguntas.length

  const [questionIdx, setQuestionIdx] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(perguntas[0])
  const [corretAnswers, setCorretAnswers] = useState(0)

  return (
    <div className="question-box codi-box-style">
      <div className="quiz-stats">
        <div className="quiz-number-questions">
          {questionIdx + 1} / {numberQuestions}
        </div>
      </div>
      <Question
        idx={questionIdx}
        enunciado={currentQuestion.enunciado}
        alternativas={currentQuestion.alternativas}
        resposta={currentQuestion.resposta}
        setCorretAnswers={setCorretAnswers}
      />
      <Footer
        numberQuestions={numberQuestions}
        questionIdx={questionIdx}
        setQuestionIdx={setQuestionIdx}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>

  )
}

function Question(props) {
  const {
    idx,
    enunciado,
    alternativas,
    resposta,
    setCorretAnswers
  } = props

  return (
    <div className="question">
      <h3>Pergunta {idx + 1}:</h3>
      <h2>{enunciado}</h2>
      <ul className="question-answers">
        {
          alternativas.map(
            alternativa => <li className="codi-box-style">{alternativa}</li>
          )
        }
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
        <QuestionPanel perguntas={perguntas} />
      </div>
    </>
  );
}

export default App;
