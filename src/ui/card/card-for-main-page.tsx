import React, { useState } from 'react'

import styled from 'styled-components'

import { Link } from '../link/link'
import { Button } from '../button/button'
import { H3, P2, P4 } from '../../assets/styles/texts'
import { IconBookMark } from '../../assets/icons/icon-favorites'

import { Routes } from '../../constants/routes'

import { useAuth } from '../../hooks/context'

import defaultImage from '../../assets/images/default-image-card.jpg'

type Props = {
  id: number
  title: string
  imageUrl: string
  description: string
  abv: number
  ibu: number | string
}

export const CardForMainPage = (props: Props) => {
  const { id, title, imageUrl, description, abv, ibu } = props
  const auth = useAuth()
  //TODO еще надо подумать про переключение иконки
  const [isToggled, setToggled] = useState(true)

  const handleClick = () => {
    setToggled(!isToggled)
  }

  return (
    <Container>
      <ImageWrapper>
        <ImageLink to={`${Routes.CARD}/${id}`}>
          <img src={imageUrl ?? defaultImage} alt='beer' />
        </ImageLink>
      </ImageWrapper>
      <Wrapper>
        <Link to={`${Routes.CARD}/${id}`}>
          <H3>{title}</H3>
        </Link>
        <P2>{description}</P2>
        <P4>
          ABV-{abv}% IBU-{ibu}
        </P4>
      </Wrapper>
      <BookMark>
        {auth.isAuth ? (
          <Button size={'small'} onClick={handleClick}>
            <IconBookMark color={isToggled ? 'black' : 'blue'} />
          </Button>
        ) : null}
      </BookMark>
    </Container>
  )
}

const Container = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 15px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
  border: 1px solid #7e6464;
`

const ImageWrapper = styled.div`
  align-self: center;
`

const ImageLink = styled(Link)`
  display: block;
  width: 30px;
  height: 120px;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`

const BookMark = styled.div`
  flex: 1 0 auto;
  text-align: end;
  min-width: 40px;
`
