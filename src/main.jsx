import React, { Suspense, lazy} from "react";
import Loading from "./components/Loading";
import ReactDOM from 'react-dom/client'
// import App from './App'
const App = lazy(() => import('./App'));

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Suspense fallback={<Loading init={true} />}> */}
      <App />
     {/* </Suspense> */}
  </React.StrictMode>
)
