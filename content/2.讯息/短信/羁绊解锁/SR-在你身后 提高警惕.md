---  
title: 提高警惕  
tags: "SR-在你身后"  
weight: 1163  
date: 2017-12-20
---  

> 获取途径：SR-在你身后进化 解锁  


**白起：** 刚才吓到你了吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">刚才你从身后出现，真是吓死我了……</option>  
    <option value="o1-2">我知道你是在吓我，所以没有在意。</option>  
    <option value="o1-3">下次不要这样了，有点吓到我了。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：刚才你从身后出现，真是吓死我了……  <br>  

 <strong>白起：</strong> 抱歉，但是在陌生的地方千千万要提高防范意识。  <br>  

 <strong>白起：</strong> 记住，不要相信任何人。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我知道你是在吓我，所以没有在意。  <br>  

 <strong>白起：</strong> 如果下次突袭的人不是我，或者我不在你身边，你打算怎么办？  <br>  

 <strong>白起：</strong> 千万提高防范，不要相信任何人。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：下次不要这样了，有点吓到我了。  <br>  

 <strong>白起：</strong> 抱歉，但是如果下次突袭的人不是我，或者我不在你身边，你打算怎么办？  <br>  

 <strong>白起：</strong> 千万提高防范，不要相信任何人。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">包括你吗？</option>  
    <option value="o2-2">真的有这么危险吗？</option>  
    <option value="o2-3">会不会想的太严重了，其实并没有到这个地步。</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：包括你吗？  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 我不会伤害你。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：真的有这么危险吗？  <br>  

 <strong>白起：</strong> 那些人已经正面发起行动了，我们必须有所准备。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：会不会想的太严重了，其实并没有到这个地步。  <br>  

 <strong>白起：</strong> 想象远比现实轻巧，不要掉以轻心。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">你是我信任的人。</option>  
    <option value="o3-2">谢谢你告诉我这些。</option>  
    <option value="o3-3">知道现实的情况，心里突然很沉重。</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：你是我信任的人。  <br>  

 <strong>白起：</strong> 我会尽全力保护你，就像木星守护着月亮。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：谢谢你告诉我这些。  <br>  

 <strong>白起：</strong> 不论发生什么，我会在你身边。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：知道现实的情况，心里突然很沉重。  <br>  

 <strong>白起：</strong> 不论发生什么，我会在你身边。  <br>  

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
