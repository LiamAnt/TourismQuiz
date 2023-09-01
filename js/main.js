$(document).ready(function () {

  // $('.middler').hide();
  // $('.footer').show();
  // $('.start').hide();
  // $('.result').show();

  /* 計分 */
  let ansArr = [0, 0, 0];
  let ans = 0;

  /* 按鈕效果 */
  $('.primaryBtn').hover(function() {
    $(this).find('img').attr('src', '../images/arrow_icon_hover.svg');
  }, function() {
    $(this).find('img').attr('src', '../images/arrow_icon.svg');
  });

  $('.primaryBtn.result_btnRefresh').hover(function() {
    $(this).find('img').attr('src', '../images/refresh_icon_hover.svg');
  }, function() {
    $(this).find('img').attr('src', '../images/refresh_icon.svg');
  });
  
  /* 開始 */
  // 作答
  $('.btn_start').click(function() {
    $('.middler, .start').hide();
    $('.footer, .q1').show();
  });

  /* Q1 */
  // 作答
  $('.btn_q1').click(function() {
    ans = $(this).attr('value');
    ans -= 1;
    ansArr[ans] += 1;
    $('.q1').hide();
    $('.q2').show();
  });

  /* Q2 */
  // 作答
  $('.btn_q2').click(function() {
    ans = $(this).attr('value');
    ans -= 1;
    ansArr[ans] += 1;
    $('.q2').hide();
    $('.q3').show();
  });

  /* Q3 */
  // 作答
  $('.btn_q3').click(function() {
    ans = $(this).attr('value');
    ans -= 1;
    ansArr[ans] += 1;
    $('.q3').hide();
    $('.q4').show();
  });

  /* Q4 */
  // 作答
  $('.btn_q4').click(function() {
    ans = $(this).attr('value');
    ans -= 1;
    ansArr[ans] += 1;
    $('.q4').hide();
    $('.q5').show();
  });

  /* Q5 */
  // 作答
  $('.btn_q5').click(function() {
    ans = $(this).attr('value');
    ans -= 1;
    ansArr[ans] += 1;
    showResult(ansArr);
    $('.q5').hide();
    $('.result').show();
  });

  /* 顯示對應結果 */
  function showResult(ansArr) {
    // 取得要顯示的結果編號
    const ansMax = Math.max(...ansArr);
    let ansIndexes = [];
    for (let i = 0; i < ansArr.length; i++) {
      if (ansArr[i] === ansMax) {
        ansIndexes.push(i);
      }
    }
    let ansIndex = Math.floor(Math.random() * ansIndexes.length);
    const resultAns = ansIndexes[ansIndex];
    // 顯示對應結果
    resultData = [
      {
        personality: '巷仔內',
        pic: '../images/deer_a.svg',
        color: '#E05934',
        tags: [
          '熟門熟路第一名',
          '吃要吃在地',
          '產銷履歷要清楚'
        ],
        description: '旅遊中你最關心<span class="text--bold">社會經濟永續發展</span>，相當適合有支持地產地銷產品的住宿，一邊品味地方，一邊支持在地是你的哲學！'
      },
      {
        personality: '真 · 文青',
        pic: '../images/deer_b.svg',
        color: '#1783AD',
        tags: [
          '好奇寶寶就是你',
          '地方的故事',
          '老屋的靈魂'
        ],
        description: '旅遊中你最關心<span class="text--bold">文化的永續發展</span>，你珍惜每一個地方的過去和故事，所到之處都想一探究竟的你，肯定是個智多星！'
      },
      {
        personality: '凹豆咖',
        pic: '../images/deer_c.svg',
        color: '#009F7F',
        tags: [
          '遠離人類跑第一',
          '見山爬山',
          '見水游水'
        ],
        description: '旅遊中你最關心<span class="text--bold">環境永續發展</span>，相當適合入住山林或靠海系民宿，大自然的健康就靠你了！'
      }
    ]
    $('.result_pic').attr('src', resultData[resultAns].pic);
    $('.result_text--hug').html(resultData[resultAns].personality);
    $('.tagWrap').html('');
    resultData[resultAns].tags.forEach(function(item) {
      $('.tagWrap').append('<div class="tag"># ' + item + '</div>');
    });
    $('.result_text--hug').css("color", resultData[resultAns].color);
    $('.tag').css("background-color", resultData[resultAns].color);
    $('.result_desc').html(resultData[resultAns].description);
  }

  // 儲存測驗結果圖
  $('.result_download').click(function() {
    html2canvas(document.getElementById('screenshot_area')).then(function(canvas) {
      document.getElementById('screenshot_temp').appendChild(canvas);
      let a = document.createElement('a');
      a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      a.download = 'image.jpg';
      a.click();
    });
  });
  
  // 再玩一次
  $('.result_btnRefresh').click(function() {
    location.reload();
  });
});