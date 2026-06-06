'use server'

import { auth } from "../auth"
import { headers } from "next/headers"

export const addRooms = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const modifiedData = Object.fromEntries(formData.entries());
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(modifiedData),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
};

// export const deleteRooms = async (id) => {
//     const {token} = await auth.api.getToken({
//         headers:await headers()
//     })
// }