import React from 'react';
import {Badge,Button} from 'reactstrap';

class badgeexample extends React.Component{
    render()
    {
        return(
            <div>


<h1>h1 heading <Badge>new</Badge></h1>
<h2>h2 heading <Badge>h2</Badge></h2>
<h4>H4 heading <Badge>h4</Badge></h4>

<Button href="#" color="primary" outline  >
Hello button <Badge color="primary" pill >hi</Badge>
</Button>

            </div>
        );
    }
}

export default badgeexample;