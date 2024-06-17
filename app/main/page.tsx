"use client";

// import { Plus, RefreshCcw, Search } from "lucide-react";
// import { Modal, TextInput } from "flowbite-react";
import { ChangeEvent, useEffect, useState } from "react";
// import CustomBreadCrumb from "../ui/components/BreadCrumb";
// import { CustomTable } from "../ui/components/Table";
// import { CustomButton } from "../ui/elements/Button";
// import { tableData } from "../../utiles/constants";
import { useRouter } from "next/navigation";

const Page = () => {
  // const [myTableData, setMyTableData] = useState(tableData.data);
  // const [addPageModal, setAddPageModal] = useState(false);
  // const [addPageInput, setAddPageInput] = useState("");
  // const [searchKey, setSearchKey] = useState("");
  // const tableHeaders = tableData.headers;

  // const extractPath = (url: string): string => {
  //   const baseUrl = "sito.com/";
  //   let path = url;

  //   // Remove the root domain if present
  //   if (url.startsWith(baseUrl)) {
  //     path = url.substring(baseUrl.length);
  //   }
  //   // Remove leading slash if present
  //   if (path.startsWith("/")) {
  //     path = path.substring(1);
  //   }

  //   // Re-append the base URL
  //   return baseUrl + path;
  // };

  // const handleTrash = (id: number) => {
  //   console.log(id);
  //   setMyTableData(myTableData.filter(item => item.id !== id));
  // }

  // const handleAddPage = () => {
  //   const largestId = myTableData
  //   .reduce(
  //     (maxId, item) => Math.max(maxId, item.id)
  //     , 0
  //   );
  //   const newId = largestId + 1;

  //   setMyTableData([...myTableData, {
  //     id: newId,
  //     page: extractPath(addPageInput),
  //     scan: "3 maggio 2024",
  //     avvertenze: "12"
  //   }])
  //   setAddPageInput("");
  //   setAddPageModal(false);
  // }

  const router=useRouter();

  useEffect(() => {
    router.push('/main/dashboard');
  })

  return (
    <>
      {/* <div className="px-10 py-10">
        <div className="flex items-center">
          <CustomBreadCrumb
            param={"dashboard"}
            main=""
          />
        </div>
        <div className="overflow-auto">
        <div className="relative py-12 flex items-center min-w-[700px]">
          <div>
            <h1 className="text-blue-800 font-bold">sito.com</h1>
            <div>Pagine del sito: {myTableData.length}</div>
          </div>
          <div className="absolute right-0 flex object-right">
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
              style="bg-blue-600 text-white border-white"
              title="Vedi report sito"
              onClick={() => {console.log("Clicked!")}}
            />
          </div>
        </div>
          <CustomTable
            tableData={myTableData}
            tableHeaders={tableHeaders}
            searchKey={searchKey}
            handleTrash={handleTrash}
          />
        </div>
        <Modal show={addPageModal} size="md" popup onClose={() => setAddPageModal(false)}>
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
          <Modal.Footer>
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
      </div> */}
    </>
  )
}

export default Page;