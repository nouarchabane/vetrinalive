import { SvgIcon } from "@mui/material";

export interface SvgProps {
    color: string
};

export const ZapIcon = ({ color }: SvgProps) => {
    return (
        <SvgIcon sx={{
            width: '24px',
            height: '24px',
            
        }}>
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="transparent" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    );
}