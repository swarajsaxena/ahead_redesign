import Landing from '@/components/Landing'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <div className='flex flex-col p-4'>
      <Nav />
      <Landing />
    </div>
  )
}
