<template>
  <div class>
    <div class="box box-danger">
      <div class="box-header with-border">
        <h3 class="box-title">Latest Members</h3>

        <div class="box-tools pull-right">
          <span class="label label-danger">8 New Members</span>
          <button type="button" class="btn btn-box-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div class="box-body no-padding">
        <ul class="users-list clearfix">
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Alexander Pierce</a>
            <span class="users-list-date">Today</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Norman</a>
            <span class="users-list-date">Yesterday</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Jane</a>
            <span class="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">John</a>
            <span class="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Alexander</a>
            <span class="users-list-date">13 Jan</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Sarah</a>
            <span class="users-list-date">14 Jan</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Nora</a>
            <span class="users-list-date">15 Jan</span>
          </li>
          <li>
            <img src="../static/image/avatar.png" alt="User Image" />
            <a class="users-list-name" href="#">Nadia</a>
            <span class="users-list-date">15 Jan</span>
          </li>
        </ul>
      </div>
      <div class="box-footer text-center">
        <a href="javascript:void(0)" class="uppercase">View All Users</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #d2d6de;
  border-top-color: rgb(210, 214, 222);
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box.box-danger {
  border-top-color: #dd4b39;
}
.box-header {
  color: #444;
  display: block;
  padding: 10px;
  position: relative;
}
.with-border {
  border-bottom: 1px solid #f4f4f4;
}
.box-title {
  display: inline-block;
  font-size: 18px;
  margin: 0;
  line-height: 1;
}
.box-header > .box-tools {
  position: absolute;
  right: 10px;
  top: 5px;
}
.pull-right {
  float: right;
}
.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}
.label-danger {
  background-color: #dd4b39 !important;
  color: #fff !important;
}
.btn {
  border-radius: 3px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid transparent;
}
.btn-box-tool {
  padding: 5px;
  font-size: 12px;
  background: transparent;
  color: #97a0b3;
}
.no-padding {
  padding: 0 !important;
}
.box-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;
}
.users-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.users-list-name {
  font-weight: 600;
  color: #444;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

ul {
  margin-top: 0;
  margin-bottom: 10px;
}
li {
  width: 25%;
  float: left;
  padding: 10px;
  text-align: center;
}
img {
  border-radius: 50%;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
a {
  color: #3c8dbc;
  text-decoration: none;
  background-color: transparent;
}
.users-list-date {
  display: block;
  color: #999;
  font-size: 12px;
}
.box-footer {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 1px solid #f4f4f4;
  padding: 10px;
  background-color: #fff;
}
.text-center {
  text-align: center;
}
</style>