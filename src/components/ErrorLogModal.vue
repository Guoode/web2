<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white p-6 rounded-md w-96 relative" @click.stop>
      <button
        class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        @click="$emit('close')"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h2 class="text-xl font-bold mb-4">故障日志</h2>
      <div class="max-h-64 overflow-y-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left font-bold">故障时间</th>
              <th class="px-4 py-2 text-left font-bold">故障原因</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(log, index) in logs" :key="index">
              <td class="px-4 py-2 text-red-500">{{ logTime(log) }}</td>
              <td class="px-4 py-2 text-blue-500">{{ logReason(log) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    logs: {
      type: Array,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    logTime(log) {
      return log.split("] ")[0].slice(1);
    },
    logReason(log) {
      return log.split("] ")[1];
    },
  },
};
</script>
