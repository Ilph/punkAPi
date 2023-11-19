import React from 'react'

import styled, { keyframes } from 'styled-components'

export const Spiner = () => <Spin />

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spin = styled.div`
  margin: 0 auto;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`
