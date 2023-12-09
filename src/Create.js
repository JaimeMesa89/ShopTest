import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

const Create = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [user, userDescription] = useState("6550a4a5fadb65a38330bff9");
    const [startingPrice, setStartingPrice] = useState(0);
    const [lastBid, setLastBid] = useState(0);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [publicationDate, setPublicationDate] = useState(new Date());
    const [endingDate, setEndingDate] = useState(new Date());
    const [finished, setFinished] = useState(false);
    const [imageId, setImageId] = useState('oobx1cx1ymchdsnxz7sg');
    const [isPending, setIspending] = useState(false);


    const [cloudName] = useState("daef41lib");
    const [uploadPreset] = useState("x1njk2mp");
    const [uwConfig] = useState({
        cloudName,
        uploadPreset
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      });
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = {
            name,
            description,
            user,
            startingPrice,
            lastBid,
            latitude,
            longitude,
            publicationDate: new Date(publicationDate),
            endingDate: new Date(endingDate),
            imageId,
            finished
        };

        console.log(imageId);

        setIspending(true);

        fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(producto)
        }).then(() => {
            console.log("New product added: " + JSON.stringify(producto));
            setIspending(false);
            //history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2> Add a new blog </h2>
            <form onSubmit={handleSubmit}>
                <label> Product name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label> Product description: </label>
                <textarea
                    required
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label> Starting Price: </label>
                <input
                    type="number"
                    required
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                />
                <label> Location: </label>
                <input
                    type="number"
                    required
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
                <input
                    type="number"
                    required
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <label> Ending Date: </label>
                <input
                    type="date"
                    required
                    value={endingDate}
                    onChange={(e) => setEndingDate(e.target.value)}
                />
                <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setImageId} />
                { !isPending && <button> Add Product </button> }
                { isPending && <button disabled> Adding Product... </button> }
            </form>
        </div>
     );
}
 
export default Create;