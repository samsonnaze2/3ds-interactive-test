import { fromJS } from 'immutable';

class Helper {

    tempVdoList = [];

    saveVdoToTemp(vdoList) {
        this.tempVdoList = fromJS(vdoList).toJS();
    };

    search(title) {
        if(title==="") return this.tempVdoList;
        
        let vdoItems = this.tempVdoList.items || [];
        const findData = vdoItems.filter(item => item.snippet.title.search(title) > -1);
        vdoItems.items = findData;
        return vdoItems;
    };
};

export default new Helper();