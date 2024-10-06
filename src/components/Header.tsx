import styled from "styled-components"

const SCS_Header = styled.div `
    margin: 0px;
    padding: 20px 0px 20px 0px;
    width: 100%;
    background-color: #ade9f8;
    color: #333;

    & h1 {
        margin: 0px;
        padding: 0px;
    }
`

export default function Header() {
    return (
        <SCS_Header>
            <h1>UK Flood Information</h1>
            <small>Check the status of flooding around the UK.</small>
        </SCS_Header>
    )
}