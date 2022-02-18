let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    console.log(participant, completion);
    for (var i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]) {
        // console.log(participant[i])
          return participant[i];
          
      }
    }
  }
  console.log(solution(participant, completion))