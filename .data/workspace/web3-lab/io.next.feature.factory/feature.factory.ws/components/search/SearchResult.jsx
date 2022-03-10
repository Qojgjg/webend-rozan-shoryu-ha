import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { languageSet, scrollHeightSet, userLanguage, userScrollHeight, userSearchMatch, searchMatchSet } from '../../features/usersetup/usersetupSlice';

function SearchResult() {
    const dispatch = useAppDispatch();

    const closeSearchMatch = () => {
        dispatch(searchMatchSet(false))
    };


    return (
        <div >
            <div className="relative grid gap-1 bg-white ">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className='text-gray-400'>
                        22 match
                    </div>
                    <div className="-mr-2">
                        <button type="button" onClick={() => closeSearchMatch()} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-start px-4 py-4 hover:bg-gray-200">
                    <div className="text-base font-medium text-gray-500">
                        Result 1..
                    </div>
                </div>
                <div className="flex items-start px-4 py-4 hover:bg-gray-200">
                    <div className="text-base font-medium text-gray-500">
                        Result 1..
                    </div>
                </div>
                <div className="flex items-start px-4 py-4 hover:bg-gray-200">
                    <div className="text-base font-medium text-gray-500">
                        Result 1..
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult