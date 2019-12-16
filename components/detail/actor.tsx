import React from "react"
import styled from "styled-components"
import { imageEndPoint } from "constant"
import { Cast } from "services"
import { AutoSizer, List } from "react-virtualized"
import "react-virtualized/styles.css"

interface IActorProp {
  actorList: Cast[]
}

const MainActor = styled.div`
  display: flex;
  flex-direction: column;
`

const ListActor = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3em 0;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`

const ProfileName = styled.span`
  margin: 0 1rem;
  font-weight: 800;
`
const ProfileCharacter = styled.span`
  color: #7d7d7d;
`

const Actor: React.FC<IActorProp> = ({ actorList }) => (
  <MainActor>
    {actorList.map(val => (
      <ListActor key={val.cast_id}>
        <div>
          <Profileimage path={val.profile_path} alt={val.name}></Profileimage>
        </div>
        <ProfileName>
          {val.name} <ProfileCharacter>{val.character}</ProfileCharacter>
        </ProfileName>
      </ListActor>
    ))}
  </MainActor>
)

const Profileimage = ({ path, alt }) => <Image loading="lazy" src={`${imageEndPoint}/w45${path}`} alt={alt} />

export default Actor
