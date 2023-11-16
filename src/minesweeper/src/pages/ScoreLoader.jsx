import { defer } from 'react-router-dom'
import scoreService from '../services/scores'

export const scoreLoader = async ({ params }) => {
  const { difficulty } = params

  const fastestFirst = (a, b) => a.time - b.time
  let score = null;
  let gridDimensions = {
    width: 2,
    height: 2,
    mineCount: 1
  }

  switch (difficulty) {
    case 'beginner':
      score = scoreService.getBeginner()
        .then(scores => {
          scores.sort(fastestFirst)
          return scores
        })
        .catch(error => console.log("error: ", error))

      gridDimensions = { width: 9, height: 9, mineCount: 10 }
      break

    case 'intermediate':
      score = scoreService.getIntermediate() 
        .then(scores => {
          scores.sort(fastestFirst)
          return scores
        })
        .catch(error => console.log("error: ", error))

      gridDimensions = { width: 16, height: 16, mineCount: 40 }
      break
  
    case 'extreme':
      score = scoreService.getExtreme()
        .then(scores => {
          scores.sort(fastestFirst)
          return scores
        })
        .catch(error => console.log("error: ", error))

      gridDimensions = { width: 30, height: 16, mineCount: 99 }
      break

    case 'custom':
      score = null
      gridDimensions = { width: 4, height: 4, mineCount: 5 }
      break
    
    default:
      break
  }
  return defer({
    score: score,
    gridDimensions: gridDimensions
  })
}