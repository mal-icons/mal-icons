<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h14l4 4V4c0-1.1-0.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"}],["path",{"d":"M4 4v12h14.83L20 17.17V4z","opacity":".3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
