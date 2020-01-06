import React from 'react'
import style from './style.sass'
import Logo from '../../images/logo-white.png'

import AutoComplete from 'react-autocomplete'

const Navbar = ({
	cities,
	onSearchSubmit,
	searchValue,
	searchChangedHandler,
	selectValueHandler
}) => {
	const items = cities.map((city) => {
		return {
			id: city.id,
			label: city.name
		}
	})

	return (
		<header className={style.Navbar}>
			<div className={style.LogoBar}>
				<img src={Logo} alt="" />
			</div>
			<form className={style.SearchForm} onSubmit={onSearchSubmit}>
				<AutoComplete
					className={style.SearchInput}
					items={items}
					shouldItemRender={(item, value) =>
						item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
					}
					getItemValue={(item) => item.label}
					renderItem={(item, highlighted) => (
						<div
							key={item.id}
							style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
						>
							{item.label}
						</div>
					)}
					value={searchValue}
					onChange={searchChangedHandler}
					onSelect={selectValueHandler}
					wrapperStyle={{ display: 'block' }}
				/>
				<button className={style.SearchButton}>
					<i className="fa fa-search" />
				</button>
			</form>
		</header>
	)
}

export default Navbar
