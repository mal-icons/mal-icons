<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 8h2v5c0 2.21 1.79 4 4 4h2v5h2v-5h2c2.21 0 4-1.79 4-4V8h2V6H3v2zm4-6h2v3H7zm8 0h2v3h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
