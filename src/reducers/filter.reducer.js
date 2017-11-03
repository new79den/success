
const defaultSelect = {
    select: []
};

export default (state = defaultSelect, action) => {
    const {type, payload} = action;

    switch (type) {
        case "FILER_ARTICLE" : {
            return Object.assign({},state, {select: payload.select});
        }
    }
    return state
}

