'use client'
import styles from './styles.module.css';
import x from '../../assets/x.svg';
import Image from 'next/image';
import { useState } from 'react';

interface Props{
    content: string;
}

export function Feedback({content}:Props){

    const [open, setOpen] = useState(true);

    return (
        <div className={styles.wrapper}>
            <p>{content}</p>
            <button onClick={()=>setOpen(false)} >
                <Image
                    src={x} alt="Cancel Logo" 
                />
            </button>
        </div>
    )
}