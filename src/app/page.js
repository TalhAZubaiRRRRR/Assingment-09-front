import Banner from "@/components/Banner";
import CollabWith from "@/components/CollabWith";
import TopRatingRooms from "@/components/TopRatingRooms";
import UserFeedBack from "@/components/UserFeedBack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopRatingRooms/>
      <UserFeedBack/>
      <CollabWith/>
    </div>
  );
}
