'use client'

import { useState } from "react";
import { Button } from "@/ui/elements/Button";
import { Modal, TextInput } from "flowbite-react";

interface AddPageModalProps {
  showPageModal: boolean;
  handleCloseModal: () => void;
  handleAddPage: (arg0: string) => void;
}

export const AddPageModal: React.FC<AddPageModalProps> = ({ 
  showPageModal, 
  handleCloseModal, 
  handleAddPage 
}) => {
  const [ addPageInput, setAddPageInput ] = useState<string>("");

  return (
    <>
      <Modal
        show={showPageModal}
        size="lg"
        onClose={handleCloseModal}
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
            placeholder="Close page"
            required
            value={addPageInput}
            onChange={
              (e) => setAddPageInput(e.target.value)
            }
          />
        </Modal.Body>
        <Modal.Footer className="flex justify-center items-center">
          <Button 
            style="" 
            title="Ok"
            disabled={!addPageInput}
            onClick={() => {
              handleAddPage(addPageInput)
              setAddPageInput("")
            }}
          />
          <Button
            style="bg-slate-800"
            title="Close"
            onClick={() => {
              handleCloseModal()
              setAddPageInput("")
            }}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}