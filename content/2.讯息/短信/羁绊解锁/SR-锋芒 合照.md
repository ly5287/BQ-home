---  
title: 合照  
tags: "SR-锋芒"  
weight: 2018101901  
date: 2018-10-19
---  

> 获取途径：SR-锋芒进化 解锁  


**白起：** 今天玩得开心吗？  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">我兴奋到现在还睡不着呢！</option>  
    <option value="o1-2">一开始有些害怕，幸好有一场热身赛，后来真的超开心！</option>  
    <option value="o1-3">特别开心！你呢，我一直担心这对你来说是不是太小儿科了……</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我兴奋到现在还睡不着呢！  <br>  

 <strong>白起：</strong> 那我下次再陪你一起去  <br>  

 <strong>白起：</strong> 对了，最后拍的照片你放在我这忘记拿走了  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：一开始有些害怕，幸好有一场热身赛，后来真的超开心！  <br>  

 <strong>白起：</strong> 玩得开心就好  <br>  

 <strong>白起：</strong> 对了，最后拍的照片你放在我这忘记拿走了  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：特别开心！你呢，我一直担心这对你来说是不是太小儿科了……  <br>  

 <strong>白起：</strong> 不会  <br>  

 <strong>白起：</strong> 有你在，我很开心  <br>  

 <strong>白起：</strong> 对了，最后拍的照片你放在我这忘记拿走了  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">我就猜是落在你那里了！看来我还是蛮聪明的嘛~</option>  
    <option value="o2-2">我说怎么到处都找不到……那张照片拍得超好看，丢了就太可惜了</option>  
    <option value="o2-3">啊，真的忘了！我之前还想着到家门口时再跟你要呢……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我就猜是落在你那里了！看来我还是蛮聪明的嘛~  <br>  

 <strong>白起：</strong> 是我最聪明的女孩  <br>  

 <strong>白起：</strong> 下次见面的时候我给你带过去  <br>  

 <strong>白起：</strong> 如果你需要的话，现在也可以  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我说怎么到处都找不到……那张照片拍得超好看，丢了就太可惜了  <br>  

 <strong>白起：</strong> 别担心，它好好的在我这里  <br>  

 <strong>白起：</strong> 如果你需要，我现在可以给你送过去  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：啊，真的忘了！我之前还想着到家门口时再跟你要呢……  <br>  

 <strong>白起：</strong> 没关系，下次见面的时候我带给你  <br>  

 <strong>白起：</strong> 如果你需要的话，现在也可以  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">太晚啦，你也累了一天了，去休息吧，反正还有很多机会</option>  
    <option value="o3-2">真的可以吗……会不会太麻烦？</option>  
    <option value="o3-3">没关系，在你那里更好，这样我就又有理由约你下次出去啦</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：太晚啦，你也累了一天了，去休息吧，反正还有很多机会  <br>  

 <strong>白起：</strong> 那就等下次见面带给你  <br>  

 <strong>白起：</strong> 就明天吧  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：真的可以吗……会不会太麻烦？  <br>  

 <strong>白起：</strong> 不麻烦  <br>  

 <strong>白起：</strong> 我现在就去见你，等我  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：没关系，在你那里更好，这样我就又有理由约你下次出去啦  <br>  

 <strong>白起：</strong> 好，照片我会好好保管  <br>  

 <strong>白起：</strong> 约我出去不需要找理由，任何时候我都想陪你一起去做任何事  <br>  

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
