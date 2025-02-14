import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollorCard({ children, formatUserName, userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button' : 'tw-followCard-button is-following'
    const handleClick = () => setIsFollowing(!isFollowing)

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar" />
        <div className='tw-followCard-info'>
        <strong>{children}</strong>
        <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
        </header>

        <aside>
        <button className={buttonClassName} onClick={handleClick}>
            {text}
        </button>
        </aside>
    </article>
    )
}