<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 10h-2V3H8v7H6V3H4v8c0 1.65 1.35 3 3 3h1v7h2v-7h1c1.65 0 3-1.35 3-3V3h-2v7zm7-7h-1c-1.16 0-2 1.26-2 3v8h2v7h2V4a1 1 0 0 0-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
