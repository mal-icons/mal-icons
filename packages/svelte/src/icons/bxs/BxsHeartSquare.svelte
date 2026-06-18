<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 21h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zM7.81 8.91a2.75 2.75 0 0 1 3.91 0l0.280.280.28-0.28a2.75 2.75 0 0 1 3.91 0 2.75 2.75 0 0 1 0 3.91L12 17l-4.19-4.19a2.75 2.75 0 0 1 0-3.91z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
