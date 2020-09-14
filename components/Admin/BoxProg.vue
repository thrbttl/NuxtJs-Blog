<template>
  <div class>
    <div class="info-box bg-yellow">
      <span class="info-box-icon">
        <i class="fas fa-tags"></i>
      </span>

      <div class="info-box-content">
        <span class="info-box-text">Inventory</span>
        <span class="info-box-number">5,200</span>

        <div class="progress">
          <div class="progress-bar" style="width: 50%"></div>
        </div>
        <span class="progress-description">50% Increase in 30 Days</span>
      </div>
    </div>
    <div class="info-box bg-green">
      <span class="info-box-icon">
        <i class="far fa-heart"></i>
      </span>
      <div class="info-box-content">
        <span class="info-box-text">Mentions</span>
        <span class="info-box-number">92,050</span>

        <div class="progress">
          <div class="progress-bar" style="width: 20%"></div>
        </div>
        <span class="progress-description">20% Increase in 30 Days</span>
      </div>
    </div>
    <div class="info-box bg-red">
      <span class="info-box-icon">
        <i class="fas fa-cloud-download-alt"></i>
      </span>

      <div class="info-box-content">
        <span class="info-box-text">Downloads</span>
        <span class="info-box-number">114,381</span>

        <div class="progress">
          <div class="progress-bar" style="width: 70%"></div>
        </div>
        <span class="progress-description">70% Increase in 30 Days</span>
      </div>
    </div>
    <div class="info-box bg-aqua">
      <span class="info-box-icon">
        <i class="far fa-comment"></i>
      </span>

      <div class="info-box-content">
        <span class="info-box-text">Direct Messages</span>
        <span class="info-box-number">163,921</span>

        <div class="progress">
          <div class="progress-bar" style="width: 40%"></div>
        </div>
        <span class="progress-description">40% Increase in 30 Days</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-yellow {
  background-color: #f39c12 !important;
  color: #fff !important;
  color: #fff !important;
}
.bg-green {
  background-color: #00a65a !important;
  color: #fff !important;
}
.bg-red {
  background-color: #dd4b39 !important;
  color: #fff !important;
}
.bg-aqua {
  background-color: #00c0ef !important;
  color: #fff !important;
}

.info-box {
  display: block;
  min-height: 90px;
  background: #fff;
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-bottom: 15px;
}
.info-box-icon {
  border-top-left-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 2px;
  display: block;
  float: left;
  height: 95px;
  width: 90px;
  text-align: center;
  font-size: 45px;
  line-height: 90px;
  background: rgba(0, 0, 0, 0.2);
}
.info-box-content {
  padding: 5px 10px;
  margin-left: 90px;
}
.info-box-text {
  text-transform: uppercase;
}
.info-box-number {
  display: block;
  font-weight: bold;
  font-size: 18px;
}
.progress {
  background: rgba(0, 0, 0, 0.2);
  margin: 5px -10px 5px -10px;
  height: 2px;
  border-radius: 0;
}
.progress-bar {
  background: #fff;
  border-radius: 0;
}
.progress-description {
  margin: 0;
  display: block;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>