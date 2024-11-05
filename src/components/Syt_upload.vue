<template>
  <el-upload
    v-model:file-list="list"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { 
  ref,
  defineProps,
  onMounted,
  watch
} from 'vue'
import { Plus } from '@element-plus/icons-vue'
const props = defineProps(['fileList'])
import type { UploadProps } from 'element-plus'
onMounted(() => {
  console.log(props);
})
const list = ref([])
watch(() => props.fileList, (val) => {
  console.log(val,'watch');
  
  list.value = val
},{
  deep: true,
  immediate: true
})


const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>