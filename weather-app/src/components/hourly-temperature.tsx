import type {ForecastData} from "@/api/types.ts";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {format} from "date-fns";

interface HourlyTemperatureData {
    data: ForecastData
}

const HourlyTemperature = ({data}: HourlyTemperatureData)=> {

    const chartData = data.list.slice(0,8).map((item) => ({
        time: format(new Date(item.dt * 1000), 'ha'),
        temp: Math.round(item.main.temp),
        feels_Like: Math.round(item.main.feels_like)
    }))

    return (
        <Card className='flex-1'>
            <CardHeader>
                <CardTitle>
                    Today's Temperature
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='h-[200px] w-full'>
                    <ResponsiveContainer height={'100%'} width={'100%'}>
                        <LineChart data={chartData}>
                            <XAxis dataKey={'time'} stroke='#888888' fontSize={12} tickLine={false} axisLine={false}/>
                            <YAxis stroke='#888888' fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

export default HourlyTemperature