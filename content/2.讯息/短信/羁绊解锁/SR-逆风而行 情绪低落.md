---  
title: 情绪低落  
tags: "SR-逆风而行"  
weight: 2017122021  
date: 2017-12-20
---  

> 获取途径：SR-逆风而行进化 解锁  


**白起：** 发生什么事了，怎么一大早就开始情绪低落？  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">没什么，不用管我……</option>  
    <option value="o1-2">我们女生低落都不需要理由！</option>  
    <option value="o1-3">想到要补班就脑壳疼嘤嘤嘤……</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：没什么，不用管我……  <br>  

 <strong>白起：</strong> 只要和你有关，都不是可以不管的事。  <br>  

 <strong>白起：</strong> 跟我说说看？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我们女生低落都不需要理由！  <br>  

 <strong>白起：</strong> ……如果是因为那个的话，记得多喝热水。  <br>  

 <strong>白起：</strong> 即便没有理由，我也不会放着你不管。  <br>  

 <strong>白起：</strong> 等你想说了再来找我就好。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：想到要补班就脑壳疼嘤嘤嘤……  <br>  

 <strong>白起：</strong> 那我帮你揉揉？  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">放完假有点缓不过来，困成了狗。</option>  
    <option value="o2-2">只是假期综合症而已，无心工作……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：放完假有点缓不过来，困成了狗。  <br>  

 <strong>白起：</strong> 我要代表全体警犬向这个形容提出异议了。  <br>  

 <strong>白起：</strong> 至少飞飞在我面前就没犯过困。  <br>  

 <strong>白起：</strong> 笑一笑是不是精神多了？  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：只是假期综合症而已，无心工作……  <br>  

 <strong>白起：</strong> 坚持到下班，别光看着屏幕放空。  <br>  

 <strong>白起：</strong> 晚上我来接你去散心。  <br>  

 <strong>白起：</strong> 现在感觉有点工作动力了吗？  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">你是不是又扒我窗了！</option>  
    <option value="o3-2">不过……你怎么知道的？！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：你是不是又扒我窗了！  <br>  

 <strong>白起：</strong> ……只是刚好路过。  <br>  

 <strong>白起：</strong> 好了，工作加油。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：不过……你怎么知道的？！  <br>  

 <strong>白起：</strong> 是刚刚恰好路过你窗外看到了。  <br>  

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
