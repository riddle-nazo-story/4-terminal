// ブラウザ判定（Safari / Chrome 以外は警告）
(function checkBrowser() {
  const ua = navigator.userAgent;

  const isChrome =
    ua.includes('Chrome') &&
    !ua.includes('Edg') &&
    !ua.includes('OPR');

  const isSafari =
    ua.includes('Safari') &&
    !ua.includes('Chrome');

  if (!isChrome && !isSafari) {
    alert(
      '⚠ 警告\n\n' +
      'この内部コンソールは\n' +
      'Safari または Google Chrome での使用を推奨しています。\n\n' +
      '他のブラウザでは、表示や挙動が正しくない可能性があります。'
    );
  }
})();

// ナビ切り替え
document.querySelectorAll('nav button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// リセット処理（同一タブ遷移）
document.getElementById('executeReset').addEventListener('click',()=>{
  const v = document.getElementById('resetAnswer').value;

  if(v === 'am01mam0'){
    location.href = 'https://sites.google.com/view/riddle-story-4/end1';
  }else if(v === '407xxuck'){
    location.href = 'https://sites.google.com/view/riddle-story-4/end2';
  }else{
    alert('認証に失敗しました');
  }
});

// 今日の日付（1の位マスク）
const t = new Date();
const y = t.getFullYear();
const m = String(t.getMonth()+1).padStart(2,'0');
const d = String(t.getDate()).padStart(2,'0');
const masked = d.slice(0,1)+'█';

document.querySelectorAll('.today-date').forEach(el=>{
  el.textContent = `${y}-${m}-${masked}`;
});