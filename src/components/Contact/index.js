import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_r5y7dpc',
            'template_3k3gb1l',
            form.current,
            'tmHcKsD9plRPFeawi'
          )
          .then(
            () => {
              alert('Съобщението е изпратено успешно!')
              window.location.reload(false)
            },
            () => {
              alert('Нещо се обърка, моля, проверете и опитайте отново!')
            }
          )
      }
    
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['С', 'в', 'ъ', 'р', 'ж', 'е', 'т', 'е', ' ', 'с', 'е', ' ', 'с', ' ', 'м', 'е', 'н']}
                        idx={13}
                    /> 
                </h1>
                <p>
                    Като всеотдаен човек със страст към технологиите и образованието,
                    търся роля като преподавател по Информационни технологии, за да окажа положително
                    въздействие върху живота на учениците. Въпреки че моят професионален опит не включва
                    директно преподаване в областта, моята отдаденост и умения в различни ИТ области ме 
                    подготвиха за тази вълнуваща възможност. 
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Име" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Имейл" required />
                            </li>
                            <li>
                                <input placeholder="Тема" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Съобщение" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="ИЗПРАТИ" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                МАРИЯ ПЕТРОВА
                <br />
                <br />
                град София,
                <br />
                кв. "Гео Милев" <br />
                <span>maria.petrovaa983@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <iframe width="814" height="650" id="gmap_canvas" src="https://maps.google.com/maps?q=GeoMilev%20Sofia,%20Bulgaria&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        <Loader type="pacman" />
    </>)
}

export default Contact