import React, {useCallback, useState} from 'react';
import AppLayout from '../components/AppLayout';
import { PlusOutlined } from '@ant-design/icons';
const store=({images})=>{

    const [showImagesZoom,setShowImagesZoom]=useState(false);

    const onZoom=useCallback(()=>{
        setShowImagesZoom(true)
    },[])

    const onClose=useCallback(()=>{
        setShowImagesZoom(false)
    },[])

    if(images.length===1){
        return(
            <AppLayout>
                <section className="storeSection">
                    <div>
                        <h2>StoreTitle</h2>
                        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
                        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
                    </div>
                    <div>

                    </div>
                </section>
            </AppLayout>
        )
    }
    if(images.length===1){
        return(
            <AppLayout>
                <section className="storeSection">
                    <div>
                        <h2>StoreTitle</h2>
                        <img role="presentation" src={images[0].src} alt={images[0].src} width="50%" onClick={onZoom} />
                        <img role="presentation" src={images[1].src} alt={images[1].src} width="50%" onClick={onZoom} />
                    </div>
                    <div>

                    </div>
                </section>
            </AppLayout>
        )
    }
    return(
        <AppLayout>
            <section className="storeSection">
                <div>
                    <h2>StoreTitle</h2>
                    <img role="presentation" src={images[0].src} alt={images[0].src} width="50%" onClick={onZoom} />
                    <div role="presentation" style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
                        onClick={onZoom}>
                        <PlusOutlined />
                        <br />
                        {images.length - 1}
                        개의 사진 더보기
                    </div>
                </div>
            </section>
        </AppLayout>
    )

}

export default store;