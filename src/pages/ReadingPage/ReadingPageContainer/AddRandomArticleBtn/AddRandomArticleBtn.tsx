import { typeGetArticleBtn } from "../../../../utils/types";

export const AddRandomArticleBtn = ({getArticleBtn: { isLoading, getArticle }, text}: {getArticleBtn: typeGetArticleBtn, text: string}) => {

  return (
    <button
      onClick={getArticle}
      disabled={isLoading}
      type="button"
      className="rounded-r inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out cursor-pointer"
    >
      {isLoading ? 'loading...' : text}
    </button>
  )
}