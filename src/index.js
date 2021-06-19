import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETE";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親要素(li)を未完了リストから削除
    deleteFromImcompleteList(completeButton.closest("li"));

    // 完了リストに追加する要素
    const addTarget = completeButton.closest("li");

    // TODO内容テキストを取得
    const text = addTarget.querySelector("p").innerText;

    // div以下を初期化
    addTarget.querySelector("div").textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.textContent = text;

    // button(戻す)タグを生成
    const backButton = document.createElement("button");
    backButton.textContent = "RETURN";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除;
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = deleteTarget.querySelector("p").innerText;

      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.querySelector("div").appendChild(p);
    addTarget.querySelector("div").appendChild(backButton);

    // 未完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素(li)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.closest("li"));
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
