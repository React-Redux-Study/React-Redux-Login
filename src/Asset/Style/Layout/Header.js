import tw, { styled } from 'twin.macro';

export const HeaderArea = styled.div`
    ${tw`w-full px-8`}
`;

export const HeaderImages = styled.div`
    ${tw`flex-shrink-0 flex items-center`}
`;

export const HeaderItems = styled.div`
    ${tw`flex justify-between h-16 w-full`}
`;

export const HeaderItem = styled.div`
    ${tw`hidden ml-6 flex space-x-8`}
`;

export const HeaderMenu = styled.span`
    ${tw`border-solid inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
`;

export const HeaderAvatar = styled.svg`
    ${tw`h-full w-full text-gray-300`}
`;

export const HeaderButton = styled.button`
    ${tw`block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100`}
`;

export const HeaderIcon = styled.div`
    ${tw`hidden sm:ml-6 sm:flex sm:items-center`}
`;

export const HeaderIconButton = styled.button`
    ${tw`bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`;

export const HeaderIconAvatar = styled.span`
    ${tw`inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100`}
`;