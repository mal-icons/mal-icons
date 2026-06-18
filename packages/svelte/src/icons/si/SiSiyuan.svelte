<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m0 8.46 6.82-6.82L12 6.82l5.18-5.18L24 8.46v13.91l-6.82-6.82v-2.31l5.18 5.18v-9.28L17.18 3.95v11.59L12 20.73l-5.18-5.18v-2.31L12 18.41v-9.28L6.82 3.95v11.59L0 22.36Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
