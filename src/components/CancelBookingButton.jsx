"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export default function CancelBookingButton({ id }) {
    console.log(id)

    const handleCancelBooking = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`,{
            method: "DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        const data  = await res.json()
        window.location.reload()
        console.log(data)
    }


  return (
    <AlertDialog>
      <Button
        
        variant="solid"
        size="sm"
        className="w-full mt-4 bg-red-500 "
      >
        Cancel Booking
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel this booking? 
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No, Keep Booking
              </Button>
              <Button
              
                slot="close"
                
                className="font-bold bg-red-500"
                onClick={handleCancelBooking}
              >
                Yes, Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
