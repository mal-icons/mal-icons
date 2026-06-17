<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.5 3.5a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-1 0V8.75l-6.27 3.64c-0.540.31-1.23-0.07-1.23-0.7v-2.94l-6.27 3.64C0.69 12.7 0 12.32 0 11.69V4.31c0-0.630.69-1.01 1.23-0.7L7.5 7.25v-2.94c0-0.630.69-1.01 1.23-0.7L15 7.25V4a0.50.5 0 0 1 0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
