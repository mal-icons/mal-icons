<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10.78 8.53-3.75 3.75a0.750.75 0 1 1-1.06-1.06l2.47-2.47H1.75a0.750.75 0 0 1 0-1.5h6.69L5.97 4.78a0.750.75 0 1 1 1.06-1.06l3.75 3.75a0.750.75 0 0 1 0 1.06ZM13 12.25v-8.5a0.750.75 0 0 1 1.5 0v8.5a0.750.75 0 0 1-1.5 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
