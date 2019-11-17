import styled from "styled-components"
import * as C from "../../utilities/CSSConstants"

export const NavMenu = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: ${C.LEFT_NAVIGATION_DESKTOP_PADDING};
	padding-bottom: 20px;
`
export const NavMenuLine = styled.div`
	margin-top: 10px;
	margin-bottom: 30px;
	height: 1px;
	width: 90%;
	background-color: grey;
`

export const NavBox = styled.div`
	display: block;
	position: fixed;
	margin-top: ${C.TOP_NAVIGATION_DESKTOP_HEIGHT};
	width: ${C.LEFT_NAVIGATION_DESKTOP_WIDTH};
`
