import { useState } from 'react'
import Item from './components/Item'

interface itemProps {
  text: String
  status: 'todo' | 'doing' | 'done'
  id: number
}

function App() {
  const [text, setText] = useState('')
  const [itensList, setItensList] = useState<itemProps[]>([])

  const todoList = itensList.filter((item) => item.status == 'todo')
  const doingList = itensList.filter((item) => item.status == 'doing')
  const doneList = itensList.filter((item) => item.status == 'done')

  function handleItemStatusChange(status: 'todo' | 'doing' | 'done', id: number) {
    const updatedList = itensList.map((item) => {
      if (item.id != id) return item
      else {
        const a: itemProps = {
          text: item.text,
          status: status,
          id: item.id
        }
        return a
      }
    })

    setItensList(updatedList)
  }

  function handleItemTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function addItemToList(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const itemID = itensList.length + 1
    console.log(itemID)
    setItensList([...itensList, { text: text, status: 'todo', id: itemID }])
    setText('')
  }

  return (
    <div className="flex flex-col  h-screen">
      <div className="flex flex-col mx-auto mt-4 rounded-md text-center">
        <h1 className="text-2xl font-bold font-serif">Todo List</h1>
        <form onSubmit={(e) => addItemToList(e)}>
          <input className="bg-red-500" onChange={(e) => handleItemTextChange(e)} value={text} />
          <button>ADD</button>
        </form>
      </div>

      <div className="flex w-full h-full flex-col lg:flex-row justify-around gap-3 mt-5">
        <div className="flex flex-col w-4/5 lg:w-1/4  mx-auto items-center bg-purple-300 p-4 rounded-xl">
          <h2 className="text-xl font-bold font-serif"> Todo </h2>
          <div className="flex flex-wrap w-full justify-center gap-4">
            {todoList.map((card) => {
              return (
                <Item
                  key={card.text + String(card.id)}
                  text={card.text}
                  status={card.status}
                  id={card.id}
                  changeStatus={handleItemStatusChange}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col w-4/5 lg:w-1/4  mx-auto items-center bg-purple-300 p-4 rounded-xl">
          <h2 className="text-xl font-bold font-serif"> Doing </h2>
          <div className="flex flex-wrap w-full justify-center gap-4">
            {doingList.map((card) => {
              return (
                <Item
                  key={card.text + String(card.id)}
                  text={card.text}
                  status={card.status}
                  id={card.id}
                  changeStatus={handleItemStatusChange}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col w-4/5 lg:w-1/4  mx-auto items-center bg-purple-300 p-4 rounded-xl">
          <h2 className="text-xl font-bold font-serif"> Done </h2>
          <div className="flex flex-wrap w-full justify-center gap-4">
            {doneList.map((card) => {
              return (
                <Item
                  key={card.text + String(card.id)}
                  text={card.text}
                  status={card.status}
                  id={card.id}
                  changeStatus={handleItemStatusChange}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
