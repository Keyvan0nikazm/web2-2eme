import UserCards from '../components/UserCards'

const users = [
  {
    name : "Alice",
    age : 25,
    online : true
  },
  {
    name : "Bob",
    age : 30,
    online : false
  },
  {
    name : "Charlie",
    age : 22,
    online : true
  }
]

function App() {
  return (
    <>
      <UserCards users={users} />
    </>
  )
}

export default App
