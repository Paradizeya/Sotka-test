const moreInfoButton = document.getElementById("moreInfoButton");
const dialog = document.getElementById("moreInfoDialog");
const dialogClose = document.getElementById("moreInfoDialogClose");

moreInfoButton.onclick = () => {
  dialog.showModal();
};

dialogClose.onclick = () => {
  dialog.close();
};
