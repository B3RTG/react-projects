import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    { id: 1, name: "Miguel Angel", userName: "midudev", isFollowing: true},
    { id: 2, name: "Albert Garcia", userName: "6eRT", isFollowing: false},
    { id: 3, name: "Elon Musk", userName: "elonmusk", isFollowing: true}
]

export function App() {
    const formatUserName = (userName) => `@${userName}`


    // if you put a bolean variable withoun the value is the same that sent it with value true
    // isFollowing => isFollowing={true}
    return (
      <section className='App'> 
        {
            users.map(( {id, name, userName, isFollowing} ) => (
                <TwitterFollowCard 
                    key={id}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    formatUserName={formatUserName}>
                    {name}
                </TwitterFollowCard>                
            ))
        }
      </section>
    )
}

        /* <TwitterFollowCard 
            userName="midudev" 
            initialIsFollowing={false}
            formatUserName={formatUserName}>
                Miguel Angel
        </TwitterFollowCard>
        <TwitterFollowCard 
            userName="6eRT" 
            initialIsFollowing 
            formatUserName={formatUserName}>
            Albert Garcia
        </TwitterFollowCard>
        <TwitterFollowCard 
            userName="elonmusk" 
            initialIsFollowing={false} 
            formatUserName={formatUserName}>
            Elon Musk
        </TwitterFollowCard> */