import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/midudev" />
                <div className='tw-followCard-info'>
                    <strong>Miguel Duran</strong>
                    <span className='tw-followCard-info-account'>@midudev</span>
                </div>
            </header>
            <button className='tw-followCard-button'>Follow</button>
        </article>
    )
}