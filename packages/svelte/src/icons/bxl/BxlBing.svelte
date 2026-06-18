<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m5.71 3 3.59 1.26v12.65l5.06-2.92-2.48-1.16-1.57-3.9 7.97 2.8v4.07l-8.98 5.18-3.59-2L5.71 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
