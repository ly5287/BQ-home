---  
title: 比赛日  
tags: "SR-光色潮汐"  
weight: 26  
---  

> 获取途径：SR-光色潮汐三星 解锁  


**白起：** 周末有很精彩的淘汰赛，要一起看吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">好呀！正好你还可以给我当现场独家解说~</option>  
    <option value="o1-2">要加班，可能会到12点多……这样你等太久了</option>  
    <option value="o1-3">我很担心自己会看不懂……当然如果你不嫌弃给我再一一介绍的话！！</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：好呀！正好你还可以给我当现场独家解说~  <br>  

 <strong>白起：</strong> 我也只是泛泛而谈，不过应该不会太糟糕  <br>  

 <strong>白起：</strong> 那我到时候去接你下班  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：要加班，可能会到12点多……这样你等太久了  <br>  

 <strong>白起：</strong> 没关系，时间刚好  <br>  

 <strong>白起：</strong> 再说那么晚了，我也是要去接你下班的  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我很担心自己会看不懂……当然如果你不嫌弃给我再一一介绍的话！！  <br>  

 <strong>白起：</strong> 不会嫌弃  <br>  

 <strong>白起：</strong> 你喜欢的话，开心享受比赛就好  <br>  

 <strong>白起：</strong> 到时候我去接你下班  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">yes，sir！感觉现在就开始有点期待了！</option>  
    <option value="o2-2">知道啦，全听你安排</option>  
    <option value="o2-3">没关系啦，你可以在家里等我~</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：yes，sir！感觉现在就开始有点期待了！  <br>  

 <strong>白起：</strong> 我也很期待  <br>  

 <strong>白起：</strong> 看比赛的时候想吃点什么吗，我可以提前准备  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：知道啦，全听你安排  <br>  

 <strong>白起：</strong> 看比赛的时候有什么想吃的吗  <br>  

 <strong>白起：</strong> 我可以提前准备  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：没关系啦，你可以在家里等我~  <br>  

 <strong>白起：</strong> 我喜欢接你下班一起回家，不麻烦  <br>  

 <strong>白起：</strong> 看比赛时有没有什么想吃的，我可以提前准备  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">你今天晚上有空吗？我们干脆一起去采购好了！</option>  
    <option value="o3-2">哼哼~回来以后我就准备了比赛专用冰箱，一切都到位~</option>  
    <option value="o3-3">不用啦~我有准备冰汽水，小龙虾可以当晚再点！看比赛嘛，还是旁边的人比较重要些</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：你今天晚上有空吗？我们干脆一起去采购好了！  <br>  

 <strong>白起：</strong> 有空  <br>  

 <strong>白起：</strong> 那就一起去，我在你就多买一些爱吃的  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：哼哼~回来以后我就准备了比赛专用冰箱，一切都到位~  <br>  

 <strong>白起：</strong> 好  <br>  

 <strong>白起：</strong> 突然希望时间可以再过得快些  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：不用啦~我有准备冰汽水，小龙虾可以当晚再点！看比赛嘛，还是旁边的人比较重要些  <br>  

 <strong>白起：</strong> 听你的  <br>  

 <strong>白起：</strong> 以后每一次看比赛时，我都会在你身边  <br>  

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
