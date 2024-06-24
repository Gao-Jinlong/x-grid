import { useFileSystemAccess } from '@vueuse/core'

export type AppContext = ReturnType<typeof useAppContext>

export default function useAppContext() {
  const { isSupported, file, open, fileName, fileSize } = useFileSystemAccess()

  if (!isSupported) {
    throw new Error('File system access is not supported')
  }

  return {
    isSupported,
    fileName,
    fileSize,
    file,
    open
  }
}
