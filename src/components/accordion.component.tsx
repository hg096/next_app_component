"use client";

import React, { useState, useRef } from 'react';

export function Accordion({ close, open, contents }) {
  // 아코디언 상태를 관리하는 스테이트 변수
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px'); // 초기 maxHeight 값

  const accordionRef = useRef(null);

  // 아코디언을 토글하는 함수
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    const newMaxHeight = isExpanded ? '0px' : `${accordionRef.current.scrollHeight}px`;
    setMaxHeight(newMaxHeight); // 토글 시 maxHeight 변경
  };

  // 인라인 스타일 객체 정의
  const accordionStyle = {
    overflow: 'hidden',
    transition: 'max-height 0.5s ease-in-out',
    maxHeight: maxHeight,
  };

  return (
    <div >
      <button onClick={toggleAccordion} className='w-full'>
        {isExpanded ? close : open}
      </button>
      <div className='inline-block' >
        <div style={accordionStyle} ref={accordionRef}>
          {contents}
        </div>
      </div>
    </div>
  );
}

