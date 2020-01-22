export const ACTIVE_MALE = "male";
export const ACTIVE_FEMALE = "female";
export const MALE = "Male"
export const FEMALE = "Female"
export const ACTIVE_VIEW = true
export const DESACTIVE_VIEW = false


const initialState = {
    gender: FEMALE,
    active: false,
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
        case ACTIVE_VIEW: {
            return {
                ...state,
                active: true,
            }
        }
        case DESACTIVE_VIEW: {
            return {
                ...state,
                active: false,
            }

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
    dispatch({ type: ACTIVE_VIEW });
};
