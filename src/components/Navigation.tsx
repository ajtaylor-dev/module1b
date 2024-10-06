import styled from "styled-components"

const SCS_NavBar = styled.ul `
margin: 20px 0px 20px 0px;
padding: 0px;
float: left;
display: block;
list-style: none;
float: left;
width: 100%;
height: 40px;
background-color: #f6f6f6;

& li {
    margin: 0px;
    padding: 0px 20px 0px 20px;
    display: inline-block;
    color: #333;
    background-color: #c3c3c3;
    cursor: pointer;
}
& li:hover {
    background-color: #e4e4e4;
}

& a.nav_link {
    diplay: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
`

const navbuttons = [
    {value:"Types of flooding"},
    {value:"Current Alerts"},
]

export default function Navigation() {
    return (
        <SCS_NavBar>
            {navbuttons.map((items) => (
                <li key={items.value}><a className="nav_link" href="#">{items.value}</a></li>
            ))}
        </SCS_NavBar>
    )
}