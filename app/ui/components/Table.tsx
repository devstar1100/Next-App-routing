"use client";

import { ChevronDown, ChevronUp, RefreshCcw, Trash2 } from "lucide-react";
import { Badge, Checkbox, Table } from "flowbite-react";
import React, { useState } from "react";
import { tableRow } from "../../../utiles/constants";
import { CustomButton } from "../elements/Button";

interface CustomTableProps {
  tableData: tableRow[];
  tableHeaders: {
    title: string,
    checkBox: boolean,
  }[];
  searchKey: string;
  handleTrash: any;
}

export const CustomTable: React.FC<CustomTableProps> = ({
  tableHeaders, 
  tableData, 
  searchKey, 
  handleTrash
}) => {
  const [sortConfig, setSortConfig] = useState<{ 
    title: keyof tableRow; 
    direction: 'ascending' | 'descending' 
  } | null>(null);

  const handleSort = (title: keyof tableRow) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.title === title && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ title: title, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...tableData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.title] < b[sortConfig.title]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.title] > b[sortConfig.title]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [tableData, sortConfig]);

  const filteredData = sortedData.filter(row => {
    const { id, ...rest } = row;  // Destructure to exclude the 'id' field
    return Object.values(rest).some(value =>
      value.toString().toLowerCase().includes(searchKey.toLowerCase())
    );
  });

  return (
    <div className="min-w-[700px]">
      <Table 
        hoverable
        theme={{
          body: {
            cell: {
              base: "px-1 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
            }
          },
          head: {
            cell: {
              base: "px-1 py-3 bg-gray-50 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
            }
          }
        }}
      >
        <Table.Head className="border-b">
          {
            tableHeaders.map((key, index) => {
              return (
                <Table.HeadCell 
                  className="min-w-[110px]"
                  key={index} 
                  onClick={() => handleSort(key.title as keyof tableRow)}
                >
                  <div className="flex items-center cursor-pointer">
                    {key.checkBox && <Checkbox />}
                    <div className="flex justify-center items-center pl-3">
                      {key.title}
                      {sortConfig && sortConfig.title === key.title && (
                        sortConfig.direction === 'ascending' ? 
                        <ChevronDown className="ml-2" /> : 
                        <ChevronUp className="ml-2" />
                      )}
                    </div>
                  </div>
                </Table.HeadCell>
              )
            }
          )}
          <Table.HeadCell className="min-w-[400px] max-md:min-w-72">
          </Table.HeadCell>
          <Table.HeadCell>
            <Trash2 
              className="cursor-pointer" 
              size={20} 
            />
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            filteredData.length == 0 ? 
            <>
              <Table.Row >
                <Table.Cell>
                  No data
                </Table.Cell>
              </Table.Row> 
            </> 
            : 
            filteredData.map((row, index) => {
              return (
                <Table.Row 
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell 
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    <div className="flex items-center">
                      <Checkbox />
                      <div className="flex justify-center items-center pl-3">
                        {row.page}
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-center">
                      {row.scan}
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-center">
                      <Badge
                        color="failure" 
                        size="sm"
                      >
                        {row.avvertenze}
                      </Badge>
                    </div>
                  </Table.Cell>
                  <Table.Cell className=" p-0">
                    <div className="flex justify-center items-center">
                      <CustomButton
                        style="bg-white text-blue-600 border-blue-600"
                        icon={<RefreshCcw size={15} />}
                        title="Rescan pagaina"
                        onClick={() => {console.log("Clicked!")}}
                      />
                      <CustomButton
                        style="bg-blue-600 text-white border-white"
                        onClick={() => {console.log("Clicked!")}}
                        title="Vedi report pagina"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Trash2 
                      className="cursor-pointer" 
                      size={20}
                      onClick={() => handleTrash(row.id)}
                    />
                  </Table.Cell>
                </Table.Row>
              )
            }
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
