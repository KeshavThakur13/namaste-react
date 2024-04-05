import React from "react";
import ReactDOM from "react-dom/client";
/*
 <div id="parent">
    <div id = "child1">
        <h1>This is first</h1>
        <h1>This is second</h1>
    </div>
    <div id = "child2">
        <h1>This is first</h1>
        <h1>This is second</h1>
    </div>
</div>
*/
// const heading = React.createElement('h1',{id:'heading'},'Hello World from Namaste React');
const heading = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child1' }, [React.createElement('h1', {}, 'This is first1🚀🚀'), React.createElement('h1', {}, 'This is second1')]), React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, 'This is first2'), React.createElement('h1', {}, 'This is second2')])]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);