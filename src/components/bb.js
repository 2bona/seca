    let k = document.querySelectorAll(
    ".search-super-content-members > .chatlist > .chatlist-chat"
    );
 
    var BombLoop = async _ => {
          for (let index = 0; index < 4; index++) {
   setTimeout(() => {
            bomb(index + 1); 
        }, 4000 * index);
          }

    }
    //find client number
    // k.forEach((el,i)=>{  let d = k[i].getElementsByClassName("user-caption");
    //     let e = d[0].getElementsByClassName("dialog-title");
    //     let f = e[0].getElementsByClassName("user-title");
    //     let g = f[0].getElementsByClassName("peer-title");
    //     if (g[0].innerHTML == 'F F') {
    //        console.log(g[0].innerHTML, i);return}})



      let contacts = [];
      localStorage.setItem("chatlist", []);
      function bomb(i) {
        i = i - 1
        let d = k[i].getElementsByClassName("user-caption");
        let e = d[0].getElementsByClassName("dialog-title");
        let f = e[0].getElementsByClassName("user-title");
        let g = f[0].getElementsByClassName("peer-title");
        if (contacts.length < 5) {
          contacts.push(g[0].innerHTML);
          localStorage.removeItem("chatlist");
          localStorage.setItem("chatlist", contacts);
            k[i].click();
            setTimeout(() => {
              let input1 = document.querySelectorAll(".new-message-wrapper  > .input-message-container  > .input-message-input");
              input1[0].innerText = "feel this";
              input1[1].innerText = "feel this";
              input1[2]? input1[2].innerText = "feel this": '';
              input1[3]? input1[2].innerText = "feel this": '';
              //send message logic
            //   setTimeout(() => {
            //       let sendBtn = document.querySelectorAll(
            //           ".btn-send-container > .btn-send.record"
            //   );
            // setTimeout(() => {
            //     sendBtn[0].classList.remove("record");
            //         setTimeout(() => {
            //             sendBtn[0].classList.add("send");
            //                 setTimeout(() => {
            //                     sendBtn[0].click();
                console.log(g[0].innerHTML + " has been bombed");
            //                             setTimeout(() => {
            //                                   let input1 = document.querySelectorAll(".new-message-wrapper  > .input-message-container  > .input-message-input");
            //   input1[0].innerText = "done";
            //   input1[1].innerText = "done";
            //   input1[2]? input1[2].innerText = "done": '';
            //   input1[3]? input1[2].innerText = "done": '';
                setTimeout(() => {
                    let backBtn = document.querySelectorAll(
                        ".chat-info-container > .sidebar-close-button"
                );
                setTimeout(() => {
                    backBtn[0].click();
                    let k = document.querySelectorAll(".search-super-content-members > .chatlist > .chatlist-chat");
            //     }, 4500);
            //   }, 3500);
            //   }, 3000);
            // }, 2500);
            // }, 2000);
            }, 1500);
            }, 1000);
            }, 500);
        } else {
          return;
        }
      }