---  
title: 关于时尚  
tags: "SSR-沸腾"  
weight: 33  
---  

> 获取途径：SSR-沸腾拿卡 解锁  


**白起：** 这么晚还没睡，是在紧张明天的事吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">稍微有一点点吧……虽然也不是第一次和你合作，但是关于时尚还是第一次……</option>  
    <option value="o1-2">没有啦，都安排好了，没什么好紧张的！</option>  
    <option value="o1-3">诶，紧张什么事啊……</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：稍微有一点点吧……虽然也不是第一次和你合作，但是关于时尚还是第一次……  <br>  

 <strong>白起：</strong> 别紧张。  <br>  

 <strong>白起：</strong> 有我在。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：没有啦，都安排好了，没什么好紧张的！  <br>  

 <strong>白起：</strong> 嗯，我相信你。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：诶，紧张什么事啊……  <br>  

 <strong>白起：</strong> 平面照的事。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">那我在休息之前，可以问一个小问题吗？</option>  
    <option value="o2-2">本来好像还好……你一提起来我突然就放心不下了，突然发现我连你最适合什么风格都还没弄清楚！</option>  
    <option value="o2-3">你这么一说……突然感觉有点悬……是不是要突击一下啊？比如说适合你的风格啥的……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：那我在休息之前，可以问一个小问题吗？  <br>  

 <strong>白起：</strong> 可以。  <br>  

 <strong>白起：</strong> 什么问题？  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：本来好像还好……你一提起来我突然就放心不下了，突然发现我连你最适合什么风格都还没弄清楚！  <br>  

 <strong>白起：</strong> 没弄清楚？  <br>  

 <strong>白起：</strong> 你想知道什么风格？  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你这么一说……突然感觉有点悬……是不是要突击一下啊？比如说适合你的风格啥的……  <br>  

 <strong>白起：</strong> 好。我陪你。  <br>  

 <strong>白起：</strong> 不过合适我的风格，是什么意思？  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">就是……白起你觉得什么颜色看起来更时尚一些呢？</option>  
    <option value="o3-2">就是……白起你觉得什么POSE看起来最时尚？</option>  
    <option value="o3-3">我问你一个问题哦，如果要选一个发型来这组照片，你觉得自己什么发型最时尚啊？</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：就是……白起你觉得什么颜色看起来更时尚一些呢？  <br>  

 <strong>白起：</strong> 都行。  <br>  

 <strong>白起：</strong> 用你喜欢的就好。  <br>  

 <strong>白起：</strong> 对我而言，时尚就是你喜欢的风格。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：就是……白起你觉得什么POSE看起来最时尚？  <br>  

 <strong>白起：</strong> 我可以自己选？  <br>  

 <strong>白起：</strong> ……你在我身边的pose都好。  <br>  

 <strong>白起：</strong> 对我而言时尚不重要。  <br>  

 <strong>白起：</strong> 你才重要。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我问你一个问题哦，如果要选一个发型来这组照片，你觉得自己什么发型最时尚啊？  <br>  

 <strong>白起：</strong> 现在这样挺好的。  <br>  

 <strong>白起：</strong> 但如果你想要其他的，也可以。  <br>  

 <strong>白起：</strong> 你喜欢的风格就是时尚。  <br>  

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
