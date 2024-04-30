
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";


interface Props {
    children:React.ReactNode;
}

const Layout = ({children}:Props) =>{
    
    //const App: React.FC = () => {
    return ( <div className="flex flex-col min-h-screen">
        <Header>

        </Header>
        <Hero/>
        <div className="conatiner mx-auto py-10 flex-1">
            {children}</div>
        <Footer/>
    </div>
    
    );
};
export default Layout;