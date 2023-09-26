export const getAllImgLaunches = async () =>{
    let res = await (await fetch("https://api.spacexdata.com/v3/launches")).json();
    let img = res.map(ele => {
        let {links: lk, links: {flickr_images: r}} = ele;
        return r;
    });
    return img;
}

