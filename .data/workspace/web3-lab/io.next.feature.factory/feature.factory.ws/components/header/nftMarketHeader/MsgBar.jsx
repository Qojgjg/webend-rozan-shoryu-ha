import React from 'react'

const style = {
    wrapper: `bg-gradient-to-b from-black relative w-screen `,
    container: `pr-11 max-w-7xl mx-auto pl-4 sm:pl-6`,
}

function MsgBar() {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper}>dasgdas</div>
            <div className="-mr-2">
                <button type="button" onClick={() => setIsMatched(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MsgBar