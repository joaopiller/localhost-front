'use client'
import { useState } from 'react';
import styles from './styles.module.css';
import Image, { StaticImageData } from 'next/image';

interface PropTypes{
    label?: string;
    type?: string;
    placeholder: string;
    onValueChange?: (value: string) => void;
    icon?: StaticImageData;
    size?: string
}

export function Input({label, type = "text", placeholder, onValueChange, icon, size}: PropTypes){

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (onValueChange) {    
            onValueChange(event.target.value); //onValueChange -> chama metodo que atualiza o pai
        }
    };

    return(
        <div className={styles.wrapper} style={{width: size}}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={styles.input}
            />
            {icon && <Image src={icon} alt="House Logo"/>}
        </div>
    )
}