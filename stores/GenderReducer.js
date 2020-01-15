export const ACTIVE_MALE = "male";
export const ACTIVE_FEMALE = "female";
export const MALE = "Male"
export const FEMALE = "Female"


const initialState = {
    gender: FEMALE
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_MALE: {
            return {
                ...state,
                gender: MALE
            };
        }
        case ACTIVE_FEMALE: {
            return {
                ...state,
                gender: FEMALE
            };
        }
        default: {
            return { ...state };
        }
    }
};

//dispatch como export, apenas exporta as ações
export const genderChange = () => dispatch => {
    dispatch({ type: ACTIVE_MALE });
    dispatch({ type: ACTIVE_FEMALE });
};
