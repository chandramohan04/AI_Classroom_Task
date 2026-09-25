function by(id){return document.getElementById(id)} function v(id){return by(id)?.value?.trim()||""} function set(id,t){by(id).textContent=t}
function resume(){set('out',`PROFESSIONAL RESUME

${v('name')}
${v('contact')}

OBJECTIVE
${v('objective')}

EDUCATION
${v('education')}

SKILLS
${v('skills')}

EXPERIENCE
${v('experience')}

Demo mode: connect your AI backend for live generation.`)}
function notes(){set('out',`STUDY NOTES

Topic: ${v('topic')}

• Main concept
• Important definitions
• Key examples
• Quick revision points

Demo mode: connect your AI backend for real summarization.`)}
let slides=[],si=0;function ppt(){slides=Array.from({length:5},(_,i)=>({t:`${v('topic')||'AI Topic'} — Slide ${i+1}`,b:'• Introduction and context\n• Core concepts\n• Practical example\n• Key takeaway'}));si=0;showSlide()}function showSlide(){if(!slides.length)return;set('st',slides[si].t);set('sb',slides[si].b);set('sc',`${si+1}/5`)}function prev(){si=Math.max(0,si-1);showSlide()}function next(){si=Math.min(4,si+1);showSlide()}
function mind(){set('out',`# ${v('syllabus')||'Syllabus'}
## Unit 1
- Fundamentals
- Definitions
## Unit 2
- Core concepts
- Examples
## Unit 3
- Practice
- Revision`)}
function quiz(){let q=[['Which is a useful study method?',['Practice','Skip revision','Avoid examples','Do nothing'],0],['What should structured AI output use?',['JSON','Random text','Only images','No format'],0],['What is the purpose of a quiz?',['Check learning','Delete notes','Avoid practice','None'],0]];by('quiz').innerHTML='';let score=0;q.forEach((x,i)=>{let d=document.createElement('div');d.className='card';d.innerHTML=`<h3>${i+1}. ${x[0]}</h3>`+x[1].map((o,j)=>`<button class="secondary" style="display:block;width:100%;text-align:left" onclick="answer(this,${j},${x[2]})">${o}</button>`).join('');by('quiz').appendChild(d)});set('score','Score: 0/3')}function answer(b,j,a){if(b.parentElement.dataset.done)return;b.parentElement.dataset.done=1;if(j===a){b.style.background='#dcfce7';b.style.color='#166534';window.qscore=(window.qscore||0)+1}else{b.style.background='#fee2e2';b.style.color='#991b1b'}set('score',`Score: ${window.qscore||0}/3`)}
function chat(){let q=v('question');if(!q)return;let c=by('chat');c.innerHTML+=`<div class="msg user">${q}</div>`;by('question').value='';setTimeout(()=>c.innerHTML+=`<div class="msg bot">Demo tutor response for: ${q}

Explain the concept simply, add an example, then give a practice question. Connect your AI API for live answers.</div>`,250)}function clearChat(){by('chat').innerHTML=''}
function flash(){let d=[['What is active recall?','Testing yourself from memory.'],['Why use flashcards?','For quick retrieval practice.'],['How to revise?','Repeat difficult cards more often.'],['What is spaced repetition?','Reviewing material at increasing intervals.']];by('cards').innerHTML=d.map(x=>`<div class="flash" onclick="this.classList.toggle('flip')"><div class="inner"><div class="face">${x[0]}</div><div class="face back">${x[1]}</div></div></div>`).join('')}function planner(){let s=(v('subjects')||'Python, SQL, DSA, ML').split(',');let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];by('plan').innerHTML='<table><tr><th>Day</th><th>Subject</th><th>Activity</th></tr>'+days.map((d,i)=>`<tr><td>${d}</td><td>${s[i%s.length].trim()}</td><td>Study + practice + revision</td></tr>`).join('')+'</table>'}function ocr(){let t=v('ocr');set('out',t?`KEY POINTS

• ${t.split(/\n+/).filter(Boolean).slice(0,5).join('\n• ')}`:'Enter OCR text first. Add Tesseract.js for browser OCR.')}
function addRow(){let s=v('student'),m=v('marks');if(!s)return;by('rows').insertAdjacentHTML('beforeend',`<tr><td>${s}</td><td>${m}</td></tr>`);by('student').value='';by('marks').value=''}