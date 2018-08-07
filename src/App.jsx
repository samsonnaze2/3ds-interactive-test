import React from 'react';
import Helper from './App/helper';
import Servcies from './App/servcies';
import {
    Warpper,
    Header,
    VdoItem,
    SearchBox
} from './App/components/index.jsx';
import './App/style/App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_loadding: 0,
            keyword: "",
            vdoList: []
        };
        this.handleFilterVdo = this.handleFilterVdo.bind(this);
    };

    componentDidMount() {
        this.fetchData();
    };

    async fetchData() {
        const vdoList = await Servcies.getDataByMock();
        Helper.saveVdoToTemp(vdoList);
        this.setState({ vdoList: vdoList });
    };

    handleFilterVdo(title) {
       const resultVdoList = Helper.search(title);
       this.setState({ vdoList: resultVdoList });
    };

    renderVdoList(vdoItems) {
        let result = [];
        if (vdoItems.length === 0) return null;

        vdoItems.forEach((item, index) =>
            result.push(<VdoItem key={`vdo-item-${index}`} videoId={item.id.videoId}/>)
        );

        return result;
    };

    render() {
        const vdoItems = this.state.vdoList.items || [];
        return (
            <Warpper>
              <Header />
              <SearchBox onChange={this.handleFilterVdo}/>
              <div className="row rowVdo">{this.renderVdoList(vdoItems)}</div>
            </Warpper>
        );
    };

};

export default App;