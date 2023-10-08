import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ThemeState {
    count: number
}

// 初始值数据
const initState: ThemeState = {
    count: 0
};

// 属性仓库
const useThemeStore = create(
    // 参数修改插件
    immer(
        // 数据持久化
        persist<ThemeState>(
            () => initState,
            // 仓库名称
            { name: "count-store" }
        ),
    ),
);

/**
 * 更新数值
 */
export function updateCount() {
    useThemeStore.setState(state => { state.count++; });
}

export default useThemeStore;
