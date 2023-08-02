

// import { ProcedureList } from "./ProcedureList"
// import { ProcedureHeading } from "./ProcedureHeading";
// import { useState } from "react";
import { ProcedureCard } from "./ProcedureCard";
import {Procedure, ProcedureStep, EditableAreaProps} from "./Utils/ProcedureInterfaces"





export function EditableArea({procedureList, setProceduresList}: EditableAreaProps): JSX.Element {
    
    function updateProcedureList(procedure: Procedure) {
        setProceduresList()
    }

    return (
        {procedureList.map(ProcedureCard)}
    );
}

