import React from "react";
import skill2_gif from "../img/gif/라이레이 2스.gif"

const AboutStat = () => {
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
                    <td>13,134</td>
                </tr>
                <tr>
                    <td>공격력</td>
                    <td>1,217</td>
                </tr>
                <tr>
                    <td>방어력</td>
                    <td>899</td>
                </tr>
                <tr>
                    <td>치명타 확률</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>치명타 피해</td>
                    <td>60%</td>
                </tr>
                <tr>
                    <td>효과 적중</td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td>효과 저항</td>
                    <td>35%</td>
                </tr>
            </tbody>
        </table>
    )
}

export default AboutStat;