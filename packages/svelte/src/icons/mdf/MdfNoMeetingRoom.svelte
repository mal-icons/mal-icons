<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 0.49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
