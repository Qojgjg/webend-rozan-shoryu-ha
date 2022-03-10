import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userLanguage, userSigned, hamburgerOnSet, sideBarSet, signedSet, userWarning, warnOnSet } from '../../features/usersetup/usersetupSlice';

function Warning() {
    const dispatch = useAppDispatch();

    const setWarningOff = () => {
        dispatch(warnOnSet(false))
    };

    return (
        <div className="pl-4 pr-11 bg-orange-300 flex justify-between w-full">
            <div className="flex py-2 max-w-2xl items-center justify-center mx-auto">
                <span className='text-[0.8rem] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate culpa neque recusandae sit laborum hic, eius esse, molestias a inventore ipsum quibusdam molestiae, beatae unde exercitationem quaerat velit quam.</span>
            </div>
            <div className="">
                <button
                    onClick={() => setWarningOff()}
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-900  focus:outline-none"
                >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Warning