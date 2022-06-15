import { useSelector } from "react-redux";

import tw from "twin.macro";

const LoadingModal = () => {
    const {isLoading} = useSelector(state => state.loading)

    return (
        <>
            {
                isLoading && (
                    <section css={tw`absolute w-screen h-screen top-0 left-0 z-50`}>
                        <article css={tw`w-full h-full bg-gray-900 opacity-80`}/>
                        <article css={ 
                            tw`w-20 h-20 absolute flex justify-center items-center left-1/2 top-1/2`
                        }>

                        </article>
                    </section>
                )
            }
        </>
    )
}