import React from 'react';
import ReactDOM from 'react-dom';

//Firebaseデータベースの定義
const fbdatabase = firebase.database();
//データベースの参照
const fbref = fbdatabase.ref('messages');
let last_message = "dummy";


// コンポーネント名の頭文字は大文字にする
//-----------------カスタムコンポーネント作成エリア-------------------
//-----------------カスタムコンポーネントHelloReact-------------------
class App extends React.Component{
  render(){
    return(
      <div>Hello World!!! Hello React!!!</div>
    );
  }
};
//-----------------カスタムコンポーネントButtonclick-------------------
class Buttonclick extends React.Component{
  //初期処理
  constructor(props){
    super(props);
    this.state = {initvalue:'初期値だよ'};
    //ES6でReactComponentを定義した場合は、コンストラクタで明示的にbindしないといけないらしい。
    this.onClick = this.onClick.bind(this);
  }
  //ボタンクリックイベント
  onClick(){
    this.setState({initvalue: 'ボタンをクリックしましたね？' });
  }
  //レンダリング
  render(){
    const button_name = '何が出るかな？→→';

    return (
      <button onClick={this.onClick}>
        {button_name + this.state.initvalue}
      </button>
    );
  }
}
//-----------------カスタムコンポーネントChatrender-------------------
class Chatrender extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      message:''
    };
    //初期読み込み & pushイベント検知
    fbref.on('child_added', (snapshot) => {
      this.state.id = snapshot.key;
      this.state.message = snapshot.val();
    });
  }

  render(){

    return(
      <div>
        <div>{this.state.id}</div>
        <div>{this.state.value}</div>
      </div>
    );
  }
}
//-----------------カスタムコンポーネント作成エリア-------------------
//-----------------ReactDomへのレンダリング-------------------
ReactDOM.render(<App />, document.getElementById('are_react'));
ReactDOM.render(<Buttonclick />, document.getElementById('button_react'));
ReactDOM.render(<Chatrender />, document.getElementById('chat_render'));
//-----------------ReactDomへのレンダリング-------------------


/*ここからはメモ 
React.Compornentの以下のメソッドは、DOMへ以下の順序で呼見込まれる。

・constructor()
・static getDerivedStateFromProps()
・render()
・componentDidMount()

*/