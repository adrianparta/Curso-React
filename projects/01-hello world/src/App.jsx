import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'

export function App(){
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollorCard formatUserName={formatUserName} name={'midudev'} userName={'midudev'} initialIsFollowing>
        Midudev
      </TwitterFollorCard>
      <TwitterFollorCard formatUserName={formatUserName} name={'partarrieuadrian'} userName={'apartarrieu'}>
        Adrián Partarrieu
      </TwitterFollorCard>
    </section>
  )
}