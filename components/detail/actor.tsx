import { imageEndPoint } from "constant"
import React, { useState, useEffect } from "react"
import { Cast } from "services"
import styled from "styled-components"

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
const BoxLink = styled.div`
  margin: 1rem 0;
`

const Actor: React.FC<IActorProp> = ({ actorList }) => {
  const [limit, setLimit] = useState(6)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const limitList = status ? actorList.length : 6
    setLimit(limitList)
  }, [status])

  return (
    <MainActor>
      {actorList.slice(0, limit).map(val => (
        <ListActor key={val.cast_id}>
          <div>
            <Profileimage path={val.profile_path} alt={val.name}></Profileimage>
          </div>
          <ProfileName>
            {val.name} <ProfileCharacter>{val.character}</ProfileCharacter>
          </ProfileName>
        </ListActor>
      ))}
      <BoxLink>
        <a className="link" onClick={() => setStatus(!status)}>
          {status ? "Show less" : "Show more"}
        </a>
      </BoxLink>
    </MainActor>
  )
}

const Profileimage = ({ path, alt }) => <Image loading="lazy" src={`${imageEndPoint}/w45${path}`} alt={alt} />

export default Actor
