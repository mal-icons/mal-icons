<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 21H5c-1.1 0-2-0.9-2-2V5c0-1.10.9-2 2-2h6v18zm2 0h6c1.1 0 2-0.9 2-2v-7h-8v9zm8-11V5c0-1.1-0.9-2-2-2h-6v7h8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
