// import dos componentes estilizados
import { StyledHeader, Title } from "../styles/header-styles"

import { Text } from "react-native"

export default function Header(): JSX.Element{
    return (
        <StyledHeader>
            <Title>
               Notes
            </Title>
        </StyledHeader>
    )
}