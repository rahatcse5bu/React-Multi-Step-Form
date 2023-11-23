import React from 'react'
import ReactDOM from 'react-dom/client'
import FormWrapper from './components/FormWrapper'
import './index.css'
import PersonalDataProvider from './context/FormData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<PersonalDataProvider>
<FormWrapper/>
</PersonalDataProvider>
  </React.StrictMode>,
)
