<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.64 12.06l0.72 0.7-3.86 3.96-3.86-3.95 0.72-0.7 2.64 2.71v-12.54l-2.64 2.71-0.72-0.7 3.86-3.95 3.86 3.95-0.72 0.7-2.64-2.71v12.54l2.64-2.71z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
