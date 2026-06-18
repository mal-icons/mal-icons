<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 6.77v2.34l0.040A2.83 2.83 0 0 1 3.2 11.91v8h2.32v-9.02A2.69 2.69 0 0 1 7.95 8.21c1.29-0.12 2.350.87 2.35 2.17v9.53h2.32v-9.26c0-1.68 1.27-3.1 2.95-3.28 1.57-0.17 2.92 1.09 2.92 2.66v9.89H20.8v-9.87A3.64 3.64 0 0 1 24 6.42V4.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
