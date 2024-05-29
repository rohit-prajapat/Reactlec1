
const head = React.createElement("h1",{id : "head"},"Hare Krishna!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);


const data = React.createElement("div",{id :"parent"},React.createElement("div",{id : "child"},React.createElement("h1",{},"Hare Bol!")));

root.render(data);

const data2 = React.createElement("div",{id:"parent"},
    [React.createElement('h1',{},"hi"),React.createElement('h1',{},'hello')]
);

root.render(data2);