export function findElementsInContentJson(elementNames, json) {
    if (elementNames.includes(json.name)) {
        return [json]
    } else if (json.elements) {
        return json.elements.reduce((acc, elem) => {
            return [...acc, ...findElementsInContentJson(elementNames, elem)]
        }, [])
    } else {
        return []
    }
}

//jsonElement expected to be a "figure"
export function getImageUrl(jsonElement, imageClass) {
    let imageUrl = null;
    try {
        imageUrl = jsonElement.elements
            .find((el) => el.attributes.class === imageClass)
            .attributes.src
    }catch(e){}
    return imageUrl;
}

export function ResourceResolver(resourceUrl, site){
    const url = process.env.NEXT_PUBLIC_RESOURCES_PUBLIC_BASE + resourceUrl + '?emk.site=' + site
    return url 
}