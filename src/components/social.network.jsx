import '../resources/css/components/social.network.css'
export const SocialNetwork = props => {
    const icon = props.icon || 'bi bi-diagram-2'
    const tooltip = props.tooltip || '#social-network'
    const href = props.href || '#social-network'
    return (
        <>
            <a
                className="tooltiped social__network"
                data-tooltip={tooltip}
                href={href}
                target="_blank"
            >
                <i className={icon}></i>
            </a>
        </>
    )
}