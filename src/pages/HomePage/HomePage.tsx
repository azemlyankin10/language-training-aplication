import { Card } from "../../components/Card/Card"
import { typeCard } from "../../utils/types"

const cardsArray: typeCard[] = [
  {title: 'reading', desc: 'Add text, read and translate.', link: '/reading', img: 'https://static01.nyt.com/images/2021/05/21/arts/21Summer-Reading-2021-Cover/21Summer-Reading-2021-A-03-superJumbo.jpg?quality=75&auto=webp'},
]

export const HomePage = () => {

  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        Time to choose what to do today
      </h2>

      <div className="grid grid-cols-4 gap-10 py-5">
        {cardsArray.map(({title, desc, link, img}, index) => (
          <Card key={index} title={title} desc={desc} link={link} img={img} />
        ))}
      </div>
    </div>
  )
}