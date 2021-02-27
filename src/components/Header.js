import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {

    const onClick = ()=>{
        console.log('clicked');
    }
    return (
        <>
          <header>
              <h1>Pubg Game Inforamtion -{props.title}</h1>
           
             <Button onClick={onClick} color="blue" text="Add"/>
           </header>  
        </>
    )
}
// Header.defaultProps = {
//     title:'Default title',
// }

Header.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Header
