import React from 'react'

const Avatar = ({children , backgroundColor ,px,py,color,padding,borderRadius,fontSize,textAlign,cursor}) => {
	const style={
		backgroundColor,
		padding:`${py} ${px}`,
		color:color || 'black',
		borderRadius,
		fontSize,
		textAlign:"center",
		cursor:cursor || null

	}
	return (
		<div style={style}>
			{children}
		</div>
	)
}

export default Avatar