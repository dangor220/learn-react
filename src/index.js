import React from 'react';
import ReactDOM from 'react-dom/client';

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			date: new Date(),
// 		}
// 	}

// 	componentDidMount() {
// 		this.timerID = setInterval(() => this.tick(), 1000)
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerID)
// 	}

// 	tick() {
// 		this.setState({ date: new Date()})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Clock</h1>
// 				<p>{this.state.date.toLocaleTimeString()}</p>
// 			</div>
// 		);
// 	}
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock/>);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name='User'/>
//         <Welcome name='Default'/>
//         <Welcome name='Admin'/>
//       </div>
//     )
//   }
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// function Comment(props) {
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.author} />
// 			<div className="Comment-text">{props.text}</div>
// 			<div className="Comment-date">{formatDate(props.date)}</div>
// 		</div>
// 	);
// }

// function Avatar(props) {
// 	console.log(props);
// 	return (
// 		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo">
// 			<Avatar user={props.user} />
// 			<div className="UserInfo-name">{props.user.name}</div>
// 		</div>
// 	);
// }

// function formatDate(date) {
// 	return <h1>{date}</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<Comment
// 		author={{
// 			name: 'dangor',
// 			avatarUrl: 'https://avatars.githubusercontent.com/u/50300277?v=4',
// 		}}
// 		text="complete lesson"
// 		date="02.10.2022"
// 	/>
// );

// class Toggle extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isToggle: true,
// 		}
// 		this.handldeClick = this.handldeClick.bind(this)
// 	}

// 	handldeClick() {
// 		this.setState((prevState) => ({
// 			isToggle: !prevState.isToggle
// 		}));
// 	}	

// 	render() {
// 		return (
// 			<button onClick={this.handldeClick}>
// 				{this.state.isToggle ? "Включено" : "Выключено"}
// 			</button>
// 		)
// 	}


// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle/>);

function UserGreeting(props) {
	return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
	return <h1>Здравствуйте! Войдите, пожалуйста</h1>;
}

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />
// 	} 
// 	return <GuestGreeting />

// }

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>Войти</button>
	)
}

function LogoutButton(props) {
		return (
			<button onClick={props.onClick}>Выйти</button>
		)
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {
			isLoggedIn: false
		}
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true})
	}
	handleLogoutClick() {
		this.setState({isLoggedIn: false})
	}

	render() {

		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>
		} else {
			button = <LoginButton onClick={this.handleLoginClick}/>
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		)
	}
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl/>);