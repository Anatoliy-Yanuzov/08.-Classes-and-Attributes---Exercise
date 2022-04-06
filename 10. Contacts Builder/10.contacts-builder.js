class Contact {
	constructor(firstName, lastName, phone, email) {
		this.firstName = firstName
		this.lastName = lastName
		this.phone = phone
		this.email = email
		this._online = false
	}

	get online() {
		return this._online
	}

	set online(v) {
		this._online = v

		if (this.onlineDiv) {
			this.onlineDiv.className = this._online ? 'title online' : 'title'
		}
	}

	eFactory(tag, content = '') {
		const e = document.createElement(tag);
		e.innerHTML = content

		return e
	}

	render(id) {
		this.temple = this.eFactory('article')
		this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`);
		this.infoBtn = this.eFactory('button', '&#8505;')
		this.infoDiv =
			this.eFactory(
				'div',
				`<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
			)


		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.infoDiv.className = 'info'
		this.infoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoBtn);
		this.temple.appendChild(this.onlineDiv);
		this.temple.appendChild(this.infoDiv);

		document.getElementById(id).appendChild(this.temple);

		this.infoBtn.addEventListener('click', () => {
			this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
		});
	}
}