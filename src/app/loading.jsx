import { ScaleLoader } from "react-spinners";


export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1E2937] flex items-center justify-center">
      
<ScaleLoader
  barCount={12}
  color="#00e6ad"
  height={50}
  margin={10}
  radius={3}
  width={5}
/>
     
    </div>
  );
}
