/* eslint-disable react/prop-types */

export const Tag = ({text, color}) => {
  return (
    <span class={`badge text-${color}`}>{text}</span>
  )
}

