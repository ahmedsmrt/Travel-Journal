import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JournalPost from './components/JournalPost'
import data from './components/data'

function App() {

  const posts = data.map(el => {
    return (
      <JournalPost 
        key={el.id}
        {...el}
        />
    )
  })

  return (
    <main>
      <Header />
      <section className="journal-posts">
      {posts}
      </section>
    </main>
  )
}

export default App
