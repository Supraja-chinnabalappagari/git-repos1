import React, { useState } from 'react';

const UploadData = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('File uploaded: ' + file.name);
        // Here you would typically send the file to a backend service
    };

    return (
        <div>
            <h2>Upload MRI Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadData;
