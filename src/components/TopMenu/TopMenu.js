import React from 'react';
import {Header,LeftSide,RightSide, InputWrapper, ImageWrapper, LogoName, Day, DetailedDate,CurrentTime  } from "./TopMenu.style";
import Logo from  "../../images/logo.png";
import {ReactComponent as ClockIcon} from "../../images/clock-icon.svg";

const TopMenu = () => {

    const now = new Date();
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    let day = days[ now.getDay() ];
    if(day > 10){
       return  day + '0';
    }
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let month = months[ now.getMonth() ];
    let dayNum = now.getDate();
    let year = now.getFullYear();
    let hoursAndMinutes = now.getHours() + ':' + minutes;

    return (
        <Header>
            <LeftSide>
                <ImageWrapper>
                    <img src={Logo} alt="logo"/>
                    <LogoName>Inventory</LogoName>
                </ImageWrapper>
                <InputWrapper>
                    <input placeholder="search" type="text"/>
                </InputWrapper>
            </LeftSide>
            <RightSide>
                <Day>
                    {day}
                </Day>
                <DetailedDate>
                    {dayNum}, {month}, {year}
                    <CurrentTime>
                        <ClockIcon/> {hoursAndMinutes}
                    </CurrentTime>
                </DetailedDate>

            </RightSide>
        </Header>
    );
};

export default TopMenu;