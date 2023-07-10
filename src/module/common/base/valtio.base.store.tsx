import { useInstance } from 'react-ioc';
import { useSnapshot as _useSnapshot, proxy } from 'valtio';

export abstract class ValtioBaseStore<TState extends object> {
    constructor(protected state: TState) {
        this.state = proxy(state);
    }
    // 调用只能在action里
    get _state() {
        return this.state;
    }
    // 调用只能funciton component或者hook里
    useSnapshot = () => {
        return _useSnapshot(this.state);
    };
}

interface IValtioBaseStore<TState extends object, TAction> {
    new (state: TState): ValtioBaseStore<TState>;
}

/**
 * 不要使用这个对象，监听了所有状态的变更，虽然可以简化调用
 *
 * @export
 * @template TState
 * @template TAction
 * @param {IValtioBaseStore<TState, TAction>} ClassName
 * @return {*}
 */
export function useComputedViewStore<TState extends object, TAction>(
    ClassName: IValtioBaseStore<TState, TAction>
) {
    // 所有的action一定需要是箭头函数，否则解构获取不到属性（class中的箭头函数，绑定在构造函数上，而不是原型上）
    const { ...actions } = useInstance(ClassName) as TAction;
    const { ...props } = useInstance(ClassName).useSnapshot();

    return {
        ...actions,
        ...props,
    };
}
