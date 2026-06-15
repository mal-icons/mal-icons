<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 5h-3.29l2.33 2.33-0.71 0.71-2.33-2.33v3.29h-1v-3.29l-10.65 10.67-0.71-0.71 10.65-10.67h-3.3v-1h3.29l-2.33-2.33 0.71-0.71 2.33 2.33v-3.29h1v3.3l2.29-2.29 0.71 0.71-2.28 2.29h3.29v1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
