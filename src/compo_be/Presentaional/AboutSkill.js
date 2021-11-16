import React from "react";
import skill2_gif from "../img/gif/라이레이 2스.gif"

const AboutSkill = () => {
    return (
        <div class="aboutSkill">
            <img src={skill2_gif} alt="skill2"/>
            <table>
                <thead>
                    <th>레벨</th>
                    <th>내용</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Lv.2</td>
                        <td>피해량 10%증가</td>
                    </tr>
                    <tr>
                        <td>Lv.3</td>
                        <td>약화 효과 발동 10%증가</td>
                    </tr>
                    <tr>
                        <td>Lv.4</td>
                        <td>피해량 10%증가</td>
                    </tr>
                    <tr>
                        <td>Lv.2</td>
                        <td>효과 지속 시간 1턴 증가</td>
                    </tr>
                    <tr>
                        <td>Lv.6</td>
                        <td>쿨타임 1턴 감소</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AboutSkill;