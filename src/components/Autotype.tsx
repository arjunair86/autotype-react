import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface PropInterface {
    list: Array<string>
}

const Autotype = (props: PropInterface) => {
    const list = useMemo(() => [...props.list], [props.list]);
    const index = 0;
    const [substr, setSubstr] = useState("");
    const [char, setChar] = useState(0);

    const timer = useCallback(() => {
        setSubstr(list[index].substring(0, char+1));
        setChar(char+1);
    },[char, list, index]);

    useEffect(() => {
        if(char === list[index].length) {
            return;
        }
        const id = setInterval(timer, 100);
        return () => clearInterval(id);
    }, [list, index, timer, char]);

    return (
        <span>{substr}</span>
    )
}


export default Autotype;