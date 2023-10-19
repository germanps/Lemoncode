import { css } from '@emotion/css'
import { theme } from 'core/theme'

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  max-width: 1440px;
  width: 100%;
  margin: 2rem 0 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
