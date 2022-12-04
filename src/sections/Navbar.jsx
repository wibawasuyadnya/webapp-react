import React,{ Fragment, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/theme';
import ToggleButton  from '../assets/styles/ToggleStyle/TogglerStyle';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useSound from 'use-sound';
import swtichSFX from '../sounds/switch.mp3';

function Nabvar() {

    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [isDarkMode, setDarkMode] = useState(false);

    const [play] = useSound(swtichSFX, {
        volume: 0.4,
        sprite: {
            switchON: [3100, 300],
            switchOFF: [4450, 200]
        }
    });

    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };

    return (
        <Fragment>
           <ToggleButton 
            onClick={() => themeName === "dark" ? play({id: 'switchOFF'}) : play({id: 'switchON'})}>
                <DarkModeSwitch 
                style={{
                    filter: 'drop-shadow(0px 1px 4px #FFFFFF)'
                }}
                 onClick={toggleTheme} 
                 checked={themeName === "dark" ? !isDarkMode : isDarkMode}
                 onChange={toggleDarkMode}
                 size={35}
                 moonColor='white'
                 sunColor='#f5c313'
                 />
            </ToggleButton> 
           
        </Fragment>
    )
}

export default Nabvar;