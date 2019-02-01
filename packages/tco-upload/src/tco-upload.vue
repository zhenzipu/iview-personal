<template>
  <div>
    <Button type="primary" icon="md-cloud-upload" @click="handleOpenUpload">上传文件</Button>
    <!-- 上传模态框 -->
    <Modal v-model="bModalUpload" :mask-closable="false">
      <p slot="header">
        <Icon type="ios-lightbulb-outline"></Icon>
        <span>文件上传</span>
      </p>
      <div class="height-200px">
        <Row type="flex" justify="center" align="middle" class="height-100">
          <div style="display: block;width: 100%;text-align: center;">
            <Upload
              :name="name"
              :action="action"
              :data="data"
              :format="format"
              :on-format-error="handleFormatError"
              :before-upload="handleBeforeUpload"
              :on-progress="handleProgress"
              :on-success="handleSuccess"
              :on-error="handleError"
            >
              <span>请选择文件&nbsp;&nbsp;</span>
              <Button type="dashed" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
          </div>
        </Row>
      </div>
      <p slot="footer"></p>
    </Modal>
  </div>
</template>

<script>
import { Notice } from "iview";
export default {
  name: "tco-upload",
  props: {
    name: {
      type: String,
      default: "file_key"
    },
    action: String,
    format: {
      type: Array,
      default: []
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    onSuccess: {
      type: Function,
      default: (evnet, file) => {
        Notice.success({
          title: "文件上传成功",
          desc: "文件 " + file.name + " 上传成功。"
        });
      }
    }
  },
  data() {
    return {
      // 文件上传模态框
      bModalUpload: false
    };
  },
  methods: {
    // 打开上传模态框
    handleOpenUpload() {
      this.bModalUpload = true;
    },

    // 导入文件
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "文件 " + file.name + " 格式不正确，请选择图片文件。"
      });
    },
    handleBeforeUpload(file) {
      this.$Notice.warning({
        title: "文件准备上传",
        desc: "文件 " + file.name + " 准备上传。"
      });
    },
    handleProgress(event, file) {
      this.$Notice.info({
        title: "文件正在上传",
        desc: "文件 " + file.name + " 正在上传。"
      });
    },
    handleSuccess(evnet, file) {
      this.onSuccess(evnet, file);
      this.bModalUpload = false;
    },
    handleError(event, file) {
      this.$Notice.error({
        title: "文件上传成功",
        desc: "文件 " + file.name + " 上传失败。"
      });
    }
  },
  mounted() {}
};
</script>
