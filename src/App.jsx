import { Fragment, useState } from "react";
import "./App.css";
import FileField from "./FileField";

function App() {
  const [profile, setProfile] = useState([]);
  const [coverPhotos, setcoverPhotos] = useState([]);

  return (
    <Fragment>
      <div className="p-5">
        <FileField
          textfieldProps={{ label: "Single" }}
          autoCompleteProps={{ className: "my-5" }}
          files={profile}
          setFiles={setProfile}
        />
        <FileField
          textfieldProps={{ label: "Multiple" }}
          autoCompleteProps={{ className: "my-5" }}
          files={coverPhotos}
          setFiles={setcoverPhotos}
          multiple={true}
        />
      </div>
    </Fragment>
  );
}

export default App;
