---  
title: 刑侦剧  
tags: "SR-裂变"  
weight: 1125  
date: 2019-09-06
---  

> 获取途径：SR-裂变进化 解锁  


**[玩家姓名]** ：最近有部刑侦剧特别火，你有没有看呀？  

**白起：** 我不大关注，但听说过。  

**白起：** 你很喜欢？  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">感觉拍得很真实，剧情也很烧脑，上头了~</option>  
    <option value="o1-2">感觉角色塑造得特别立体，每一个都有血有肉！我最近特别沉迷。</option>  
    <option value="o1-3">感觉剧情特别棒，很引人深思，每一集都让人意犹未尽！</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：感觉拍得很真实，剧情也很烧脑，上头了~  <br>  

 <strong>白起：</strong> 难怪你最近都抱着手机。  <br>  

 <strong>白起：</strong> 朋友圈发得也比平时多。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：感觉角色塑造得特别立体，每一个都有血有肉！我最近特别沉迷。  <br>  

 <strong>白起：</strong> 昨天睡得晚原来是因为这个。  <br>  

 <strong>白起：</strong> 好看怎么还总叹气？  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：感觉剧情特别棒，很引人深思，每一集都让人意犹未尽！  <br>  

 <strong>白起：</strong> 难怪凌晨发了朋友圈。  <br>  

 <strong>白起：</strong> 今天早点休息。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">看着看着就想到了你……有点担心。</option>  
    <option value="o2-2">我就是在想要是现实中的案件都能像剧里一样完美解决就好了……</option>  
    <option value="o2-3">毕竟剧里探索了很多善恶和人性问题，看得有点纠结QAQ</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：看着看着就想到了你……有点担心。  <br>  

 <strong>白起：</strong> 有些危险无法避免。  <br>  

 <strong>白起：</strong> 但没有那么戏剧化，不用担心。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我就是在想要是现实中的案件都能像剧里一样完美解决就好了……  <br>  

 <strong>白起：</strong> 生活中有遗憾，但是也有希望。  <br>  

 <strong>白起：</strong> 正义不会缺席。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：毕竟剧里探索了很多善恶和人性问题，看得有点纠结QAQ  <br>  

 <strong>白起：</strong> 电视剧都经过艺术加工。  <br>  

 <strong>白起：</strong> 现实里的刑侦案件没有那么戏剧性。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">有道理!那我们还是回归生活，展望一下即将到来的美好周末！</option>  
    <option value="o3-2">这么说来……你最近有没有类似这样的危险任务……</option>  
    <option value="o3-3">听起来很有道理……但最后还是要把这部剧安利给你~</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：有道理!那我们还是回归生活，展望一下即将到来的美好周末！  <br>  

 <strong>白起：</strong> 这周我休息，晚上可以一起看剧。  <br>  

 <strong>白起：</strong> 晚饭做上次的糖醋排骨就很好。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：这么说来……你最近有没有类似这样的危险任务……  <br>  

 <strong>白起：</strong> 最近都没有。  <br>  

 <strong>白起：</strong> 首要任务就是周末陪你一起看剧。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：听起来很有道理……但最后还是要把这部剧安利给你~  <br>  

 <strong>白起：</strong> 好，我们周末一起看。  <br>  

 <strong>白起：</strong> 零食还要上次的小龙虾吗？  <br>  

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
