// import React from 'react';
// import Select from 'react-select';
// import { useTheme } from '../Context/ThemeContext';
// import { themeOptions } from '../Utils/theme';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const Footer = () => {

//     const {setTheme, defaultTheme} = useTheme();

//     const handleThemeChange = (e)=>{
//         console.log(e.value);
//         setTheme(e.value);
//         localStorage.setItem('theme', JSON.stringify(e.value));
//     }


//   return (
//     const {setTheme, defaultTheme} = useTheme();

//     const handleThemeChange = (e)=>{
//         console.log(e.value);
//         setTheme(e.value);
//         localStorage.setItem('theme', JSON.stringify(e.value));
//     }


//   return (
//     <div className='footer'>

//       <div className="intructions">
//         <div className="hint">
//           press <kbd>TAB</kbd> to open commands
//         </div>
//       </div>

//       <div className="actual-footer">
//         <div className="links">
//           <a href='https://google.com'>
//           <GitHubIcon style={{marginRight:'4px'}}/>
//           </a>
            
//             <LinkedInIcon/>
//         </div>

//         <div className="themes">  
//           <Select
//                 options={themeOptions}
//                 onChange={handleThemeChange}
//                 menuPlacement='top'
//                 defaultValue={{value:defaultTheme, label: defaultTheme.label}}
//             />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
//     <div className='footer'>
//  <div className="instructions">
//         <div className="hint">
//           press <kbd>TAB</kbd> to open commands
//         </div>
//       </div>
//       <div className="links">
//         <a href='https://github.com/sumangourab' target={'blank'}>
//         <GitHubIcon style={{marginRight:'4px'}}/>
//         </a>
//         <a href='https://www.linkedin.com/in/suman-gourab-433b48236/' target={'blank'}>
//           <LinkedInIcon/>
//           </a>
//       </div>

//       <div className="themes">  
//         <Select
//               options={themeOptions}
//               onChange={handleThemeChange}
//               menuPlacement='top'
//               defaultValue={{value:defaultTheme, label: defaultTheme.label}}
//           />
//       </div>

        

//     </div>
//   )
// }

// export default Footer
import React from 'react';
import Select from 'react-select';
import { useTheme } from '../Context/ThemeContext';
import { themeOptions } from '../Utils/theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const {setTheme, defaultTheme} = useTheme();

    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }


  return (
    <div className='footer'>

      <div className="intructions">
        <div className="hint">
          press <kbd>TAB</kbd> to open commands
        </div>
      </div>

      <div className="actual-footer">
      <div className="links">
         <a href='https://github.com/sumangourab' target={'blank'}>
         <GitHubIcon style={{marginRight:'4px'}}/>
         </a>
         <a href='https://www.linkedin.com/in/suman-gourab-433b48236/' target={'blank'}>
           <LinkedInIcon/>
           </a>
      </div>

        <div className="themes">  
          <Select
                options={themeOptions}
                onChange={handleThemeChange}
                menuPlacement='top'
                defaultValue={{value:defaultTheme, label: defaultTheme.label}}
            />
        </div>
      </div>
    </div>
  )
}

export default Footer