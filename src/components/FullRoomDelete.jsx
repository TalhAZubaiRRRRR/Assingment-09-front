"use client";

import React from 'react';
import { MdDelete } from 'react-icons/md';
import { AlertDialog, Button } from "@heroui/react";

const FullRoomDelete = ({ room }) => {
  const { _id, name } = room;
  console.log(_id);

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
      method: "DELETE",
      headers: {
        // "authorization": `Bearer ${room.token}`,
        "content-type" : "application/json"
      },
    });

    const data = await res.json();
    console.log(data);

    // Redirect after delete
    window.location.href = "/rooms";
  };

  return (
    <AlertDialog>
      <Button className="w-full bg-red-500 h-12 hover:bg-red-600 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
        <MdDelete className="text-xl" />
        Delete Room
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all of its data. 
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default FullRoomDelete;