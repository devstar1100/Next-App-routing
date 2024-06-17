"use client";

import { Plus, RefreshCcw, Search } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { Modal, TextInput } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { CustomTable } from "../../ui/components/Table";
import { CustomButton } from "../../ui/elements/Button";
import { tableData } from "../../../utiles/constants";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [myTableData, setMyTableData] = useState(tableData.data);
  const [addPageModal, setAddPageModal] = useState(false);
  const [addPageInput, setAddPageInput] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const tableHeaders = tableData.headers;

  const extractPath = (url: string): string => {
    const baseUrl = "sito.com/";
    let path = url;

    // Remove the root domain if present
    if (url.startsWith(baseUrl)) {
      path = url.substring(baseUrl.length);
    }
    // Remove leading slash if present
    if (path.startsWith("/")) {
      path = path.substring(1);
    }

    // Re-append the base URL
    return baseUrl + path;
  };

  const handleTrash = (id: number) => {
    console.log(id);
    setMyTableData(myTableData.filter(item => item.id !== id));
  }

  const handleAddPage = () => {
    if (addPageInput === ""){
      toast("Please input page name.");
      return; 
    }
    const largestId = myTableData
    .reduce(
      (maxId, item) => Math.max(maxId, item.id)
      , 0
    );
    const newId = largestId + 1;

    setMyTableData([...myTableData, {
      id: newId,
      page: extractPath(addPageInput),
      scan: "3 maggio 2024",
      avvertenze: "12"
    }])
    setAddPageInput("");
    setAddPageModal(false);
  }

  return (
    <>
      <div className="pb-12 min-[640px]:flex items-center justify-between">
        <div>
          <div className="max-sm:flex justify-center text-blue-800 font-bold">sito.com</div>
          <div className="max-sm:flex justify-center">Pagine del sito: {myTableData.length}</div>
        </div>
        <div className="flex justify-center max-sm:pt-5">
          <TextInput
            className="max-lg:hidden"
            type="text"
            icon={Search} 
            placeholder="Cerca pagina" 
            required
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <CustomButton 
            style="bg-white text-blue-600 border-blue-600"
            icon={<Plus size={15} />}
            title="Aggiungi pagina"
            onClick={() => setAddPageModal(true)}
          />
          <CustomButton 
            style="bg-white text-blue-600 border-blue-600"
            icon={<RefreshCcw size={15} />}
            title="Rescan sito"
            onClick={() => {console.log("Clicked!")}}
          />
          <CustomButton 
            style="max-[405px]:hidden bg-blue-600 text-white border-white"
            title="Vedi report sito"
            onClick={() => {console.log("Clicked!")}}
          />
        </div>
      </div>
      <div className="overflow-auto">
        <CustomTable
          tableData={myTableData}
          tableHeaders={tableHeaders}
          searchKey={searchKey}
          handleTrash={handleTrash}
        />
      </div>
      <Modal 
        show={addPageModal} 
        size="md" 
        popup 
        onClose={() => setAddPageModal(false)}
      >
      <Modal.Header />
        <Modal.Body>
          <TextInput 
            className="max-lg:hidden p-2"
            type="text" 
            placeholder="Cerca pagina" 
            required 
            value={addPageInput}
            onChange={
              (e: ChangeEvent<HTMLInputElement>) => 
                setAddPageInput(e.target.value)
            }
          />
        </Modal.Body>
        <Modal.Footer className="flex justify-center items-center">
          <CustomButton 
            style="" 
            title="Ok" 
            onClick={handleAddPage} 
          />
          <CustomButton
            style="bg-slate-800" 
            title="Close" 
            onClick={() => {
              setAddPageModal(false)
              setAddPageInput("")
            }} 
          />
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Page;