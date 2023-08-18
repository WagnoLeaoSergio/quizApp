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

function Footer(props) {
  const {
    numberQuestions,
    questionIdx,
    setQuestionIdx,
    setCurrentQuestion
  } = props

  const progressBarStyle = {
    width: "100%",
    height: 10,
    backgroundColor: "green"
  }
  const questionsArray = Array.from({ length: numberQuestions }, (_, index) => index + 1)

  console.log(questionsArray)

  return (
    <div className="buttons">
      <div className="quiz-progress">
        {
          questionsArray.map(p =>
            <div
              key={p}
              className="progressBar"
              style={{
                ...progressBarStyle,
                backgroundColor: p <= questionIdx ? "green" : "blue"
              }}
            />
          )
        }
      </div>
    </div>
  )
}

function QuestionPanel(props) {
  const { perguntas } = props
  const numberQuestions = perguntas.length

  const [questionIdx, setQuestionIdx] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(perguntas[0])
  const [corretAnswers, setCorretAnswers] = useState(0)

  useEffect(() => {
    setCurrentQuestion(perguntas[questionIdx])
  }, [questionIdx])

  if (questionIdx < numberQuestions) {
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
          setQuestionIdx={setQuestionIdx}
          corretAnswers={corretAnswers}
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
  else {
    return (
      <div className="question-box codi-box-style">
        <div className="quiz-stats">
        </div>
        <h1>
          Você terminou o quiz!
        </h1>
        <h2>
          Você acertou {(corretAnswers / numberQuestions) * 100}% das perguntas!
        </h2>
        <Footer
          numberQuestions={numberQuestions}
          questionIdx={questionIdx}
          setQuestionIdx={setQuestionIdx}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div>
    )
  }

}

function Question(props) {
  const {
    idx,
    enunciado,
    alternativas,
    resposta,
    corretAnswers,
    setCorretAnswers,
    setQuestionIdx
  } = props

  function clickAlternativa(answer) {
    if (answer == resposta) {
      setCorretAnswers(corretAnswers + 1)
    }
    setQuestionIdx(idx + 1)
  }

  return (
    <div className="question">
      <h3>Pergunta {idx + 1}:</h3>
      <h2>{enunciado}</h2>
      <ul className="question-answers">
        {
          alternativas.map(
            (alternativa, idx) => {
              return (
                <li
                  key={idx}
                  className="codi-box-style"
                  onClick={() => clickAlternativa(idx)}
                >
                  {alternativa}
                </li>
              )
            }
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
