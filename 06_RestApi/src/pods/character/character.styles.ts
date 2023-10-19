import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const container = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 1rem;
`;
export const imgWrapper = css`
  border-radius: 10px;
`;
export const infoWrapper = css`
  border-radius: 10px;
`;
export const title = css`
  margin-top:0;
  color: #1976d2;
`;

export const image = css`
  width: 350px;
  height: auto;
`;

export const status = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const icon = css`
  height: 20px;
  border-radius: 50%;
  width: 20px;
  margin-right: .5rem;
`;

export const wrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const colorTitle = css`
  color: #000;
  font-weight: bold;
`;
export const colorText = css`
  color: grey;
  font-weight: 500;
`;
