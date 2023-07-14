import Item from './Item'

interface itemProps {
  text: String
  status: 'todo' | 'doing' | 'done'
}

interface statusProps {
  title: string
  content: itemProps[]
}

function StatusSeparator({ title, content }: statusProps) {
  return (
    <div className="flex flex-col w-[350px]  mx-auto items-center bg-purple-300 p-4 rounded-xl">
      <h2 className="text-xl font-bold font-serif"> {title} </h2>
      <div className="flex flex-wrap justify-center gap-4"></div>
    </div>
  )
}

export default StatusSeparator
