const poll = ["React", "Vue", "Svelte"]
const votes = {
  React: 0,
  Vue: 0,
  Svelte: 0
}

export default function MiniPoll() {
  return (
    <div>
      {poll.map(el => <button className="b">{el}</button>)}
      <button className="show">showResults </button>
    </div>
  )
}
