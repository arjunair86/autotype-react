import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface PropInterface {
    list: Array<string>
}

const Autotype = (props: PropInterface) => {
    const list = useMemo(() => [...props.list], [props.list]);
    const [substr, setSubstr] = useState("");
    const [char, setChar] = useState(0);
    const [deleting, setDeleting] = useState(0);
    const [index, setIndex] = useState(0);

    const timer = useCallback(() => {
        setSubstr(list[index].substring(0, char+1));
        setChar(char+1);
    },[char, list, index]);
    const timer2 = useCallback(() => {
        setSubstr(list[index].substring(0, char-1));
        setChar(char-1);
    },[char, list, index]);

    useEffect(() => {
        let id: NodeJS.Timeout;
        if(deleting) {
            console.log("running delete");
            if(char === 0) {
                setDeleting(0);
                setIndex((index+1)%list.length);
                return;
            }
            id = setInterval(timer2, 50);
            return () => {
                console.log("clearing delete interval");
                clearInterval(id);
            }
        }
        else {
            console.log("running insert");
            if(char === list[index].length) {
                setDeleting(1);
                return;
            }
            id = setInterval(timer, 200);
            return () => {
                console.log("clearing insert interval");
                clearInterval(id);
            }
        }
    }, [list, index, timer, timer2, deleting, char]);

    return (
        <div>
        <span id="autotype">{substr}</span>
        <span className="blink">|</span>
        </div>
    )
}


export default Autotype;