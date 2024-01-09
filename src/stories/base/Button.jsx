import React from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({setPage, primary, setShow, backgroundColor, style, size, label, ...props }) => {
  const Disable = primary ? '' : 'disable';
  
  switch (setPage){

    case '':
      return (
        <div className='cp-content storybook'>
          <div className='btnWrap'>
            <button
              type="button"
              className={['btn', 'btn-size',`${style}`, 'bg', `${size}` ].join(' ')}
              disabled = {Disable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
            {label}
            </button>
          </div>
        </div>
    
      )
    case 'grow':
      return (
        <div className='cp-content storybook'>        
          <div className={['btnWrap', `${setPage}`].join(' ')}>
            <button
              type="button"
              className={['btn', 'btn-size',`${style}`, 'bg', `${size}` ].join(' ')}
              disabled = {Disable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
            {label}
            </button>
            <button
              type="button"
              className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
              disabled = {Disable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
            {label}
            </button>
            <button
              type="button"
              className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type3' ].join(' ')}
              disabled = {Disable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
            {label}
            </button>
            <button
              type="button"
              className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'full' ,'line' ].join(' ')}
              disabled = {Disable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
            {label}
            </button>
          </div>
        </div>
      )
    case 'grow full':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap', `${setPage}`].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
        </div>
      </div>
    )

    case 'full':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap', `${setPage}`].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, 'type3'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
        </div>
      </div>
    )

    case 'full el':
    return (
      <div className='cp-content storybook'>        
        <div className={['btnWrap'].join(' ')}>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, `${setPage}` ].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`, `${setPage}`, 'type2'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
          <button
            type="button"
            className={['btn', 'btn-size',`${style}`, 'bg', `${size}`,`${setPage}`, 'type3'].join(' ')}
            disabled = {Disable}
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
          {label}
          </button>
        </div>
      </div>
    )

  }
};

// Docs 문서 작성 영역
Button.propTypes = {
  /**
   * 버튼 스타일 : 기본 & 라운드 & 그림자 & 라인
   */
  primary: PropTypes.bool,
  /**
 * 버튼 SHAPE
 */
  style: PropTypes.oneOf(['normal', 'round', 'shadow', 'line']),
  /**
   * 버튼 split / grow
   */
  grow: PropTypes.bool,
  /**
   * 버튼 사이즈
   */
  size: PropTypes.oneOf(['xs', 's', 'md', 'lg', 'xl']),
  /**
   * 배경색 선택
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

// Docs 기본값
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'md',
  onClick: undefined,
};

