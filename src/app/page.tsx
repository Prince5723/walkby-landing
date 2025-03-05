import {FlipWordsDemo} from '@/components/flip-words';
import { TextRevealCardPreview } from "@/components/text-vanish";

export default function Home() {
  return (
    <>
    <div className="flex  items-center justify-between mx-8">
    <FlipWordsDemo/>
    <TextRevealCardPreview/>  
    </div>

    
    </>
  );
}
