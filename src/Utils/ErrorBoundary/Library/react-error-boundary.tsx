import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import TestUI from '../../../Views/test';

// function MyFallbackComponent({error, resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

// export default function App() {
//     const [state, setState] = React.useState(false)
//   return (
//     <ErrorBoundary 
//        FallbackComponent={MyFallbackComponent}
//        onError={(error, errorInfo) => console.log({ error, errorInfo })}
//        onReset={() => {
//          // reset the state of your app
//          setState(true);
//        }}
//     >
//        <TestUI />
//     </ErrorBoundary>
//   );
// }


function ErrorFallback({error, resetErrorBoundary}: {error: any, resetErrorBoundary: any}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  
  function Bomb() {
    return new Error('💥 CABOOM 💥')
  }
  
  export default function ReactErrorUI() {
    const [explode, setExplode] = React.useState(false)
    return (
      <div>
        <button onClick={() => setExplode(e => !e)}>toggle explode</button>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
         <> {explode ? Bomb() : null} <TestUI /></> 
        </ErrorBoundary>
      </div>
    )
  }