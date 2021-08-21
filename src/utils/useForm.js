import { useEffect, useState } from "react";

export const useForm = (options) =>{
    const [ submitDisabled, setSubmitDisabled ] = useState(true);
    const [ inputs, setInputs ] = useState((options?.initialValues || {} ));
    const [ errors, setErrors ] = useState({});
    const handleChange = ( event, sanitizeFn ) => {
        const name = event.target.name;
        const value = sanitizeFn ? sanitizeFn(event.target.value) : event.target.value;
        setInputs({
            ...inputs,
            [ name ] : value || ''
        });
    };
    const handleDateChange = ( key, value ) =>{

  
        setInputs({
            ...inputs,
            [key] : value || ''
        });
      }
      
      const handleFileChange = (event) =>{
          const { file, size } = event;
          const fileName = file ? file.name : '';
          const fileSize = event ? size : '';
          setInputs({
              ...inputs,
              attachedFile:{
                  fileName,
                  fileSize,
                  file
              }
          });

      };
      const handleClick = (event) => {
          if ( !event){
              setInputs({
                  ...inputs,
                  attachedFile: null
              });
          }
      };
      const handleValidation = () =>{
          const validations = options?.validations;

          if(validations) {
              let valid = true;
              const newErrors = { };
              for (const key in validations){
                  const value = inputs[key];
                  const validation = validations[key];
                  const required = validation?.required;
                  const pattern = validation?.pattern;
                  const custom = validation?.custom;

                  if(required?.value && !value){
                      valid = false;
                      if( key in inputs ) newErrors[key] = validation?.required?.message;
                  } else if (pattern?.value && !RegExp(pattern.value).test(value)){
                      if(key in inputs){
                          valid=false;
                          newErrors[key] = custom.message;
                      }
                  }
              }
              if(!valid){
                  setSubmitDisabled(true);
                  setErrors(newErrors);
                  return;
              }
          }
          setSubmitDisabled(false);
          setErrors({});
          
      };

      const handleSubmit = async (event)=>{
          if(event) event.preventDefault();
          handleValidation();
          if(Object.keys(errors).length){
              return;
          }
          if(options?.onSubmit) options.onSubmit();
      }

      useEffect(()=>{
          if(Object.keys(inputs).length !== 0){
            handleValidation();
          }else if(!options?.validations){
              setSubmitDisabled(false);

          }else{
              setSubmitDisabled(true);
          }
      },[inputs]);

      return {
          errors,
          inputs,
          setInputs,
          submitDisabled,
          handleChange,
          handleSubmit,
          handleDateChange,
          handleFileChange,
          handleClick,
          resetInputs: (x)=>{
              setInputs(x || ((options?.initialValues) ? (options?.initialValues) : {}));
              setErrors({});
          }
      };
};
export default useForm;