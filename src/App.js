import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  // 1. create state variable
  // useState 괄호 안의 인수는 default 값
  // useState 의 경우, default 값(step) 과 function (setStep) 으로 이루어짐
  // useState 와 같은 함수를 React 에서는 hook 이라고 한다. → useXXX 형태
  // function App 내부에서 사용 가능
  // ※ 단, if 문이나 내부 다른 function 안에서는 사용 불가.
  const [step, setStep] = useState(1);

  function handlePrevious() {
    // alert('Previous');

    // 2. setStep 함수를 괄호 안에 정의
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    // alert('Next');

    // 2. setStep 함수를 괄호 안에 정의
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handlePrevious}
          // onMouseEnter={() => alert('TEST')}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
