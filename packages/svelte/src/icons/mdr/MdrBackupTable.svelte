<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 7v13h13c0.55 0 1 0.45 1 1s-0.45 1-1 1H4c-1.1 0-2-0.9-2-2V7c0-0.550.45-1 1-1s1 0.45 1 1z"}],["path",{"d":"M6 4v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2zm9 7h5v5h-5v-5zm-7 0h5v5H8v-5zm0-7h12v5H8V4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
