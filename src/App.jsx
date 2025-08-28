import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import NewsBoard from './components/News Board/NewsBoard'
import SignUp from './components/Sign Up/SignUp';

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
