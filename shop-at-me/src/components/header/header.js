import React from 'react';
import styles from "./header.module.css"

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className={`container-fluid ${styles.headerMain}`}>
					<div className={`row`}>
						<p className={styles.logoText}>ShopAtMe</p>
						<div>
							<p className={styles.selectAddress}>Hello</p>
							<i className={`fa fa-map-marker ${styles.icon}`}> Select address</i>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Header;