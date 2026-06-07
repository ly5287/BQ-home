// 全文本搜索 Worker
let data = null;

self.onmessage = function(e) {
  if (e.data.type === 'init') {
    data = e.data.data;
    self.postMessage({ type: 'ready' });
  } else if (e.data.type === 'search') {
    const q = e.data.query.toLowerCase();
    const results = data.filter(p => (p.title + ' ' + p.content).toLowerCase().includes(q));
    self.postMessage({ type: 'results', results, query: e.data.query });
  }
};