# 凱莉品飲頻道 — GitHub Pages 靜態版

由 `~/workspace/wine-notes-site/` 的品飲筆記資料集產生的純靜態網站，
內容與 Muse 上的「凱莉品飲頻道」相同（986 款，2026 品飲筆記 35 筆在前、
樂活酒款品飲 951 筆在後，皆保留原本來源編號）。

## 檔案

- `index.html` — 全部 986 張卡片已預先寫入（不需 JS 也能瀏覽）
- `style.css`、`app.js` — 版面與三欄即時搜尋
- `assets/` — 894 張去背酒瓶圖（`bottle-NN.png` 為 2026 批次，
  `bottle2-NNN.png` 為樂活批次）
- `.nojekyll` — 讓 GitHub Pages 跳過 Jekyll 處理

## 發佈到 GitHub Pages

1. 在 GitHub 新建一個公開 repo（例如 `wine-notes`）。
2. 把本目錄全部內容推到該 repo 的預設分支根目錄。
3. Repo → Settings → Pages → Source 選「Deploy from a branch」，
   Branch 選預設分支、目錄選 `/ (root)`，儲存。
4. 網址為 `https://<帳號>.github.io/<repo>/`。所有資源皆為相對路徑，
   放在子路徑下也能正常顯示。

## 注意

- 內容皆為使用者品飲筆記原文，一字未改；未標價者不顯示價格，
  無照片者顯示「照片待確認」。
- 之後資料若有更新（新酒款、查價、照片），需重新執行
  `../build_github_pages.py` 產生新版再推送。
