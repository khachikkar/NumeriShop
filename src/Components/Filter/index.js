import React  from 'react';
import "./index.css"

import {Typography} from "antd";

const {Text} = Typography;


const Filter = () => {



    return (
        // <div className="filterCont">
        //     <Text style={{fontSize: "1rem"}}> Filter</Text>
        //     <div style={{width:'200px'}}>
        //         <Text style={{fontSize: "0.8rem"}}> By Price</Text>
        //         <Slider range defaultValue={[20, 50]} />
        //     </div>
        //     <div style={{width:'200px'}}>
        //         <Text style={{fontSize: "0.8rem"}}> By Rating</Text>
        //         <Slider min={1}  max={5} />
        //     </div>
        //     <Button>Apply</Button>
        //
        // </div>
        <div>
            <Text style={{fontSize: "1rem"}}> Filter</Text>
        </div>
    )
}

export default Filter