import React from 'react'
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop} >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAuhJREFUSEuVV+t52zAQA7SA2wnaETJCOkHbCRJP0GxQZ4NmgqgTNBvUI2SEZgNnAaEfyZN4fMWO/kimKOIOhwNpIlwEoPi0Pech/9LmNDeCUL3EaHIEYbOsDXjgvGjzsozW/xotbNm1wP20y+gJaNGtAE3k75KybixV9oGhd17hg0WaAd0kQMwk9x32c/k6sbTAnZL6IUVQ3IS1gixsgXki90kmVu8zJUtUX6KfME/LLPDGwF4tkZ3dO5mPVLtSbehemTV1WjSDKVMAAfTano8ABuDngJueKosSakqjdwUl+Rzplq4AHAXsVtq7Na/lda6dfE0DqIDryUDXeLUsVwCPEHZW9JkT90EEnZzTZ2+Vt0dvAO1pYpGuKBxB7bzaRxoatlPONDgSXwlcr/SOOnClfVzz/GUCrtLeQFO/RCEl0PPy38A97U2fdwwkgW7m4EAHeXZiuSTzgmpPr9XpnuThYnNzQUgK3/3M32omp83hNnFJyy3AR29HADLwGdOPPjYCzha3JxmcL3u1pG8A/qwR2tx7cjp40x1VuR5vM46rfJ/IpwxsmpdCP+IDgL8xAOGeU6Za0h2ArwPqn0g+bIEb1ZbAFwCn3BWD3UnSeizYMtaiXyB+xIXc7lAx9EDyznawWOMwdZrIekPo9nEJzIMttAbzAuBfImSr1WcAnyCcOPFjnL/oACZxkUFKZTFcH+cXATjX2APHURNc3vcUQIKCg75CdsnDN1WPgb2LpNOFozrVuGbB+460HAC67HrApTLeptqJqwecN4k6u3dmHPdjy9hEtKk6AXeo9rSOqI7iek/GzkBaYOdJTT2rjBvgop1KcdmyuZ2KFkt1X7/YhBQzngJnHXENM86Hckknt7W1fjHu4563vJAM7eau4sxl43ZmBvA43BwaF7FI/C3PKfzZ/2FpOQgySmep4N/VvuFq682+G6WeyCmezfoGYi/6p8zy1DSac8l4ff7qHCzOnzSGZRi+KP/Y/QdfocY4ythLQAAAAABJRU5ErkJggg=="/>
            </div>
        </nav>
    )
}

export default Navbar
