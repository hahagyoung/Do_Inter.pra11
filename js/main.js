//모든 article 요소를 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//article 요소의 개수만큼 반복
for(let el of items){
    //현재 반복하는 article 요소에 mouseenter이벤트 발생
    el.addEventListener("mouseenter",e=>{
        //자식 요소인 video 재생
        e.currentTarget.querySelector("video").play();
    });
    //현재 반복하는 article 요소에 mouseleave 이벤트 발생
    el.addEventListener("mouseleave",e=>{
        e.currentTarget.querySelector("video").pause();
    });

    //현재 반복돌고 있는 article요소에 click 이벤트 발생 시
    el.addEventListener("click", e=>{
        //스크롤 위치 초기화
        window.scrollTo(0,0);

        //제목과 본문의 내용, video요소의 src값을 변수에 저장
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        //aside 요소는 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업 패널 활성화
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    //닫기 버튼 클릭 시
    close.addEventListener("click", ()=>{
        //asdie 요소에 클래스 on을 제거해 비활성화, 안쪽의 영상 재생중지
        aside.classList.remove("on")
        aside.querySelector("video").pause();
    });
}