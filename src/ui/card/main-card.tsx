import React, { memo } from 'react'

import styled from 'styled-components'

import { Link } from '../link/link'
import { Button } from '../button/button'
import { H3, P2, P4 } from '../../assets/styles/texts'
import { IconBookMark } from '../../assets/icons/icon-favorites'

import { useToggle } from '../../hooks/use-toggle'

import { Routes } from '../../constants/routes'

import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { authSelectors } from '../../store/auth/auth-selectors'

import { addFavorites, deleteFavorites } from '../../store/favorites/favorites-slices'

import defaultImage from '../../assets/images/default-image-card.jpg'

type Props = {
  id: number
  name: string
  imageUrl: string
  description: string
  abv: number
  ibu: number
  isFavorite: boolean
}

export const CardForMainPage = memo((props: Props) => {
  const dispatch = useAppDispatch()
  const { id, name, imageUrl, description, abv, ibu, isFavorite } = props
  const isAuth = useAppSelector(authSelectors.getIsAuth)

  const [isToggled, setToggled] = useToggle(isFavorite)

  const handleClick = () => {
    if (!isToggled) {
      dispatch(addFavorites(props))
    } else {
      dispatch(deleteFavorites(id))
    }
    setToggled()
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
          <H3>{name}</H3>
        </Link>
        <P2>{description}</P2>
        <P4>
          ABV-{abv}% IBU-{ibu}
        </P4>
      </Wrapper>
      <BookMark>
        {isAuth ? (
          <Button size={'small'} onClick={handleClick}>
            <IconBookMark color={!isToggled ? 'dark' : 'blue'} />
          </Button>
        ) : null}
      </BookMark>
    </Container>
  )
})

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
