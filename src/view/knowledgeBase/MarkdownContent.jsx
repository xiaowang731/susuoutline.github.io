import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// 使用类似语雀的暗色主题
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './MarkdownContent.scss';

// 导入所有 Markdown 文件，使用原始文本格式
const markdownFiles = import.meta.glob("/src/markdowns/**/*.md", { 
  as: 'raw',  // 以原始文本形式导入
  eager: true // 立即加载所有文件
});

// Markdown 渲染配置选项
const markdownOptions = {
  // 配置代码块和其他 Markdown 元素的渲染
  overrides: {
    // 代码块配置
    code: {
      component: ({ className, children }) => {
        const language = className ? className.replace('lang-', '') : '';
        return (
          <SyntaxHighlighter
            language={language}
            style={tomorrow}
            showLineNumbers={true}
            customStyle={{
              margin: '16px 0',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            {children}
          </SyntaxHighlighter>
        );
      }
    },
    // 代码行内配置
    inlineCode: {
      component: ({ children }) => (
        <code className="yuque-inline-code">{children}</code>
      ),
    },
    // 标题配置
    h1: { component: props => <h1 className="yuque-h1" {...props} /> },
    h2: { component: props => <h2 className="yuque-h2" {...props} /> },
    h3: { component: props => <h3 className="yuque-h3" {...props} /> },
    // 列表配置
    ul: { component: props => <ul className="markdown-ul" {...props} /> },
    ol: { component: props => <ol className="markdown-ol" {...props} /> },
    // 链接配置
    a: { component: props => <a className="yuque-link" {...props} target="_blank" rel="noopener noreferrer" /> },
  },
  // 启用所有 GFM 特性
  forceBlock: true,
};

const MarkdownContent = () => {
  // 获取路由参数中的 route 值
  const { route } = useParams();
  // 存储 Markdown 内容的状态
  const [content, setContent] = useState("");

  useEffect(() => {
    // 从 localStorage 获取路由映射关系
    const routeMapping = JSON.parse(localStorage.getItem('routeMapping') || '{}');
    // 获取实际的文件路径
    const actualFilePath = routeMapping[route];

    // 如果找到对应的文件路径和内容，则更新状态
    if (actualFilePath && markdownFiles[actualFilePath]) {
      const fileContent = markdownFiles[actualFilePath];
      setContent(fileContent);
    }
  }, [route]); // 当路由参数改变时重新执行

  return (
    <div className="yuque-markdown-body">
      {content ? (
        // 如果有内容则渲染 Markdown
        <Markdown options={markdownOptions}>
          {content}
        </Markdown>
      ) : (
        // 否则显示加载提示
        <div>加载中...</div>
      )}
    </div>
  );
};

export default MarkdownContent;