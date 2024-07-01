"use client";

import Link from "next/link";
import { Panel } from "@/ui/layouts/Panel";
import { Button } from "@/ui/elements/Button";
import { tableData } from "@/utils/constants";
import 'react-toastify/dist/ReactToastify.css';
import { DataTable } from "@/ui/components/Table";
import { ToastContainer, toast } from 'react-toastify';
import { ChangeEvent, useEffect, useState } from "react";
import { Badge, Checkbox, Modal, TextInput } from "flowbite-react";
import { Home, Plus, RefreshCcw, Search, Trash2 } from "lucide-react";

const Page = () => {
  const [ selectAll, setSelectAll ] = useState(false);
  const [ selectedRows, setSelectedRows ] = useState<number[]>([]);
  const [ filteredTableData, setFilteredTableData ] = useState(tableData);
  const [ showAddPageModal, setShowAddPageModal ] = useState<boolean>(false);
  const [ handleAddPageInput, setHandleAddPageInput ] = useState<string>("");
  const [ searchKey, setSearchKey ] = useState<string>("");
  const buttons = [
    {
      title: "Rescan pays",
      icon: RefreshCcw,
      style: "bg-white text-blue-600 border-blue-600",
    },
    {
      title: "See report page",
      style: "bg-blue-600 text-white border-white",
    }
  ]

  const tablecolumns:{
    id: string;
    label: any;
    sortable: boolean;
    th: {
      style: string;
      content?: (col: Record<string, any>) => JSX.Element;
    },
    tb: {
      style: string;
      content?: (row: Record<string, any>, col: Record<string, any>) => JSX.Element;
    }
  }[] = [
    {
      id: "check",
      label: "",  
      sortable: false,
      th: {
        style: "flex items-center cursor-pointer",
        content: (col) => 
        <Checkbox 
          className="mx-3" 
          checked={selectAll}
          onChange={handleSelectAll} 
        />,
      },
      tb: {
        style: "",
        content: (row, col) => 
        <Checkbox 
          className="mx-3"
          checked={selectedRows.includes(row.id)}
          onChange={() => handleSelectRow(row.id)} 
        />,
      },
    },
    {
      id: "page",
      label: "Page",
      sortable: true,
      th: {
        style: "flex items-center cursor-pointer",
      },
      tb: {
        style: "whitespace-nowrap font-medium text-gray-900 dark:text-white",
        content: (row, col) => <>
          <Link 
            className="underline text-blue-800" 
            passHref
            href={row[col.id]}
          >
            {row[col.id]}
          </Link>
        </>,
      },
    },
    {
      id: "scan",
      label: "Scan",
      sortable: true,
      th: {
        style: "flex items-center cursor-pointer",
      },
      tb: {
        style: "",
      },
    },
    {
      id: "waring",
      label: "Waring",
      sortable: true,
      th: {
        style: "flex justify-center items-center cursor-pointer",
      },
      tb: {
        style: "div:bg-red-500",
        content: (row, col) => (
          <>
            <div className="flex justify-center items-center">
              <Badge
                href=""
                color={"pink"}
              >
                {row[col.id]}
              </Badge>
            </div> 
          </>
        )
      },
    },
    {
      id: "button",
      label: "",
      sortable: false,
      th: {
        style: "flex items-center cursor-pointer",
      },
      tb: {
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
      th: {
        style: "flex items-center cursor-pointer",
      },
      tb: {
        style: "",
        content: (row) => ( 
          <Trash2 
            className="cursor-pointer"
            onClick={() => handleDelete(row.id)}
            size={20} 
          />
        )
      },
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
    if (handleAddPageInput === ""){
      toast("Please input page name.");
      return; 
    }
    const largestId = filteredTableData
    .reduce(
      (maxId, item) => Math.max(maxId, item.id)
      , 0
    );
    const newId = largestId + 1;

    setFilteredTableData([ ...filteredTableData, {
      id: newId,
      page: extractPath(handleAddPageInput),
      scan: "3 maggio 2024",
      waring: Math.floor(Math.random() * 50)
    } ])
    setHandleAddPageInput("");
    setShowAddPageModal(false);
  }

  const handleDelete = (id: number) => {
    setFilteredTableData(filteredTableData.filter(item => item.id !== id));
  }

  //  Checkbox selector
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredTableData.map(row => row.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([ ...selectedRows, id ]);
    }
  };

  useEffect(() => {
    setSelectAll(filteredTableData.length > 0 && selectedRows.length === filteredTableData.length);
  }, [selectedRows, filteredTableData]);
  // End Checkbox selector

  return (
    <>
      <Panel 
        href={{
          root: "dashboard",
          icon: Home,
          url: ["dental"]
        }}
      >
        <div className="pb-12 min-[640px]:flex items-center justify-between">
          <div>
            <div className="max-sm:flex justify-center text-blue-800 font-bold">sito.com</div>
            <div className="max-sm:flex justify-center">Site page: {filteredTableData.length}</div>
          </div>
          <div className="flex justify-center max-sm:pt-5 max-xl:flex-col-reverse">
            <div>
              <TextInput
                type="text"
                className="max-xl:pt-5"
                icon={Search}
                value={searchKey.trim()}
                placeholder="Cerca pagina"
                onChange={(e) => setSearchKey(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <Button 
                style="bg-white text-blue-600 border-blue-600"
                icon={<Plus size={15} />}
                title="Add page"
                onClick={() => setShowAddPageModal(true)}
              />
              <Button 
                style="bg-white text-blue-600 border-blue-600"
                icon={<RefreshCcw size={15} />}
                title="Rescan site"
                onClick={() => {console.log("Clicked!")}}
              />
              <Button 
                style="max-[405px]:hidden bg-blue-600 text-white border-white"
                title="See site report"
                onClick={() => {console.log("Clicked!")}}
              />
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <DataTable
            columns={tablecolumns}
            data={filteredTableData}
            defaultSortBy={"page"}
            searchKey={searchKey}
          />
        </div>
        <Modal
          show={showAddPageModal}
          size="lg"
          theme={{
            content: {
              base: "relative w-full p-4 h-auto"
            }
          }}
          onClose={() => setShowAddPageModal(false)}
        >
        <Modal.Header />
          <Modal.Body>
            <TextInput
              type="text"
              placeholder="Cerca pagina"
              value={handleAddPageInput}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) =>
                  setHandleAddPageInput(e.target.value)
              }
              required
            />
          </Modal.Body>
          <Modal.Footer className="flex justify-center items-center">
            <Button 
              style="" 
              title="Ok"
              disabled={!handleAddPageInput}
              onClick={handleAddPage}
            />
            <Button
              style="bg-slate-800"
              title="Close"
              onClick={() => {
                setShowAddPageModal(false)
                setHandleAddPageInput("")
              }}
            />
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </Panel>
    </>
  )
}

export default Page;