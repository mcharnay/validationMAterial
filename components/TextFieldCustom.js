import { TextField } from '@mui/material';

export default function TextFieldCustom({label, type, inputValue, onChange, onBlur, errorTitulo, leyenda }) {

   

    return (
        <div>
            <TextField 
                size="small" 
                color="primary" 
                fullWidth id="outlined-basic"
                label={label}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                
                error={errorTitulo} 
                helperText={leyenda} 
                value = {inputValue}
                variant="outlined" 
                
                
            />
        </div>
    )

}