export const Card = props => {
    const sizes = {
        sm: 'small',
        md: 'medium',
        xl: 'large',
        xxl: 'extra-large'
    }
    return (
        <div className={"card card-"+ sizes[sizes.hasOwnProperty(props.size) ? props.size : 'sm']}>
            {props.header || ''}
            {props.title ? <div className="card-header"><div className="card-title">{props.title || 'Card title'}</div></div> : ''}
            <div className="card-body">
                {props.subtitle ? <div className="card-subtitle"> {props.subtitle} </div> : ''}
                {props.body}
            </div>
            {props.footer || ''}
        </div>
    )
}