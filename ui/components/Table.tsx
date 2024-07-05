"use client";

import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TableProps {
  data: Record<string, any>[];
  defaultSortBy: string,
  columns: {
    id: string;
    label: any;
    sortable: boolean;
    th: {
      style: string;
      content?: any;
    };
    tb: {
      style: string;
      content?: any;
    };
  }[];
  searchKey?: string;
}

export const DataTable: React.FC<TableProps> = ({
  columns, 
  data,
  defaultSortBy,
  searchKey = '',
}) => {
  const [ sortConfig, setSortConfig ] = useState<{
    key: string;
    direction: 'ascending' | 'descending';
  }>({
    key: defaultSortBy,
    direction: 'ascending'
  });
  
  const [ sortedData, setSortedData ] = useState<Record<string, any>[]>([]);
  
  // Sortby Checker
  const handleSort = (sortKey: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === sortKey && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: sortKey, direction });
  };

  useEffect(() => {
    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setSortedData(sorted);
  }, [data, sortConfig]);
  // End Sortby Checker

  const filteredData = sortedData.filter(row => {
    const { id, ...rest } = row;
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
            columns.map((col, index) => {
              return (
                <Table.HeadCell 
                  key={index} 
                  onClick={col.sortable ? 
                    () => handleSort(col.id) : 
                    () => console.log("Unabled")
                  }
                >
                  <div className={col.th.style}>
                    {
                      <>
                        <p className="select-none">{col.label}</p>
                        {col.th.content && col.th.content(col)}
                        {col.sortable && sortConfig.key === col.id && (
                          sortConfig.direction === 'ascending' ?
                            <ChevronDown className="ml-2" /> :
                            <ChevronUp className="ml-2" />
                        )}
                      </>
                    }
                  </div>
                </Table.HeadCell>
              )
            }
          )}
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredData.length == 0 ? (
              <Table.Row >
                <Table.Cell>
                  No data
                </Table.Cell>
              </Table.Row>
            ) :
            filteredData.map((row, index) => {
              return (
                <Table.Row 
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {columns.map((col, colIndex) => (
                    <Table.Cell
                      key={colIndex}
                      className={col.tb.style}
                    >
                      {col.tb.content ? col.tb.content(row, col) : row[col.id]}
                    </Table.Cell>
                  ))}
                </Table.Row>
              )
            }
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
