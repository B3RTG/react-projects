///
/// Twitter follow card component
///
/// Props can be anything, could be functions too
/// children: default property that takes content of the object in the creation
//  username: we put a default vaule in case it don't come in the creation of the component
//
//  useState = hook
//  It gifs use funcionality to check the state
//
import { useState } from "react";

export function TwitterFollowCard( { children, userName='unknown', formatUserName, initialIsFollowing = false } ) {
    // the sentence abow is the same that this 3 lines
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    const [ isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // Content for the avatar from the username
    const imgSrc = `https://unavatar.io/${userName}`
    const formattedUserName = formatUserName(userName)

    const buttonText = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const followButtonClickHadler = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={imgSrc} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-info-account'>{formattedUserName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={followButtonClickHadler}>
                <span className="tw-followCard-button-text">{buttonText}</span>
                <span className="tw-followCard-button-unfollow">
                    Unfollow
                </span>
            </button>
        </aside>        
    </article>)
}