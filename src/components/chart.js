import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    const final_result = _.round(_.sum(data)/data.length);
    console.log("Observation", final_result);

    return final_result;
}

const Chart = (props) => {

    return(
        <div>
            <Sparklines height={120} width={150} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                { average(props.data) } {props.units}
            </div>
        </div>
    )
};

export default Chart;