import styled from 'styled-components';

const ApplyBtn = styled.input.attrs(props=>({
    type:'button',
}))`
    margin-top: 0.3rem;
    margin-left: 11rem;
    height: 2.3rem;
    width: 4rem;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    background-color: white;
    cursor: pointer;
    outline: 0;
    font-size: 17px;
    &:hover{
        background-color: #008489;
        border: 1px solid #008489;
        color: white;
    }
`;

export default ApplyBtn;

