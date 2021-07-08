import React from "react";
import skill2_gif from "../img/gif/라이레이 2스.gif"

const AboutStat = ({stat}) => {
    console.log(stat);

    return (
        <table>
            <thead>
                <tr>
                    <th>계수명</th>
                    <th>계수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>체력</td>
                    <td>{stat[0]}</td>
                </tr>
                <tr>
                    <td>공격력</td>
                    <td>{stat[1]}</td>
                </tr>
                <tr>
                    <td>방어력</td>
                    <td>{stat[2]}</td>
                </tr>
                <tr>
                    <td>치명타 확률</td>
                    <td>{stat[3]}</td>
                </tr>
                <tr>
                    <td>치명타 피해</td>
                    <td>{stat[4]}</td>
                </tr>
                <tr>
                    <td>효과 적중</td>
                    <td>{stat[5]}</td>
                </tr>
                <tr>
                    <td>효과 저항</td>
                    <td>{stat[6]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default AboutStat;