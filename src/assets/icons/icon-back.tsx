import React from 'react'

import styled from 'styled-components'

const Icon = () => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' data-name='Design Convert' viewBox='0 0 64 64'>
      <path
        d='M55 28H34a1 1 0 010-2h21a1 1 0 010 2zM28 57a1 1 0 01-.45-.11L8.66 47.45A3 3 0 017 44.76V10a3 3 0 013-3h9a1 1 0 010 2h-7.66l17.09 8.1a1 1 0 01.57.9v38a1 1 0 01-.47.85A1 1 0 0128 57zM9 10.11v34.65a1 1 0 00.55.9L27 54.38V18.63z'
        fill='currentColor'
      ></path>
      <path
        d='M47 37a1 1 0 01-.71-.29 1 1 0 010-1.42l8.3-8.29-8.3-8.29a1 1 0 011.42-1.42l9 9a1 1 0 010 1.42l-9 9A1 1 0 0147 37zM37 47h-9a1 1 0 010-2h9a1 1 0 001-1v-8a1 1 0 012 0v8a3 3 0 01-3 3zM39 19a1 1 0 01-1-1v-8a1 1 0 00-1-1H15a1 1 0 010-2h22a3 3 0 013 3v8a1 1 0 01-1 1z'
        fill='currentColor'
      ></path>
    </Svg>
  )
}

const Svg = styled.svg`
  width: 40px;
`

export const IconBack = Icon()
