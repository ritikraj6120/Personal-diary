import React, { useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../context/notes/userContext';
// const HoverText = () => {
// 	// const { UserDetail , getUser } =useContext(UserContext);
// 	return (
// 		<div>
// 			Hovering right meow!
// 			<span role="img" aria-label="cat">
// 				🐱
// 			</span>
// 		</div>
// 	);
// };

const UserNavbar = () => {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<Link to="/userdetail">
			<span style={{ color: "white", fontSize: "1.5rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				
				<i className="far fa-user mx-4"></i>
				{/* {isHovering && <HoverText />} */}
			</span>
			
			
		</Link>
	)

}

export default UserNavbar;
