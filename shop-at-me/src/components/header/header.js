import React from 'react';
import styles from "./header.module.css"
import flag from '../../images/India-Flag-icon.png';

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className={`container-fluid ${styles.headerMain}`}>
					<div className={`row ${styles.headerRow}`}>
						<p className={styles.logoText}>ShopAtMe</p>
						<div className={styles.locationDiv}>
							<p className={styles.selectAddress}>Hello</p>
							<i className={`fa fa-map-marker ${styles.locationIcon}`}> Select address</i>
						</div>
						<div className={`row ${styles.searchBox}`}>
							<input type="text" className={`form-control form-control-lg ${styles.searchInput}`} id="searchInput"></input>
							<i className={`fa fa-search ${styles.searchIcon}`}></i>
						</div>
						<div className={`row ${styles.languageSelection}`}>
							<i><img className={styles.countryFlag} src={flag} alt="none"></img></i>
							<i className={`fa fa-caret-down ${styles.languageDropdown}`}></i>
						</div>
						<div className={styles.accountDiv}>
							<p className={styles.selectAddress}>Hello</p>
							<div className={`row`}>
								<p className={styles.accountsText}>Account & Lists</p>
								<i className={`fa fa-caret-down ${styles.accountDropdown}`}></i>
							</div>
						</div>
						<p className={styles.returnsDiv}>Returns & Order</p>
						<div className={`row ${styles.cartDiv}`}>
								<i className={`fa fa-shopping-cart ${styles.cartIcon}`}></i>
								<p className={styles.cartText}>Cart</p>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Header;