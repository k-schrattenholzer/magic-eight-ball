import { useState } from 'react'
import './App.css'

function App() {
  const [outlook, setOutlook] = useState('')
  const [response, setResponse] = useState('')
  const responseArray = [
    {
      res: 'It is certain.',
      outlook: 'pos'
    },
    {
      res: 'It is decidedly so.',
      outlook: 'pos'
    },
    {
      res:  'Without a doubt.',
      outlook: 'pos'
    },
    {
      res: 'Yes definitely.',
      outlook: 'pos'
    },
    {
      res: 'You may rely on it.',
      outlook: 'pos'
    },
    {
      res: 'As I see it, yes.',
      outlook: 'pos'
    },
    {
      res: 'Most likely.',
      outlook: 'pos'
    },
    {
      res: 'Outlook good.',
      outlook: 'pos'
    },
    {
      res: 'Yes.',
      outlook: 'pos'
    },
    {
      res: 'Signs point to yes.',
      outlook: 'pos'
    },
    {
      res: 'Reply hazy, try again.',
      outlook: 'unknown'
    },
    {
      res: 'Ask again later.',
      outlook: 'unknown'
    },
    {
      res: 'Better not tell you now.',
      outlook: 'unknown'
    },
    {
      res: 'Cannot predict now.',
      outlook: 'unknown'
    },
    {
      res: 'Concentrate and ask again.',
      outlook: 'unknown'
    },
    {
      res: 'Don\'t count on it.',
      outlook: 'neg'
    },
    {
      res: 'My reply is no.',
      outlook: 'neg'
    },
    {
      res: 'My sources say no.',
      outlook: 'neg'
    },
    {
      res: 'Outlook not so good.',
      outlook: 'neg'
    },
    {
      res: 'Very doubtful.',
      outlook: 'neg'
    }
  ]
  const randomResponse = () => {
    const random = Math.floor(Math.random() * responseArray.length)
    setResponse(responseArray[random].res)
    setOutlook(responseArray[random].outlook)
  }
  return (
    <div className='home'>
      <h1>magic eight</h1>
      <div className="card">
        <button onClick={randomResponse}>
          shake me
        </button>
        
          { outlook ?? <p> looks: {outlook} </p>}
        { response ?? <p> {response} </p>}
      </div>
    </div>
  )
}

export default App
