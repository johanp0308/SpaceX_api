# SpaceX Api Query

## Consultation of requests to obtain images of the launches.

**Method** : `GET`

**URL** : `https://api.spacexdata.com/v4/launches`

**Version** : `v3`

**Storage** : `v3.js`

**Modulo** : `getAllImgLaunches

**Auth required** : `False`

## Success Responses

**Code** : `200 OK``

```json
    [
        [
            "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
            "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
            "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"
        ],
        ...
    ]
```


## Consultation of requests to obtain images of the rocket.

**Method** : `GET`

**URL** : `https://api.spacexdata.com/v4/launches`

**Version** : `v3`

**Storage** : `v3.js`

**Modulo** : `getAllImgRockets``

**Auth required** : `False`

## Success Responses

**Code** : `200 OK``

```json
    [
        [
            "https://imgur.com/DaCfMsj.jpg", 
            "https://imgur.com/azYafd8.jpg" 
        ],
        ...
    ]
```

