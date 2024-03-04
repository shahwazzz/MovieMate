import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Cast from './cast/Cast'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendations'

const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`${mediaType}/${id}/credits`);
  console.log(data)

  const trailer = data?.data.results.find((m) => m.type === "Trailer")





  return (
    <div>
      <DetailsBanner  video={trailer} crew={credits?.data.crew} />
      <Cast data={credits?.data.cast} loading={creditsLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div> 
  )
}

export default Details
