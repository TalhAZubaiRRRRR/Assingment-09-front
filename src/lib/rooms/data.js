export const fetchRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
    const data = await res.json();
    return data || [];
};
export const fetchFeaturdRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
    const data = await res.json();
    return data || [];
};