---  
title: 星空飞翔  
tags: "SR-那时秋深"  
weight: 2017122023  
date: 2017-12-20
---  

> 获取途径：SR-那时秋深进化 解锁  


**白起：** 看到你的朋友圈了，你还没有睡吗？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">还在想念刚才的星空，简直像做梦一样，美的让人心动。</option>
    <option value="o1-2">马上就要睡了，怎么啦？</option>
    <option value="o1-3">你不是也没睡吗？</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]：</strong> 还在想念刚才的星空，简直像做梦一样，美的让人心动。  <br>

 <strong>白起：</strong> 今晚的星空是我见过最美的一次。  <br>
   <br>
  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 马上就要睡了，怎么啦？  <br>

 <strong>白起：</strong> 我想说，今晚的星空是我见过最美的一次。  <br>
   <br>
  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 你不是也没睡吗？  <br>

 <strong>白起：</strong> 今天比较特殊。  <br>

 <strong>白起：</strong> 我想说，今晚的星空是我见过最美的一次。  <br>
   <br>
  </div>
</div>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">我从来没有这么近的仰望星空，我也很难忘。</option>
    <option value="o2-2">我很久没见过这么美丽的星空了</option>
    <option value="o2-3">除了星空，跟你在一起的时候也很开心。</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]：</strong> 我从来没有这么近的仰望星空，我也很难忘。  <br>

 <strong>白起：</strong> 在空中看星星，我也是第一次。  <br>

 <strong>白起：</strong> 以前总是独自飞行，今天却不感觉孤单。  <br>
   <br>
  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 我很久没见过这么美丽的星空了  <br>

 <strong>白起：</strong> 在空中看星星，我也是第一次。  <br>

 <strong>白起：</strong> 以前总是独自飞行，今天却不感觉孤单。  <br>
   <br>
  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 除了星空，跟你在一起的时候也很开心。  <br>

 <strong>白起：</strong> 嗯，我也是。  <br>

 <strong>白起：</strong> 其实在空中看星星，我也是第一次。  <br>

 <strong>白起：</strong> 以前总是独自飞行，今天却不感觉孤单。  <br>
   <br>
  </div>
</div>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">没想到有一天可以克服重力，体验到飞起来的感觉，真的好棒啊！</option>
    <option value="o3-2">飞起来的感觉好自由！</option>
    <option value="o3-3">虽然很刺激，但我好像发现自己有点恐高。</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]：</strong> 没想到有一天可以克服重力，体验到飞起来的感觉，真的好棒啊！  <br>

 <strong>白起：</strong> 在云朵里看落日应该也不错，如果想看的话，我们下次一起去。  <br>
   <br>
  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 飞起来的感觉好自由！  <br>

 <strong>白起：</strong> 在云朵里看落日应该也不错，如果想看的话，我们下次一起去。  <br>
   <br>
  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]：</strong> 虽然很刺激，但我好像发现自己有点恐高。  <br>

 <strong>白起：</strong> 不要向下看，看着我就好了。  <br>

 <strong>白起：</strong> 在云朵里看落日应该也不错，如果想看的话，我们下次一起去。  <br>
   <br>
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
