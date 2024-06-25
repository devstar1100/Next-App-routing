"use client";

import { Plus, RefreshCcw, Search, Trash2 } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { Checkbox, Modal, TextInput } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { DataTable } from "@/ui/components/Table";
import { Button } from "@/ui/elements/Button";
import { tableData } from "@/utils/constants";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [ myTableData, setMyTableData ] = useState(tableData);
  const [ addPageModal, setAddPageModal ] = useState<boolean>(false);
  const [ addPageInput, setAddPageInput ] = useState<string>("");
  const [ searchKey, setSearchKey ] = useState<string>("");
  const buttons = [
    {
      title: "Rescan pagaina",
      icon: RefreshCcw,
      style: "bg-white text-blue-600 border-blue-600",
    },
    {
      title: "Vedi report pagina",
      style: "bg-blue-600 text-white border-white",
    }
  ]

  const tablecolumns:{
    id: string;
    label: any;
    sortable: boolean;
    style: string;
    content?: (row: Record<string, any>) => JSX.Element;
  }[] = [
    {
      id: "check",
      label: <Checkbox className="mx-3" />,
      sortable: false,
      style: "",
      content: (row) => (
        <Checkbox 
          className="mx-3" 
          onClick={() => console.log(row)} 
        />
      )
    },
    {
      id: "page",
      label: "Page",
      sortable: true,
      style: "whitespace-nowrap font-medium text-gray-900 dark:text-white",
    },
    {
      id: "scan",
      label: "Scan",
      sortable: true,
      style: "",
    },
    {
      id: "waring",
      label: "Waring",
      sortable: true,
      style: "div:bg-red-500",
    },
    {
      id: "button",
      label: "",
      sortable: false,
      style: "p-0",
      content: (row) => ( 
        <div className="flex justify-center items-center min-w-[385px]">
          {buttons.map((button, index) => {
            return (
              <div key={index}>
                <Button
                  style={button.style}
                  icon={button.icon ? <button.icon size={15} /> : undefined}
                  title={button.title}
                  onClick={() => console.log("row: ", row)}
                />
              </div>
            )
          })}
        </div>
      )
    },
    {
      id: "trash",
      label: ( 
        <Trash2 
          className="cursor-pointer"
          size={20} 
        />
      ),
      sortable: false,
      style: "",
      content: (row) => ( 
        <Trash2 
          className="cursor-pointer"
          onClick={() => handleDelete(row.id)}
          size={20} 
        />
      )
    }
  ]

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

    setMyTableData([ ...myTableData, {
      id: newId,
      page: extractPath(addPageInput),
      scan: "3 maggio 2024",
      waring: 12
    } ])
    setAddPageInput("");
    setAddPageModal(false);
  }

  const handleDelete = (id: number) => {
    console.log(id);
    setMyTableData(myTableData.filter(item => item.id !== id));
  }

  return (
    <>
      <div className="pb-12 min-[640px]:flex items-center justify-between">
        <div>
          <div className="max-sm:flex justify-center text-blue-800 font-bold">sito.com</div>
          <div className="max-sm:flex justify-center">Pagine del sito: {myTableData.length}</div>
        </div>
        <div className="flex justify-center max-sm:pt-5 max-xl:flex-col-reverse">
          <div>
            <TextInput
              type="text"
              className="max-xl:pt-5"
              icon={Search}
              placeholder="Cerca pagina"
              required
              value={searchKey.trim()}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button 
              style="bg-white text-blue-600 border-blue-600"
              icon={<Plus size={15} />}
              title="Aggiungi pagina"
              onClick={() => setAddPageModal(true)}
            />
            <Button 
              style="bg-white text-blue-600 border-blue-600"
              icon={<RefreshCcw size={15} />}
              title="Rescan sito"
              onClick={() => {console.log("Clicked!")}}
            />
            <Button 
              style="max-[405px]:hidden bg-blue-600 text-white border-white"
              title="Vedi report sito"
              onClick={() => {console.log("Clicked!")}}
            />
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <DataTable
          data={myTableData}
          defaultSortBy={"page"}
          columns={tablecolumns}
          searchKey={searchKey}
        />
      </div>
      <Modal
        show={addPageModal}
        size="lg"
        onClose={() => setAddPageModal(false)}
        theme={{
          content: {
            base: "relative w-full p-4 h-auto"
          }
        }}
      >
      <Modal.Header />
        <Modal.Body>
          <TextInput
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
          <Button 
            style="" 
            title="Ok"
            disabled={!addPageInput}
            onClick={handleAddPage}
          />
          <Button
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