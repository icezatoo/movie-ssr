import { imageEndPoint } from "constant"
import React from "react"
import { Cast } from "services"
import styled from "styled-components"

interface IActorProp {
  actorList: Cast[]
}

const MainActor = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
`

const ListActor = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`

const ProfileName = styled.span`
  font-weight: 800;
`
const ProfileCharacter = styled.span`
  color: #7d7d7d;
`

const Actor: React.FC<IActorProp> = ({ actorList }) => {
  return (
    <MainActor>
      {actorList.map(val => (
        <ListActor key={val.id}>
          <div>
            <Profileimage path={val.profile_path} alt={val.name}></Profileimage>
          </div>
          <ProfileName>{val.name}</ProfileName>
          <ProfileCharacter>{val.character}</ProfileCharacter>
        </ListActor>
      ))}
    </MainActor>
  )
}

const Profileimage = ({ path, alt }) => <Image loading="lazy" src={`${imageEndPoint}/w185${path}`} alt={alt} />

export default Actor
