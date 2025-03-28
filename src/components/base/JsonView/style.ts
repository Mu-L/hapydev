import styled from '@emotion/styled';
import { GlobalToken } from 'antd';

export const JsonViewWrapperLight = styled.div<{ token: GlobalToken }>`
  pre {
    line-height: 22px;
    text-wrap-mode: wrap;
    font-size: 14px;
  }
  pre span {
    line-height: 22px;
  }
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    color: #373b41;
    background: #fff;
  }
  .hljs ::selection,
  .hljs::selection {
    background-color: #c5c8c6;
    color: #373b41;
  }
  .hljs-comment {
    color: #b4b7b4;
  }
  .hljs-tag {
    color: #969896;
  }
  .hljs-operator,
  .hljs-punctuation,
  .hljs-subst {
    color: #373b41;
  }
  .hljs-operator {
    opacity: 0.7;
  }
  .hljs-bullet,
  .hljs-deletion,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-template-variable,
  .hljs-variable {
    color: #cc342b;
  }
  .hljs-attr,
  .hljs-link,
  .hljs-literal,
  .hljs-number,
  .hljs-symbol,
  .hljs-variable.constant_ {
    color: #f96a38;
  }
  .hljs-class .hljs-title,
  .hljs-title,
  .hljs-title.class_ {
    color: #fba922;
  }
  .hljs-strong {
    font-weight: 700;
    color: #fba922;
  }
  .hljs-addition,
  .hljs-code,
  .hljs-string,
  .hljs-title.class_.inherited__ {
    color: #198844;
  }
  .hljs-attribute,
  .hljs-built_in,
  .hljs-doctag,
  .hljs-function .hljs-title,
  .hljs-keyword.hljs-atrule,
  .hljs-quote,
  .hljs-regexp,
  .hljs-section,
  .hljs-title.function_,
  .ruby .hljs-property {
    color: #3971ed;
  }
  .diff .hljs-meta,
  .hljs-keyword,
  .hljs-template-tag,
  .hljs-type {
    color: #a36ac7;
  }
  .hljs-emphasis {
    color: #a36ac7;
    font-style: italic;
  }
  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-meta .hljs-string {
    color: #3971ed;
  }
  .hljs-meta .hljs-keyword,
  .hljs-meta-keyword {
    font-weight: 700;
  }
`;

export const JsonViewWrapperDark = styled.div<{ token: GlobalToken }>`
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    color: #c5c8c6;
    background: #1d1f21;
  }
  .hljs ::selection,
  .hljs::selection {
    background-color: #373b41;
    color: #c5c8c6;
  }
  .hljs-comment {
    color: #969896;
  }
  .hljs-tag {
    color: #b4b7b4;
  }
  .hljs-operator,
  .hljs-punctuation,
  .hljs-subst {
    color: #c5c8c6;
  }
  .hljs-operator {
    opacity: 0.7;
  }
  .hljs-bullet,
  .hljs-deletion,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-template-variable,
  .hljs-variable {
    color: #cc342b;
  }
  .hljs-attr,
  .hljs-link,
  .hljs-literal,
  .hljs-number,
  .hljs-symbol,
  .hljs-variable.constant_ {
    color: #f96a38;
  }
  .hljs-class .hljs-title,
  .hljs-title,
  .hljs-title.class_ {
    color: #fba922;
  }
  .hljs-strong {
    font-weight: 700;
    color: #fba922;
  }
  .hljs-addition,
  .hljs-code,
  .hljs-string,
  .hljs-title.class_.inherited__ {
    color: #198844;
  }
  .hljs-attribute,
  .hljs-built_in,
  .hljs-doctag,
  .hljs-function .hljs-title,
  .hljs-keyword.hljs-atrule,
  .hljs-quote,
  .hljs-regexp,
  .hljs-section,
  .hljs-title.function_,
  .ruby .hljs-property {
    color: #3971ed;
  }
  .diff .hljs-meta,
  .hljs-keyword,
  .hljs-template-tag,
  .hljs-type {
    color: #a36ac7;
  }
  .hljs-emphasis {
    color: #a36ac7;
    font-style: italic;
  }
  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-meta .hljs-string {
    color: #3971ed;
  }
  .hljs-meta .hljs-keyword,
  .hljs-meta-keyword {
    font-weight: 700;
  }
`;
