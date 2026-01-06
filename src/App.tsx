// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App