import { useState } from 'react';

/*
※ Practical Guidelines about state
- 추적해야하는 데이터가 있는 경우 (Vanilla JS 에서 let 에 해당하는 경우)
- 데이터가 동적으로 변화해야 하는 경우 (be dynamic)
- component가 표시되는 모습을 변화기키고 싶을 때 (주로 event handler function 이용)

- component를 만들 때, state의 변화를 반영한 모습을 상상해야 한다.
- 모든 변수에 state를 사용할 이유는 없다. 불필요하게 렌더링을 만들지 말자.
*/

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
  // const [test] = useState({ name: 'Jonas' });
  // const [test, setTest] = useState({ name: 'Jonas' });

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert('Previous');

    // 2. setStep 함수를 괄호 안에 정의
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // alert('Next');

    // 2. setStep 함수를 괄호 안에 정의
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // step = step + 1; 의 식으로 직접 정의할 경우, error 가 발생하지 않지만 작동이 정상적으로 이루어지지 않는다.
    // → React 는 해당 변수가 State 변수인지 알 수 없기 때문!

    // 1. React 에서 hook(useState) 사용 시
    // 2. function(setStep)을 정의해야 하며,
    // 이때 함께 제공된 변수(step)만을 사용 할 수 있다.

    // ※ BAD PRACTICE
    // test.name = 'Seoyeon';

    // ※ CORRECT WAY
    // setTest({ name: 'Seoyeon' });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
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
      )}
    </>
  );
}
