import styled from 'styled-components'
import tw from "twin.macro";

export const TemplateContainer = styled.div`
    ${tw`block w-full mr-auto ml-auto px-10 max-w-screen-xl`}
`;

export const TemplateForm = styled.div`
    ${tw`flex flex-initial flex-row justify-between items-center my-4 w-full h-16`}
`;

export const TemplateButton = styled.div`
    ${tw`inline-flex flex-initial items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer `}
`;
