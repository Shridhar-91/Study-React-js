import { useState } from "react";
import Interests from "./Interests";
import Settings from "./Settings";
import Profile from "./Profile";

const TabForm = () => {
    const [data, setData] = useState({
        name : "Shridhar",
        age: "32",
        email:"abc@gmail.com",
        interests: ["coding","music"],
        theme: "dark", 
    });
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            name : "Profile",
            component : Profile, 
        },
        {
            name : "Interests",
            component : Interests, 
        },
        {
            name : "Settings",
            component : Settings, 
        } 
    ];

    const ActiveComponent = tabs[activeTab].component;

    return (
        <div>
            <div className="heading-container">
                {tabs.map((t, index) => (
                    <div key = {index} className="heading" onClick = {() => setActiveTab(index)}>{t.name}
                    </div>
                ))}
            </div>  
            <div className="tab-body">
                <ActiveComponent data={data} setData={setData} />
            </div>  
        </div>
    );
};

export default TabForm;