import React, {useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import Token from "../../Components/Token/Token";

import {
    TemplateContainer,
} from "../../Asset/Style/Template/Template";

const Template = () => {
    return (
        <>
            <Token />
            {
                <TemplateContainer>
                    template
                </TemplateContainer>
            }
        </>
    )
}

export default Template;