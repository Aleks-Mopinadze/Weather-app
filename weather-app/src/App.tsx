import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import {ThemeProvider} from "@/context/theme-provider.tsx";
import City from "@/pages/city.tsx";
import WeatherDashboard from "@/pages/weather-dashboard.tsx";
function App() {
    return (
       <BrowserRouter>
           <ThemeProvider defaultTheme='dark'>
               <Layout>
                   <Routes>
                       <Route path='/' element={<WeatherDashboard/>} />
                       <Route path='/city/:cityName' element={<City/>} />
                   </Routes>
                   Hello
               </Layout>
           </ThemeProvider>
       </BrowserRouter>
    )
}

export default App