import { Rating } from "../../../../components/Rating/Rating"
import { getProcent } from "../../../../utils/ts"

export const VocabularyStat = ({stat}: {stat: { know: number, dontKnow: number }}) => (
  <div>
    <Rating name="I know" procent={getProcent(stat.know, stat.know + stat.dontKnow)} color='green'/>
    <Rating name="I do not know" procent={getProcent(stat.dontKnow, stat.know + stat.dontKnow)} color='red'/>
  </div>
)

