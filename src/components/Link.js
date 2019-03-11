import React from 'react'
import PropTypes from 'prop-types'

const Link = ({children, active, setVisibilityFilters}) => (
    <button 
        disabled={active}
        onClick={setVisibilityFilters}
    >
        {children}
    </button>
)

Link.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    setVisibilityFilters: PropTypes.func.isRequired
}

export default Link;