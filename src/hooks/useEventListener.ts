import {  onMounted, onBeforeUnmount, isRef, watch, unref } from 'vue'
import type { Ref } from 'vue'

// 事件监听hook函数
export default function useEventListener(
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      // 移除上一个目标对象的事件监听器
      oldValue?.removeEventListener(event, handler)
      value?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
