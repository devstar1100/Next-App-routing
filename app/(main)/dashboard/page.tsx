"use client";

import { Badge } from "flowbite-react";
import { Panel } from "@/ui/layouts/Panel";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/ui/elements/Button";
import 'react-toastify/dist/ReactToastify.css';
import { DataTable } from "@/ui/components/Table";
import { useRouter } from "next/navigation";
import { AddPageModal } from "@/ui/components/AddPageModal";
import { urlData as urlDataProps } from "@/utils/constants";
import { BadgeInfo, Eye, Home, Send, Trash2 } from "lucide-react";
import { PageNameContext } from "@/ui/components/PageNameContext";

const Page = () => {
  const router = useRouter();
  const [ filteredUrlData, setFilteredUrlData ] = useState<typeof urlDataProps>([]);
  const [ showPageModal, setShowPageModal ] = useState<boolean>(false);
  const context = useContext(PageNameContext);

  if (context === undefined) {
    throw new Error('Panel must be used within a MyProvider');
  }

  const { setValue } = context;

  useEffect(() => {
    const getUrlData = async () => {
      try {
        const response = await fetch('/api/sitedata');
        const data = await response.json();
        setFilteredUrlData(data)
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    }

    getUrlData()
  }, [])

  const reportButtons = [
    {
      title: "Send Email",
      icon: Send,
      style: "bg-blue-600 text-white border-whitebg-white border-blue-600",
      onClick: (row: Record<string, any>) => {
        console.log(row.id)
      }
    },
    {
      title: "See report",
      icon: Eye,
      style: "bg-white text-blue-600 border-blue-600",
      onClick: (row: Record<string, any>) => {
        setValue(row.siteurl)
        router.push('/dashboard/'+row.id);
      }
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
      id: "siteurl",
      label: "Site URL",
      sortable: true,
      th: {
        style: "flex items-center cursor-pointer",
      },
      tb: {
        style: "",
      },
    },
    {
      id: "license",
      label: "License",
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
      id: "report-page",
      label: "",
      sortable: false,
      th: {
        style: "flex items-center justify-center cursor-pointer",
        content: (col) => <div className="flex justify-center items-center">
            Report Page<BadgeInfo className="ml-2" />
          </div>
      },
      tb: {
        style: "p-0",
        content: (row, col) => ( 
          <div className="flex justify-center items-center min-w-[320px] max-md:min-w-0">
            {reportButtons.map((button, index) => {
              return (
                <div key={index}>
                  <Button
                    style={button.style}
                    icon={button.icon ? <button.icon size={15} /> : undefined}
                    title={button.title}
                    onClick={() => button.onClick(row)}
                  />
                </div>
              )
            })}
          </div>
        )
      },
    },
    {
      id: "isntall",
      label: "",
      sortable: false,
      th: {
        style: "flex items-center justify-center cursor-pointer",
      },
      tb: {
        style: "p-0",
        content: (row) => ( 
          <div className="flex justify-center items-center min-w-[170px]">
            <Button
              style="bg-white text-blue-600 border-blue-600"
              title="Install widget"
              onClick={() => console.log("row: ", row)}
            />
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

  const handleAddPage = (addPageInputValue: string) => {
    const largestId = filteredUrlData
      .reduce(
        (maxId: number, item: any) => Math.max(maxId, item.id)
        , 0
      );
    const newId = largestId + 1;
    setFilteredUrlData([ ...filteredUrlData, {
      id: newId,
      siteurl: addPageInputValue,
      license: "Obtain a license",
    }])
    setShowPageModal(false);
  }

  const handleDelete = (id: number) => {
    setFilteredUrlData(filteredUrlData.filter((item: any) => item.id !== id));
  }

  return (
    <>
      <Panel
        Action={
          <Button
            style="bg-blue-800"
            title="Add site"
            onClick={() => setShowPageModal(true)}
          />
        }
      >
        <div className="overflow-auto">
          <DataTable
            data={filteredUrlData}
            defaultSortBy={"siteurl"}
            columns={tablecolumns}
          />
        </div>
        <AddPageModal
          showPageModal={showPageModal}
          handleAddPage={handleAddPage}
          handleCloseModal={() => setShowPageModal(false)}
        />
      </Panel>
    </>
  )
}

export default Page;