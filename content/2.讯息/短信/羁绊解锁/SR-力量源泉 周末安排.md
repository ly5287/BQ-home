---  
title: 周末安排  
tags: "SR-力量源泉"  
weight: 66  
---  

> 获取途径：SR-力量源泉进化 解锁  


**白起：** 周末两天有什么安排吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">听起来白先生是要约我嘛？</option>  
    <option value="o1-2">还没想好……</option>  
    <option value="o1-3">没有呀，准备在家躺两天玩手机！</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：听起来白先生是要约我嘛？  <br>  

 <strong>白起：</strong> 嗯。  <br>  

 <strong>白起：</strong> 明早来接你，有空吗？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：还没想好……  <br>  

 <strong>白起：</strong> 既然这样，我有个提议。  <br>  

 <strong>白起：</strong> 明天早上我来接你，怎么样？  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：没有呀，准备在家躺两天玩手机！  <br>  

 <strong>白起：</strong> 那正好。  <br>  

 <strong>白起：</strong> 明天早上我来接你。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">好呀！听说新开了一家射击馆，要不要去看看？</option>  
    <option value="o2-2">嗯……不过这周好忙，周末想来一波“懒人活动”！</option>  
    <option value="o2-3">不会又要去训练体能吧……我可以拒绝嘛！</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：好呀！听说新开了一家射击馆，要不要去看看？  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 还是去海边走走，怎么样？  <br>  

 <strong>白起：</strong> 你最近一直加班，最好不要进行激烈的运动。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：嗯……不过这周好忙，周末想来一波“懒人活动”！  <br>  

 <strong>白起：</strong> 好。  <br>  

 <strong>白起：</strong> 去海边沙滩散散步，怎么样？  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：不会又要去训练体能吧……我可以拒绝嘛！  <br>  

 <strong>白起：</strong> 放心，这次很轻松。  <br>  

 <strong>白起：</strong> 只是去海边走走，吹吹风。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">听起来还不错哦！</option>  
    <option value="o3-2">嗯……不过，你怎么会计划这场海滩之行？</option>  
    <option value="o3-3">唔，和海边相比的话，有点更想去湿地公园呢……</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：听起来还不错哦！  <br>  

 <strong>白起：</strong> 嗯。  <br>  

 <strong>白起：</strong> 和上次采风那样的惬意漫步，你应该会喜欢。  <br>  

 <strong>白起：</strong> 就这么说定了，明天见。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：嗯……不过，你怎么会计划这场海滩之行？  <br>  

 <strong>白起：</strong> 履行“多陪你”的承诺。  <br>  

 <strong>白起：</strong> 当然，也因为我想和你一起过周末。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：唔，和海边相比的话，有点更想去湿地公园呢……  <br>  

 <strong>白起：</strong> 好，那就去湿地公园。  <br>  

 <strong>白起：</strong> 只要跟你一起，去哪儿都行。  <br>  

  </div>  
</div>  

<script>  
document.querySelectorAll(".opt-select").forEach(s => {  
    s.onchange = function(){  
        let group = this.closest('.opt-group');  
        if (!group) return;  
        group.querySelectorAll(".opt-content").forEach(d => d.style.display = "none");  
        let target = document.getElementById(this.value);  
        if (target) target.style.display = "block";  
    }  
})  
</script>  
