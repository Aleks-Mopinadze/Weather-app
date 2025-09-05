import {Button} from "@/components/ui/button.tsx";
import {RefreshCw} from "lucide-react";

const WeatherDashboard = () => {
    return(
        <div className='space-y-4'>
            {/*{Favorite cities}*/}
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
                <Button variant={'outline'} size={'icon'} >
                    <RefreshCw className='h-4 w-4' />
                </Button>
            </div>


        </div>
    )
 }

 export default WeatherDashboard