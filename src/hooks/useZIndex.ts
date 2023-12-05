import { computed, ref } from 'vue'

const zIndex = ref(0)
const useZIndex = (initialValue = 2000) => {
  // 初始索引
  const initialZIndex = ref(initialValue)
  // 当前索引
  const currentZIndex = computed(() => zIndex.value + initialZIndex.value)
  // 索引值+1
  const nextZIndex = () => {
    zIndex.value ++
    return currentZIndex.value
  }
  return {
    currentZIndex,
    nextZIndex,
    initialZIndex
  }
}

export default useZIndex