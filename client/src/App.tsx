import React from "react";
import Content from "./components/Content/Content";
import {AppStoreProvider} from "./store/store";

const App = () => (
    <div>
        <AppStoreProvider>
            <Content />
        </AppStoreProvider>
    </div>
);

export default App;