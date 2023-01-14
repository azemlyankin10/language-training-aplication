export const AddedWordsBtn = ({length}: {length?: number}) => (
  <button type="button" className="ml-auto block my-6 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300">
    Added words
    <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
      {length}
    </span>
  </button>
)