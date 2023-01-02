
export const BASE_URL = "https://swapi.dev/api"

export const extractIdFromAPI = (url, path) => {
    const textToRemove = `${BASE_URL}/${path}`
    return url.replace(textToRemove, "").replace("/", "");
}

export const extractIdFromPath = (url, path) => {
    return url.replace(path,"");
};

export const extractPageNumber = (url) => {
    if(url === null || url === undefined){
        return null
    }
    return url.replace(`${BASE_URL}/people/?page=`, "");
};

const convertHeight = (height) => {
    const stringHeight = height.toString();
    const splitedHeight = stringHeight.split(".");
    const meters = (splitedHeight[0] !== undefined ? splitedHeight[0] : 0);
    const centimeters = (splitedHeight[1] !== undefined ? splitedHeight[1] : 0);
    
    return `${meters} metro(s) e ${centimeters} centímetros`;
};

export const convertHeightStarShip = (height) => {
    if(height === undefined){
      return "";
    }
    return convertHeight(height);
};

export const convertHeightPerson = (height) => {
    const partialHeight =  height/100;
    return convertHeight(partialHeight);
};