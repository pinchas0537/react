import Header from './Header'
import Profile from './Profile'

export default function App() {
  return (
    <div className='grid w-[30vw] justify-self-center border rounded-[15px]'>
      <Header h1 = "My Profile Page"/>
      <Profile/>
    </div>
  )
}
