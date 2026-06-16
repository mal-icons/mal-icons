<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 5h8v10H8z","opacity":".3"}],["path",{"d":"M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99zM16 15H8V5h8v10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
