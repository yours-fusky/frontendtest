import { Ref, ref } from 'vue'

export type Square = {
  rank: number
  file: number
  displayValue: string
  selected: boolean
}

const getDisplayValue = (rank: number, file: number) => {
  const char = 'abcdefgh'[file]
  return `${char}${rank + 1}`
}

const generateSquares = () => {
  return Array.from(Array(8), (_, rank) => {
    return Array.from(
      Array(8),
      (_, file): Square => ({
        rank,
        file,
        displayValue: getDisplayValue(rank, file),
        selected: false,
      })
    )
  }).reverse()
}

export const useSquares = () => {
  const squares = ref(generateSquares())
  const moves: Ref<Square[]> = ref([])

  const selectSquare = (square: Square) => {
    if (!square.selected) {
      square.selected = true
      moves.value.push(square)
    }
  }

  return {
    selectSquare,
    squares,
    moves,
  }
}
