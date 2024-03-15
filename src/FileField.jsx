import { Close, FileUploadOutlined } from "@mui/icons-material";
import { Autocomplete, ButtonBase, TextField } from "@mui/material";
import React, { Fragment, useRef } from "react";

const FileField = ({
  textfieldProps,
  autoCompleteProps,
  multiple,
  files,
  setFiles,
}) => {
  const fileRef = useRef(null);
  const handleCarouselFiles = (e) => {
    const selectedFiles = e.target.files;
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      setFiles(selectedFiles);
    }
  };
  const handleCarouselInput = () => {
    fileRef.current.click();
  };
  return (
    <Fragment>
      <Autocomplete
        multiple
        options={Array.from(files)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            {...(textfieldProps ?? {})}
            disabled
            onClick={handleCarouselInput}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {files.length > 0 && (
                    <ButtonBase
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiles([]);
                      }}
                      sx={{
                        paddingRight: "0.5rem",
                      }}
                    >
                      <Close />
                    </ButtonBase>
                  )}
                  <ButtonBase>
                    <FileUploadOutlined onClick={handleCarouselInput} />
                  </ButtonBase>
                </Fragment>
              ),
            }}
            sx={{
              color: "inherit",
              "& .MuiInputBase-root , & .MuiInputBase-input": {
                paddingRight: "1rem !important",
                cursor: "pointer",
              },
            }}
          />
        )}
        value={Array.from(files)}
        onChange={(event, newValue) => {
          event.preventDefault();
          setFiles(newValue);
        }}
        open={false}
        sx={{
          caretColor: "transparent",
          cursor: "pointer",
          "& .Mui-disabled,& .MuiInputLabel-root": {
            color: "rgba(0,0,0,0.6)",
            backgroundColor: "transparent",
          },
        }}
        {...(autoCompleteProps ?? {})}
      />
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleCarouselFiles}
        multiple={multiple}
      />
    </Fragment>
  );
};

export default FileField;
