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
    line-height: 40px;
    color: #333;
    background-color: #c3c3c3;
    cursor: pointer;
}
& li:hover {
    background-color: #e4e4e4;
}
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
                <li key={items.value}>{items.value}</li>
            ))}
        </SCS_NavBar>
    )
}