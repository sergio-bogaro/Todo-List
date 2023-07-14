interface itemProps {
  text: String
  id: number
  status: 'todo' | 'doing' | 'done'
  changeStatus: any
}

function Item({ text, status, id, changeStatus }: itemProps) {
  const statusColor =
    status === 'todo' ? 'text-black' : status === 'doing' ? 'text-green-400' : status === 'done' ? 'text-gray-300' : ''

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    changeStatus(e.target.value, id)
  }

  return (
    <div className="w-3/4 h-48 bg-purple-700 rounded-md p-2">
      <select onChange={(e) => handleStatusChange(e)} value={status} className={`bg-transparent ${statusColor}`}>
        <option className="text-gray-600" value="todo">
          Todo
        </option>
        <option className="text-green-600" value="doing">
          Doing
        </option>
        <option className="text-blue-600" value="done">
          Done
        </option>
      </select>
      <p>{text}</p>
    </div>
  )
}

export default Item
