<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
    status-icon
    label-position="left"
  >
    <el-form-item label="用户姓名" prop="name" required>
      <el-input v-model="ruleForm.name" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="用户姓名" prop="type" required>
      <el-select v-model="ruleForm.type" placeholder="请选择">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="证件号码" prop="count" required>
      <el-input v-model="ruleForm.count" placeholder="请上传" />
    </el-form-item>
    <el-form-item label="上传证件" prop="fileList" required>
      <SytUpload :fileList="ruleForm.fileList"></SytUpload>
    </el-form-item>
  </el-form>
  <div class="btn-group">
    <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
    <el-button type="primary" @click="rewriteForm(ruleFormRef)">重填</el-button>
  </div>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    onMounted,
    reactive,
    ref,
  } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import {
    SytUpload
  } from '@/components'
  import {
    getFindByDictCode
  } from '@/api/user'
  const {userInfo} =defineProps(['userInfo'])
  const ruleFormRef = ref<FormInstance>()
  onMounted(() => {
    console.log(userInfo,"userInfo");
    getFindByDictCodeApi('CertificatesType')
  }) 
  interface RuleForm {
    name: string
    type: string
    count: string
    fileList: {
      name: string
      url: string
    }[]
  }
  const rules = reactive<FormRules<RuleForm>>({
    name:[
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { min: 1, max: 12, message: '姓名长度不得超过12个字符', trigger: ['blur', 'change'] },
    ],
    type: [
      { required: true, message: '请选择证件类型', trigger: ['blur', 'change'] },
    ],
    count: [
      { required: true, message: '请输入证件号码', trigger: ['blur', 'change'] },
    ],
    fileList: [
      { required: true, message: '请上传证件照', trigger: 'blur' },
    ]
  })
  const ruleForm = reactive<RuleForm>({
    name: '',
    type: '',
    count: '',
    fileList: [
      {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      },
      {
        name: 'plant-1.png',
        url: '/images/plant-1.png',
      },
    ]
  })
  const rewriteForm = (ref: FormInstance | undefined) => {
    if (!ref) return
    ref.resetFields()
    
  }
  const submitForm = async (ref: FormInstance | undefined) => {
    if (!ref) return
    await ref.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  const getFindByDictCodeApi = async (code: string) => {
    getFindByDictCode(code).then( res => {
      console.log(res);
      
    })
  }
</script>
<style scoped lang='scss'>
  .btn-group {
    margin-top: 40px;
    padding-left: 80px;
  }
</style>