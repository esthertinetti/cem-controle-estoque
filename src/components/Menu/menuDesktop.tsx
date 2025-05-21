import Logo from '@/assets/Logo_branco.svg';
import MenuItem from './menuItem';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

function MenuDesktop() {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    const items = [
        {   
            label: "Dashboard", 
            icon: <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.92857 3.17857C8.92857 1.69978 10.1283 0.5 11.6071 0.5H13.3929C14.8717 0.5 16.0714 1.69978 16.0714 3.17857V22.8214C16.0714 24.3002 14.8717 25.5 13.3929 25.5H11.6071C10.1283 25.5 8.92857 24.3002 8.92857 22.8214V3.17857ZM0 13.8929C0 12.4141 1.19978 11.2143 2.67857 11.2143H4.46429C5.94308 11.2143 7.14286 12.4141 7.14286 13.8929V22.8214C7.14286 24.3002 5.94308 25.5 4.46429 25.5H2.67857C1.19978 25.5 0 24.3002 0 22.8214V13.8929ZM20.5357 4.07143H22.3214C23.8002 4.07143 25 5.27121 25 6.75V22.8214C25 24.3002 23.8002 25.5 22.3214 25.5H20.5357C19.0569 25.5 17.8571 24.3002 17.8571 22.8214V6.75C17.8571 5.27121 19.0569 4.07143 20.5357 4.07143Z" fill="white"/> </svg>, 
            href: "/home" 
        },
        {   
            label: "Insumos", 
            icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.23438C0 1.46272 0.620711 0.839294 1.389 0.839294H4.55332C5.747 0.839294 6.81045 1.60659 7.18809 2.74882L11.1858 14.7902C12.4923 14.812 13.6513 15.4398 14.3979 16.4033L23.1703 13.4649C23.8995 13.2207 24.6852 13.6174 24.9283 14.3455C25.1713 15.0736 24.7763 15.867 24.0515 16.1112L15.279 19.0496C15.24 21.3253 13.3909 23.1607 11.112 23.1607C8.81149 23.1607 6.94501 21.2861 6.94501 18.9755C6.94501 17.6327 7.57441 16.4381 8.55105 15.6708L4.55332 3.62947H1.389C0.620711 3.62947 0 3.00604 0 2.23438ZM10.6259 6.70303C10.3871 5.97061 10.7865 5.18151 11.5157 4.94609L13.4994 4.30086L14.3588 6.95589L17.0023 6.09268L16.1385 3.43765L18.1221 2.79242C18.8514 2.55264 19.637 2.95373 19.8714 3.68615L22.0157 10.3215C22.2544 11.054 21.8551 11.8431 21.1259 12.0785L14.5194 14.2322C13.7902 14.4719 13.0045 14.0708 12.7701 13.3384L10.6259 6.70303Z" fill="white"/></svg>, 
            href: "/insumos" 
        },
        {   label: "Massas", 
            icon: <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.5C7.43177 0.5 5.67031 1.80371 5.02214 3.625H3.16667C1.42005 3.625 0 5.02637 0 6.75V22.375C0 24.0986 1.42005 25.5 3.16667 25.5H15.8333C17.5799 25.5 19 24.0986 19 22.375V6.75C19 5.02637 17.5799 3.625 15.8333 3.625H13.9779C13.3297 1.80371 11.5682 0.5 9.5 0.5ZM9.5 3.625C9.91993 3.625 10.3227 3.78962 10.6196 4.08265C10.9165 4.37567 11.0833 4.7731 11.0833 5.1875C11.0833 5.6019 10.9165 5.99933 10.6196 6.29235C10.3227 6.58538 9.91993 6.75 9.5 6.75C9.08007 6.75 8.67735 6.58538 8.38041 6.29235C8.08348 5.99933 7.91667 5.6019 7.91667 5.1875C7.91667 4.7731 8.08348 4.37567 8.38041 4.08265C8.67735 3.78962 9.08007 3.625 9.5 3.625ZM5.54167 9.875H13.4583C13.8938 9.875 14.25 10.2266 14.25 10.6562C14.25 11.0859 13.8938 11.4375 13.4583 11.4375H5.54167C5.10625 11.4375 4.75 11.0859 4.75 10.6562C4.75 10.2266 5.10625 9.875 5.54167 9.875Z" fill="white"/></svg>, 
            href: "/massas" },
    ];

    return (
        <div className='hidden md:flex p-10 pt-4 max-w-96 w-full h-full flex-col items-center justify-between overflow-y-auto bg-[#005BE5]'>
            <nav className='mt-4 w-full'>
                <div className="h-44 flex">
                    <img src={Logo} alt="Logo CEM" className="m-auto"/>
                </div>

                {items.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}

            </nav>
            <div className='flex justify-end max-w-64 w-full'>
                <div className="transition-all w-full w-auto max-w-16" >
                    <Button className='p-2 [&_svg]:size-6 text-center w-full h-auto flex bg-transparent hover:bg-transparent shadow-none' onClick={() => handleLogout()}>
                        <LogOut color='#FFF' strokeWidth={3} /> 
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MenuDesktop;