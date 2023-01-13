export const FormAddText = () => {
  return (
    <form className="h-96 p-2 rounded-lg border-4 border-dashed border-gray-200">
      <textarea 
        className="h-5/6 w-full p-5 resize-none"
        placeholder="Input your custom text"
        >
      </textarea>
      <button type="submit" className="rounded-md p-3 px-5 ml-auto block bg-violet-800 text-white">Add text</button>
    </form>
  )
}