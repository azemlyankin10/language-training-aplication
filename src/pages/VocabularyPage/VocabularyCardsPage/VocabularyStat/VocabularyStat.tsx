import { Rating } from "../../../../components/Rating/Rating"

export const VocabularyStat = ({stat}: {stat: { know: number, dontKnow: number }}) => {
  const getProcent = (num: number) => Number((num / (stat.know + stat.dontKnow) * 100).toFixed(1))
  
  return (
    <div>
      <Rating name="I know" procent={getProcent(stat.know)} color='green'/>
      <Rating name="I do not know" procent={getProcent(stat.dontKnow)} color='red'/>
    </div>
  )
}

