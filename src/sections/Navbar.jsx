import React,{ Fragment, useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import ToggleButton  from '../assets/styles/ToggleStyle/TogglerStyle';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Nabvar() {

    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };

    return (
        <Fragment>
           <ToggleButton>
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