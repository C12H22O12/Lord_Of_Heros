import React from "react"
import styled from "styled-components"

let Panel = styled.div`
`;

function Heroes(params) {
    return (
        <div>
            <div id="defaultInfo">
                <span>
                    <div>영웅 사진 들어갈 곳</div>
                    <div>영웅 직업이랑 클래스</div>
                </span>
                <span>
                    스텟 들어갈 곳
                </span>
            </div>
            <div>무각 1각 2각</div>
            <div id="skillInfo">
                스킬 컴포넌트?를 주는 게 더 나을 듯
            </div>
            <div id="story">
                영웅 스토리
            </div>
            <div id="voice">
                <VoiceComponent />
            </div>
        </div>
    );
}

let ex = {
    "Heroes": [
        {
            "id": 1,
            "name": "자이라",
            "class": "가디언",
            "type": "빛",
            "stat": [
                {
                    "noAwake": [
                        "img",
                        11820,
                        855,
                        871,
                        20,
                        50,
                        0,
                        5
                    ]
                }, {
                    "midAwake": [
                        "img",
                        12411,
                        898,
                        915,
                        25,
                        55,
                        5,
                        15
                    ]
                }, {
                    "fullAwake": [
                        "img",
                        13593,
                        983,
                        1002,
                        30,
                        60,
                        20,
                        45
                    ]
                }
            ],
            "story": "누군가를 공격하는 방법에는 매우 여러 가지가 있지요. 그중 가장 비겁한 방법은 스스로 결정할 수 없었던 사실을 짚는 것입니다. 자이라도 비슷한 공격을 받았는데, 노예 출신이라는 점이 그녀의 유일한 약점이었기 때문이죠. 공격자들은 그 이유 하나만으로 자이라가 얼마나 치열한 삶을 살아왔는지에 대해서는 상상하지도, 신경 쓰지도 않았습니다. 하지만 보십시오. 정장의 광풍, 쏜즈 오더의 기사단장, 플로렌스의 왕이 가진 가장 단단한 방패.",
            "voice": [
                "딱히 좋아하는 음식은 없다고 생각했는데, 요즘은 주변의 미식가 분들 덕분에 즐거운 나날을 보내고 있습니다.",
                "분노는 잘만 이용하면, 큰 힘이 되어주죠. 스스로 잡아먹히지 않도록, 항상 주의해야 합니다.",
                "쏜즈오더의 기사 단장이었던 때는 여러가지 고려할 것이 많았습니다. 작게는 인간 관계부터 크게는 귀족 세력들의 견제까지. 꽤 지치는 일이었죠.",
                "오셨습니까. 근무 중 이상 없습니다.",
                "전투에 나설 때면, 저도 모르는 힘이 용솟음 칩니다. 내면의 투쟁심이라는 걸까요.",
                "노예 시절 겪었던 일들은, 썩 좋은 경험은 아니었죠. 하지만, 그것들을 겪었기 때문에 세상을 바꾸고 싶다는 생각이 더 강하게 들었는지 모릅니다. 이런 마음 하나하나가 모여 더 좋은 세상이 왔으면 합니다.",
                "세상에 함부로 대해도 되는 존재는 없다고 생각해왔지만, 현실은 그렇지 않아 ",
                "카를로스 폐하는 플로렌스를 위하여 어떤 일이든 하실 수 있는 분이죠. 변화를 두려워하지 않고, 확신과 신념이 있으셨습니다.",
                "제 능력만으로 모든 것을 거머쥐었다고 생각하진 않습니다. 물론, 주변의 도움만으로 구해졌다고 생각하지 않고요.",
                "솔직함이, 더 큰 실례를 만듭니다.",
                "크롬 경은 존경스러운 기사입니다. 만약 제가 아니라 크롬 경께서 기사단장이었다면, 그것도 꽤 잘 어울렸을 겁니다.",
                "요정의 현명함은 따라갈 수 없습니다. 지식과 지혜는 다르니, 그만한 세월을 필요로 하겠죠.",
                "모름지기 기사란, 전장에서 빛을 발하는 법입니다. 실망시켜드리지 않겠습니다.",
                "플로렌스에 있었을 때는, 정말 별별 얘기를 다 들었습니다. 헛소문인 걸 알면서도 상처 받는 건 어쩔 수 없더군요. 아, 지금은 괜찮습니다.",
                "전장에서 등을 맡길 수 있는 동료는 절대 쉽게 얻을 수 있는 게 아니죠. 함께 사지를 헤쳐나가는 과정에서, 자연스럽게 형성되는 유대감이 필요한 겁니다.",
                "ㄴ,네? 아뇨! 전혀 불만 없습니다. 단장직은 오히려 부담이었죠. ",
                "로드께서, 차별이 없는 세상을 만들어주시리라 믿습니다.",
                "만약, 제가 운이 좋지 않았다면, 그리고, 재능이 없었다면, 그저 한명의 노예로 잊혀졌겠죠. 평범한 이들도 마음껏 웃을 수 있는 세싱이 되길.",
                "기사는, 항상 다른 이들의 모범이 되어야합니다. 무거운 책임이지만 우리가 있기에 국민들이 살아갈 수 있으니까요.",
                "굳이 성이 필요하지 않습니다. 가문이 없어도 충분히 스스로를 증명할 수 있다고 생각하니까요.",
                "아, 오셨군요! 로드께서 돌아오셔서 기쁩니다.",
                "제가 모르던 세상을 보여주셔서 감사합니다. 로드.",
                "사실, 제게 아발론을 추천한 분이 바로 카를로스 폐하입니다. 그 말씀을 꺼내기까지 굉장히 고민하셨죠. 아주 많이 분해보이기도 하셨고. 부디 그 분에게도 신경을 써주셨음 합니다.",
                "모름지기 기사란, 전장에서 빛을 발하는 법입니다. 실망시켜드리지 않겠습니다.",
                "기사로서의 명예란, 목숨과도 같은 것입니다. 그런 의미에서, 저는 몇번이고 죽음을 맞이했죠. 하지만 무슨 일이 있어도 절대 포기하지 않겠습니다."
            ]
        }
    ]
}

function VoiceComponent(ex) {
    console.log(ex);

    return (
        <div>
            <VoiceBlock/>
        </div>
    );
}

function VoiceBlock(params) {
    return(
        <div>
        <button>aaa</button>
        <Panel>abc</Panel>

        </div>
    );
}

export default Heroes;