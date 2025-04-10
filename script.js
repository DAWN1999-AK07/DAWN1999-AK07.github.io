function showCM(cm) {
  const messages = {
    CM02: "CM02 체결 예정: 다음 단계로 전환 중입니다.",
    CM03: "CM03 체결 예정: FEED BOARD 준비 중입니다.",
    CM04: "CM04 체결 예정: 연동 구조 테스트 대기.",
    CM05: "CM05 체결 완료: 최초의 5개 문서 완성!"
  };
  document.getElementById("cmOutput").innerHTML = messages[cm];
}
