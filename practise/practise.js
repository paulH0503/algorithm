      var num = "123";
      (function(num) {
        let result = [];
        const randomNum = (num, partical) => {
          if (num.length === 1 && result.indexOf(partical + num) === -1) {
              result.push(partical + num);
          }
          for (let i = 0; i < num.length; i++) {
            const cloneNum = [...num];
            let curNum = cloneNum.splice(i, 1);
            let remainingNum = cloneNum;
            randomNum(remainingNum, partical + curNum);
          }
        }
        randomNum(num.split(''), '');
        return result;
      })(num)