//classNameの文字列を配列として読み込んで、スペースをつけて返す関数
export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
}