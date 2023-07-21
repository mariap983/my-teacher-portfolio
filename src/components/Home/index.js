import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle_M from '../../assets/images/logo-m.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass ] = useState('text-animate')
    
    const nameArray = ['а', 'р', 'и', 'я', ',']
    const jobArray = ['в', 'а', 'ш', 'и', 'я', 'т', ' ', 'I', 'T', ' ', 'у', 'ч', 'и', 'т', 'е', 'л', '.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>З</span>
                        <span className={letterClass}>д</span>
                        <span className={letterClass}>р</span>
                        <span className={letterClass}>а</span>
                        <span className={letterClass}>в</span>
                        <span className={letterClass}>е</span>
                        <span className={letterClass}>й</span>
                        <span className={`${letterClass} _12`}>!</span>
                        <br />
                        <span className={`${letterClass} _13`}>А</span>
                        <span className={`${letterClass} _14`}>з</span>
                        <span className={`${letterClass} _15`}></span>
                        <span className={`${letterClass} _16`}>с</span>
                        <span className={`${letterClass} _17`}>ъ</span>
                        <span className={`${letterClass} _18`}>м</span>
                        <img 
                            src={LogoTitle_M} 
                            alt="developer" 
                        />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} 
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={20}
                        />
                    </h1>
                    <h2>Софтуерен програмист | UX/UI дизайнер | Илюстратор</h2>
                    <Link to="/contact" className="flat-button">
                        СВЪРЖЕТЕ СЕ С МЕН
                    </Link>
                </div>
            </div>

            <Loader type="pacman" /> 
        </>
    )
}

export default Home