import { useParams } from 'react-router'

function booksDetail() {
  const { id } = useParams();

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>
        Detail Buku
      </h1>
      <p className="text-gray-600 mt-4">
        Ini adalah halaman detail untuk buku tertentu dengan id : {id}
      </p>
    </div>
  )
}

export default booksDetail
