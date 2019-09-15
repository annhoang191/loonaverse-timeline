import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

export default function NonStyleLink({ to, children }) {
  return <StyledLink href={to}>{children}</StyledLink>
}
