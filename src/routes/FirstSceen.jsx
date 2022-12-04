import AnimatedText from 'react-animated-text-content';
import './first-style.less';
const FirstSceen = () => {
    return <div className="first-container">
            <div className="first-sceen">
            <div className='first-txt'>
                <AnimatedText
            type="words" // animate words or chars
            animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
            }}
            animationType="wave"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
        >
            Hello, my name is
                </AnimatedText>
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                    }}
                    animationType="wave"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph name"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    Jun Xie
                </AnimatedText>
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                    }}
                    animationType="wave"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    A Fullstack Developer with an eye for design and a frontend bias.
                </AnimatedText>
            </div>
            <div className='first-img'>
                <img src={'./dev.png'} />
            </div>
        </div>
        <div className='click-area'>
            <div className='clik-size get-email'>Find Me</div>
            <div className='clik-size get-resume'>Get Resume</div>
        </div>
    </div>
}

export default FirstSceen