import { AudioProvider } from "@/components/metronome/AudioContextProvider";
import SequencerControls from "@/components/metronome/SequencerControls";

export default function Metronome() {
    return (
        <AudioProvider>
            <div>
                <SequencerControls />
            </div>
        </AudioProvider>
    )
}