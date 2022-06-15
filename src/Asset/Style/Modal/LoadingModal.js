import tw, { styled } from 'twin.macro';

export const LoadingModalSection = tw.section`
    absolute w-screen h-screen top-0 left-0 z-50
`;

export const LoadingModalBackground = tw.article`
    w-full h-full bg-gray-900 opacity-80
`;

export const LoadingModalItems = styled.article`
    transform: translate(-2.5rem, -2.5rem);
    ${tw`w-20 h-20 absolute flex justify-center items-center left-1/2 top-1/2`}
`;

export const LoadingModalCircle = tw.div`
    w-20 h-20 border-8 opacity-100 border-indigo-400 border-solid rounded-full animate-spin border-t-transparent
`;
