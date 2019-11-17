import React from "react"
import { Link } from "react-router-dom"
import * as S from "../../utilities/StringConstants"
import { NavMenu, NavBox, NavMenuLine } from "../Navigation/Navigation.style"

const Navigation = () => {
	return (
		<>
			<NavBox>
				<NavMenu>
					<Link to="/">{S.HOME}</Link>
				</NavMenu>
				<NavMenu>
					<Link to="/about">{S.ABOUT}</Link>
				</NavMenu>
				<NavMenu>
					<a
						href="https://drive.google.com/file/d/1An-7VnE3XkgN9yueBDPmEexxg3WqC-Rk/view?usp=sharing"
						target="_blank"
					>
						Resume
					</a>
				</NavMenu>
				<NavMenuLine />
				<NavMenu>
					<a href="https://www.linkedin.com/in/inhwakang/" target="_blank">
						Linkedin
					</a>
				</NavMenu>
				<NavMenu>
					<a
						href="https://www.youtube.com/channel/UC-JqDNI_LfShFCMm2J2h1Ew/"
						target="_blank"
					>
						Youtube
					</a>
				</NavMenu>
				<NavMenu>
					<a href="mailto: inakangs@gmail.com" target="_blank">
						Email
					</a>
				</NavMenu>
			</NavBox>
		</>
	)
}

export default Navigation
