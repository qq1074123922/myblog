webpackJsonp([0x6ff9df485322],{365:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>StreamingPro目前已经涵盖流式/批处理，以及交互查询三个领域，实现配置和SQL化</p>\n</blockquote>\n<h2>前言</h2>\n<p>今天介绍利用 <a href="https://github.com/allwefantasy/streamingpro">StreamingPro</a> 完成批处理的流程。</p>\n<h2>准备工作</h2>\n<ul>\n<li>下载StreamingPro</li>\n</ul>\n<p><a href="https://github.com/allwefantasy/streamingpro">README中有下载地址</a></p>\n<p> 我们假设您将文件放在了/tmp目录下。</p>\n<h2>填写配置文件</h2>\n<ul>\n<li>实例一,我要把数据从ES导出到HDFS,并且形成csv格式。</li>\n</ul>\n<p><a href="https://gist.github.com/allwefantasy/5dc8f994499ee3053623a3023fae79de">gist</a> </p>\n<h2>启动StreamingPro</h2>\n<p>Local模式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>cd  $SPARK_HOME\n\n<span class="token punctuation">.</span><span class="token operator">/</span>bin<span class="token operator">/</span>spark<span class="token operator">-</span>submit   <span class="token operator">--</span><span class="token keyword">class</span> <span class="token class-name">streaming<span class="token punctuation">.</span>core<span class="token punctuation">.</span>StreamingApp</span> \\\n<span class="token operator">--</span>master local<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> \\\n<span class="token operator">--</span>name test \\\n<span class="token operator">/</span>tmp<span class="token operator">/</span>streamingpro<span class="token number">-0.2</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">-</span>dev<span class="token number">-1.6</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">.</span>jar    \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>name test    \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>platform spark   \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>job<span class="token punctuation">.</span>file<span class="token punctuation">.</span>path file<span class="token punctuation">:</span><span class="token operator">/</span><span class="token comment">//tmp/test.json</span>\n</code></pre>\n      </div>\n<p>访问</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>http://127.0.0.1:4040</code></pre>\n      </div>\n<p>可进入Spark UI</p>\n<p>集群模式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>cd  $SPARK_HOME\n\n<span class="token punctuation">.</span><span class="token operator">/</span>bin<span class="token operator">/</span>spark<span class="token operator">-</span>submit   <span class="token operator">--</span><span class="token keyword">class</span> <span class="token class-name">streaming<span class="token punctuation">.</span>core<span class="token punctuation">.</span>StreamingApp</span> \\\n<span class="token operator">--</span>master yarn<span class="token operator">-</span>cluster \\\n<span class="token operator">--</span>name test \\\n<span class="token operator">/</span>tmp<span class="token operator">/</span>streamingpro<span class="token number">-0.2</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">-</span>dev<span class="token number">-1.6</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">.</span>jar    \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>name test    \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>platform spark   \\\n<span class="token operator">-</span>streaming<span class="token punctuation">.</span>job<span class="token punctuation">.</span>file<span class="token punctuation">.</span>path hdfs<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>cluster<span class="token operator">/</span>tmp<span class="token operator">/</span>test<span class="token punctuation">.</span>json\n</code></pre>\n      </div>\n<p>这里需要注意的是，配置文件并蓄放到HDFS上，并且需要协商hdfs前缀。这是一个标准的Spark 批处理程序</p>'},indexJson:{title:"使用Spark-SQL构建批处理程序"}},pathContext:{slug:"/posts/4/",pid:4,next:null,prev:"/posts/3"}}}});
//# sourceMappingURL=path---posts-4-0542fcb9ca1a645193f6.js.map