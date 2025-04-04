import React, {useState, createContext, useContext} from 'react';

const TabContext = createContext();

function TabGroup({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div>{children}</div>
        </TabContext.Provider>
    );
}

function Tab({ children, index}) {
    const { activeIndex, setActiveIndex} = useContext(TabContext);

    return (
        <button
            style={{ 
                fontWeight: activeIndex === index ? 'bold' : 'normal',
                marginRight: '10px',
            }}
            onClick={() => setActiveIndex(index)}
        >
            {children}
        </button>
    );
}

function TabPanel({ children, index }) {
    const { activeIndex } = useContext(TabContext);

    return activeIndex === index ? <div style={{ marginTop: '10px'}}>{children}</div> : null;
}

TabGroup.Tab = Tab;
TabGroup.TabPanel = TabPanel;

export default TabGroup;