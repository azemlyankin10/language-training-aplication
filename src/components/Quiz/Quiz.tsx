export const Quiz = ({img, origin, secondary, handler}: { img: string, origin: string, secondary: {word: string, id: string}[], handler: (e: any) => void }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <img className="rounded-t-lg" src={img} width='100%' style={{height: '300px'}} alt={`${origin} word`} />
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{origin}</h5>
        <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          {secondary?.map((el) => (
            <button key={el.id} id={el.id} onClick={handler} type="button" className="w-full px-4 py-2 font-medium text-left text-white bg-gray-700  cursor-pointer focus:outline-none ">
              {el.word}
            </button>
          ))}
        </div>
    </div>
  </div>
)