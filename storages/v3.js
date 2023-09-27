const getAllImgLaunches = async () =>{
    let res = await (await fetch("https://api.spacexdata.com/v3/launches")).json();
    let img = res.map(ele => {
        let {links: lk, links: {flickr_images: r}} = ele;
        return r;
    });
    return img;
}

const getAllImgRockets = async () =>{
    let res = await (await fetch("https://api.spacexdata.com/v3/rockets")).json();
    let imgs = res.map(ele =>{
        let {flickr_images} = ele
        return flickr_images;
    })
    return imgs;
}

const getAllImgShipsAndName = async () =>{
    let res = await (await fetch("https://api.spacexdata.com/v3/ships")).json();
    let imgs = res.map(ele =>{
        let {image, ship_id:id_name} = ele;
        return {img:image,name_id:id_name};
    });
    return imgs;
}

export default{
    getAllImgLaunches,
    getAllImgRockets
}

