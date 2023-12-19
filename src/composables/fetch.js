import axios from 'axios'
import { ref, isRef, unref, watchEffect } from 'vue'

export const useFetch = (url) => {
  const data = ref(null)
  const error = ref(null)

  function doFetch () {
    data.value = null
    error.value = null
    axios
      .get(unref(url))
      .then((res) => {
        console.log(res)
        data.value = res.data.data
      })
      .catch((err) => {
        console.log(err)
        error.value = err
      })
  }
  if (isRef(url)) {
    watchEffect(doFetch)
  } else {
    doFetch()
  }
  return { data, error }
}
