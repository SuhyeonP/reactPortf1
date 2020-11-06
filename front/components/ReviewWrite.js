import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Form,Input,Button} from "antd";
import {ADD_REVIEWS_REQUEST} from "../reducers/review";
import useInput from "../hooks/useInput";

const ReviewWrite=()=>{
    const { imagePaths, addReviewDone } = useSelector(state => state.Reviews);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const id=useSelector((state)=>state.user.me?.id);
    const [text, setText] = useState('');

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    useEffect(() => {
        if (addReviewDone) {
            setText('');
        }
    }, [addReviewDone]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        if(id===undefined){
            alert('you are not the member')
            console.log(text)
            return ;
        }
        console.log('you are our member!')
        dispatch({
            type: ADD_REVIEWS_REQUEST,
            data: {
                text,
            },
        });
    }, []);
    return (
        <Form encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140}
                            placeholder="예약한 곳을 리뷰해주세요" />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" htmlType="submit">작성하기</Button>
            </div>
            <div>
                {imagePaths.map((v) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}
export default ReviewWrite