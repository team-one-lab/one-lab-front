// "id값이 "myChart"인 Canvas 태그에서 2D 컨텍스트를 가져온다.
const ctx = document.getElementById("myChart").getContext("2d");

/**  Chart 객체를 생성. */
const myChart = new Chart(ctx, {
    type: "bar", // bar 차트를 사용
    data: {
        labels: [
            "02.10(토)",
            "02.11(일)",
            "02.12(월)",
            "02.13(화)",
            "02.14(수)",
            "02.15(목)",
            "02.16(금)",
            "02.17(토)",
        ],
        // X축 레이블
        datasets: [
            {
                label: "# 날짜별 접속한 회원 수",
                // 데이터 세팅 라벨
                data: [12, 19, 13, 15, 32, 13, 17, 2],
                // Y축 데이터
                backgroundColor: [
                    // 바의 배경 색상
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                    // 바의 테두리 색상
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1,
                // 바의 테두리 두께
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                // Y축의 값이 0부터 시작하도록 설정
            },
        },
    },
});

/**type: 차트 종류를 지정. ex)bar, bubble, doughnut, line.
 * 
data: 차트 데이터를 넣어준다.

labels: 축제목이다.

datasets: 각 축에 들어갈 데이터를 넣어주고 색이나 두께 같은 꾸밈 요소도 지정할 수 있다.

**/
