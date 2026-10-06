const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");
menuBtn.onclick=()=>menu.classList.toggle("open");
document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>menu.classList.remove("open"));

document.getElementById("year").textContent=new Date().getFullYear();

const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");

function openModal(type){
  const data={
    admission:`<h2>🎓 प्रवेश जानकारी</h2><p>प्रवेश की कक्षा, सीट, शुल्क और आवश्यक दस्तावेजों की नवीन जानकारी के लिए विद्यालय कार्यालय से संपर्क करें।</p><a class="btn" href="tel:+918299260285">📞 8299260285</a>`,
    notice:`<h2>📢 नोटिस बोर्ड</h2><p>यहाँ परीक्षा कार्यक्रम, अवकाश, प्रवेश, कार्यक्रम और अन्य विद्यालय सूचनाएँ अपडेट की जा सकती हैं।</p>`,
    contact:`<h2>☎️ विद्यालय संपर्क</h2><p><b>फोन:</b> <a href="tel:+918299260285">8299260285</a></p><p><b>ईमेल:</b> <a href="mailto:saraswatiintercollege77@gmail.com">saraswatiintercollege77@gmail.com</a></p><p><b>पता:</b> पंचघरा, तहसील-फतेहपुर, बाराबंकी, उत्तर प्रदेश</p>`
  };
  modalContent.innerHTML=data[type]||data.notice;
  modal.classList.add("show");
}
function closeModal(e){
  if(!e || e.target===modal || e.target.classList.contains("close")) modal.classList.remove("show");
}
function showImage(el){
  document.getElementById("bigImage").src=el.querySelector("img").src;
  document.getElementById("imageTitle").textContent=el.querySelector("b").textContent;
  document.getElementById("imageModal").classList.add("show");
}
function showPlaceholder(title){
  document.getElementById("bigImage").removeAttribute("src");
  document.getElementById("imageTitle").textContent=title+" — फोटो बाद में यहाँ लगाया जा सकता है।";
  document.getElementById("imageModal").classList.add("show");
}
function closeImage(){document.getElementById("imageModal").classList.remove("show")}
window.addEventListener("scroll",()=>document.getElementById("topBtn").style.display=scrollY>400?"block":"none");
