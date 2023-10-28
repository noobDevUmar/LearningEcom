'use client'
import { useSearchParams,useRouter } from 'next/navigation'
import Pagination from 'react-js-pagination'

const CustomPagination = ({productsCount,resPerPage}) => {


    const searchParams = useSearchParams()
    const router = useRouter()
    let page = searchParams.get('page') || 1
    page = Number(page)

   
    let queryParams;

    const handlePageChange = (curentPage)=>{

        if(typeof window !== 'undefined'){
            queryParams = new URLSearchParams(window.location.search)
            if(queryParams.has('page')){
                queryParams.set('page',curentPage)
            }else{
                queryParams.append('page',curentPage)
            }


            const path = window.location.pathname + '?' + queryParams



            console.log(queryParams);
            console.log('path',path);

            router.push(path)
        }

    }

  return (
    <div className='flex mt-20 justify-center'>
       <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productsCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        activeLinkClassName="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
        activeClass="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
      />
     
    </div>
  )
}

export default CustomPagination