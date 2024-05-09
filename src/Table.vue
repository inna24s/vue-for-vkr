<template>
  <div class="small-content">
    <table class="table table-hover table-striped test-data">
      <thead>
      <tr>
        <td> № </td>
        <td> Symbol </td>
        <td> Weight </td>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="{ position, symbol, weight } of rows"
          :key="position"
          :data-label="symbol"
          v-memo="[weight, symbol]"
      >
        <td class="col-md-1">{{ position }}</td>
        <td class="col-md-4"> {{ symbol }}</td>
        <td class="col-md-2">{{ weight }}</td>
      </tr>
      </tbody>
    </table>
    <section class="control-panel">
      <div class="buttons">
        <div class="col-md-6">
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="run" @click="run(1000)" ref="text">Create 1,000 rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="runlots" @click="run(10000)">Create 10,000 rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="add" @click="add()" ref="text">Append 1,000 rows
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="update" @click="update('5')">Update every 5th row
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="updateAll" @click="update('all')">Update all rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="swaprows" @click="swapRows()">Swap Rows</button>
          </div>
        </div>
        <div class="server__btn smallpad table--padding">
        <button
            type="button"
            class="clear__btn btn-primary btn-block"
            @click="clear()"
            @disabled="!data.length"
        >
          x Clear table
        </button>
      </div>
      </div>
      <Form @create-el="createEl($event)"></Form>
    </section>
  </div>
</template>

<script lang="ts" setup>

import {shallowRef} from 'vue'
import ClientService from '@/services/ClientService';
import Form from "@/Form.vue";
const rows = shallowRef([]);

getBigTable(20);

function getBigTable(count) {
  ClientService.getBigTable(count).then((res: any[]) => {
    if (res.length) {
      setRows(res);
    }
  });
}

function setRows(update = rows.value.slice()) {
  rows.value = update
}

function add() {
  ClientService.addData(1000).then((res: any[]) => {
    if (res.length) {
      setRows(res);
    }
  });
}

function run(count) {
  getBigTable(count);
}

function update(all) {
  ClientService.updateRow(all).then((res: any[]) => {
    if (res.length) {
      setRows(res);
    }
  });
}

function clear() {
  ClientService.clear().then(() => {
    setRows([]);
  });
}

function swapRows() {
  const _rows = rows.value
  const d1 = _rows[1];
  _rows[1] = _rows[_rows.length-1];
  _rows[_rows.length-1] = d1;
  setRows();
}

function createEl(el) {
  ClientService.addElement(el).then(() => {
    rows.value.push({
      position: rows.value.length + 1,
      ...el
    });
    setRows();
  });
}
</script>

<style scoped>
.small-content {
  display: flex;
  gap: 40px;
  margin-top: 16px;
}

.col-md-6 {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.table--padding {
  padding-bottom: 20px;
}

.btn-primary {
  height: 40px;
  border-radius: 4px;
  border: 1px solid;
}

.clear__btn {
  background-color: bisque;
  width: 100px;
}

td {
  text-align: center;
  padding: 4px;
}
</style>
