
'use strict';
(()=>{
const REPO='Nottiaaa/408-study-plan', PATH='docs/progress.json', PENDINGKEY='408-sync-pending-v1', LOCALKEY='408-four-study-20261108';
const css=document.createElement('style');
css.textContent='.taskcopy{margin-top:6px;padding:3px 7px;border:1px solid var(--line);border-radius:4px;color:var(--accent);background:#fff;font-size:11px;cursor:pointer}.syncstatus{font-size:11px;color:var(--gray);margin-top:7px}.synchelp{font-size:11px;padding:9px 11px;background:#fafbf9;border:1px solid var(--line);margin-top:12px;border-radius:5px;color:var(--gray)}@media print{.taskcopy,.syncstatus,.synchelp{display:none}}';
document.head.append(css);
const row=document.querySelector('.head .tools');
const btn=document.createElement('button');btn.className='btn';btn.textContent='复制同步提示词';row.prepend(btn);
const refresh=document.createElement('button');refresh.className='btn';refresh.textContent='读取云端';row.insertBefore(refresh,btn.nextSibling);
const status=document.createElement('div');status.className='syncstatus';document.querySelector('.head .mini').parentElement.append(status);
const help=document.createElement('div');help.className='synchelp';help.innerHTML='网页每60秒读取一次 GitHub 进度。页面勾选先保存本机；点击「复制同步提示词」并发送到 ChatGPT，提交 GitHub 后才能跨对话同步。 <a href="https://github.com/Nottiaaa/408-study-plan/tree/main/docs" target="_blank" rel="noopener">仓库文件</a>';
document.querySelector('.head').after(help);
let delta={task:{},topic:{}},cloudOK=false,updated='';
try{const x=JSON.parse(localStorage.getItem('408-sync-pending-v1')||'null');if(x&&x.task&&x.topic)delta=x;}catch(e){}
const dirty=()=>Object.keys(delta.task).length+Object.keys(delta.topic).length>0;
function display(){status.textContent=dirty()?'本机有待提交的进度':cloudOK?'GitHub 已读取'+(updated?' · '+updated.slice(0,10):''):'本机进度 / 云端未连接'}
function remember(){try{localStorage.setItem(PENDINGKEY,JSON.stringify(delta))}catch(e){}display()}
async function copy(s,b){try{await navigator.clipboard.writeText(s)}catch(e){const t=document.createElement('textarea');t.value=s;t.style.position='fixed';t.style.left='-10000px';document.body.append(t);t.select();if(!document.execCommand('copy'))prompt('复制提示词',s);t.remove()}if(b){const old=b.textContent;b.textContent='已复制';setTimeout(()=>{if(b.isConnected)b.textContent=old},1200)}}
function taskPrompt(t){return '继续我的408复习：'+t.title+'。\\n考点：'+t.note+'。\\n对应真题：'+t.refs.join('、')+'。\\n请先给完整真题让我独立作答，按一题一解析批改；不重复已掌握的内容。\\n当前计划仓库：'+REPO+'；进度文件：'+PATH+'；任务ID：'+t.id+'。请通过GitHub连接读取当前进度；只有我明确要求时再修改该任务状态，其他状态不变。'}
function syncPrompt(){if(!dirty())return '请使用GitHub连接读取 '+REPO+' 仓库 main 分支的 '+PATH+'，显示我的DS、CO、OS、CN复习进度，并按我下一条要求更新。';return '请将我的408复习进度提交到GitHub。\\n仓库：'+REPO+'\\n分支：main\\n进度文件：'+PATH+'\\n先fetch_file取得当前SHA，按字段将以下补丁合并到state.task和state.topic，保留其余状态，修改updated_at，再使用update_file提交。提交成功后提醒我刷新网页。\\n补丁：\\n'+JSON.stringify(delta,null,2)}
function attachCopy(){document.querySelectorAll('.rowtask').forEach(row=>{const c=row.querySelector('[data-check]');if(!c)return;const t=D.tasks.find(z=>z.id===c.dataset.check);if(!t)return;const region=row.querySelector('.name')?.parentElement;if(!region||region.querySelector('.taskcopy'))return;const b=document.createElement('button');b.className='taskcopy';b.type='button';b.textContent='复制提示词';b.onclick=()=>copy(taskPrompt(t),b);region.append(b)})}
const prev=window._render;window._render=()=>{prev();attachCopy()};attachCopy();
document.addEventListener('change',e=>{const d=e.target.dataset;if(!d)return;if(d.check){delta.task[d.check]=e.target.checked?'done':'pending';remember()}else if(d.kind&&d.id){delta[d.kind][d.id]=e.target.value;remember()}},true);
async function pull(){if(location.protocol==='file:'){status.textContent='本地文件 · 请访问 GitHub Pages 查看云端';return}try{const r=await fetch('./progress.json?ts='+Date.now(),{cache:'no-store'});if(!r.ok)throw Error(r.status);const remote=await r.json();if(!remote.state?.task||!remote.state?.topic)throw Error('格式不符');cloudOK=true;updated=remote.updated_at||'';
const next={task:{...remote.state.task,...delta.task},topic:{...remote.state.topic,...delta.topic}};
for(const k of ['task','topic'])for(const [id,value] of Object.entries(delta[k]))if(remote.state[k][id]===value)delete delta[k][id];
if(JSON.stringify(state)!==JSON.stringify(next)){state=next;localStorage.setItem(LOCALKEY,JSON.stringify(state));window._render()}remember();
}catch(e){cloudOK=false;display()}}
btn.onclick=()=>copy(syncPrompt(),btn);refresh.onclick=()=>pull();display();pull();setInterval(pull,60000);
})();
