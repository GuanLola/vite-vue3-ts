<template>
  <div v-for="(item, key) in bandList" :key="key">
    <div v-if="!item.is_ad" class="woo-pannel" @click="searchInWeibo(item.word)">
      <div class="hot-topic-item">
        <div class="woo-box-flex">
          <div class="woo-box-item-flex">
            <div class="topic-title-item woo-box-flex">
              <div
                :class="{
                  'topic-rank-img': key < 3,
                  'topic-rank-nomal-img': key > 3,
                }"
              >
                <span class="topic-order-num">{{ key + 1 }}</span>
              </div>
              <div class="topic-item">{{ item.word }}</div>
            </div>
            <div
              v-if="item.mblog"
              class="topic-title-text"
              v-html="item.mblog.text"
            ></div>
            <div class="hot-topic-num">
              <span>热度值：{{ item.raw_hot }}</span>
            </div>
          </div>
          <div
            v-if="item.mblog.page_info || item.mblog?.pic_ids?.length !== 0"
            class="woo-box-flex woo-box-alignCenter hot-topic-right"
          >
            <!-- 素材 -->
            <div class="hotTopic-video">
              <div class="video-time">
                <span>0:58</span>
              </div>
              <div class="woo-picture-main">
                <div class="woo-picture-mask" />
                <img
                  v-if="item.mblog.page_info"
                  class="picture-img"
                  :src="item.mblog.page_info.page_pic"
                  referrerpolicy="no-referrer"
                />
                <img
                  v-if="!item.mblog.page_info && item.mblog.pic_ids"
                  class="picture-img"
                  :src="
                    `https://wx2.sinaimg.cn/orj360/` +
                      item.mblog.pic_ids[0] +
                      `.jpg`
                  "
                  referrerpolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getWeiboHotBand } from "@/api/weibo";
import "./index.scss";
const props = defineProps({
  row: {
    type: Object,
    default: {},
  },
  order: {
    type: Number,
    default: 1,
  },
});

const searchInWeibo = (e: string) => {
  const url = `https://s.weibo.com/weibo?q=%23${e}%23`;
  window.open(url);
};

const bandList = ref<Array<any>>([])
onMounted(() => {
  getWeiboHotBand().then((res: any) => {
    if (res.ok === 1) {
      bandList.value = res.data.band_list
    }
  });
});
</script>
