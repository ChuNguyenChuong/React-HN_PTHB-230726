import { useEffect, useState } from "react"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storageFirebase } from "../../../services/firebase";
import axios from "axios";
import { useMutation } from "react-query";
import { createProducts } from "../../../helper/axious";



const CreateProducts = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  })

  const [fileData, setFileData] = useState(null)
  const [imagePreview, setImagePreview] = useState("")

  const mutation = useMutation(createProducts, {
    onSuccess: () => {
      props.setTabIndex(0)
    },
  })

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setFormData(old => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  const handleSubmit = () => {
    if (fileData === null) {
      return;
    }
    const imageRef = ref(storageFirebase, `images/${fileData.name}`);

    uploadBytes(imageRef, fileData).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        mutation.mutate({ ...formData, img: url })
      });
    });

  }

  const handleChangeFile = (e) => {
    setFileData(e.target.files[0])
  }
  useEffect(() => {
    if (fileData) {
      const reader = new FileReader();
      const url = reader.readAsDataURL(fileData);
      reader.onloadend = function () {
        setImagePreview(reader.result)
      }
      setImagePreview(url)
    }
  }, [fileData])

  return <div>
    <div className="flex flex-col items-center justify-center">
      {/* <img src={imagePreview} alt="" className="h-12 w-12 rounded-full overflow-hidden" /> */}
      <label htmlFor="fileUpload" className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
        {imagePreview && <img src={imagePreview} alt="" className="h-full w-full rounded-full overflow-hidden object-cover" />}
      </label>

      <input type="file" name="" id="fileUpload" className="hidden" onChange={handleChangeFile} />
    </div>
    <div className="flex gap-4 flex-wrap items-end">
      <div>
        <label htmlFor="name">name :</label>
        <input type="text" className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500" placeholder="name..." id="name" value={formData.name} onChange={handleChangeData} name="name" />
      </div>
      <div>
        <label htmlFor="price">price :</label>
        <input type="text" className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500" placeholder="price..." id="age" value={formData.price} onChange={handleChangeData} name="price" />
      </div>
      <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lgborder-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] h-max rounded-xl" onClick={handleSubmit}>
        Submit
      </button>
    </div>


  </div>
}

export default CreateProducts