<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-9 6H8v4h3v2H8c-1.1 0-2-0.9-2-2v-4c0-1.10.9-2 2-2h3v2zm7 0h-3v4h3v2h-3c-1.1 0-2-0.9-2-2v-4c0-1.10.9-2 2-2h3v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
