<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 17c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h6V5H5v14h14v-2h-6z","opacity":".3"}],["path",{"d":"M21 7.28V5c0-1.1-0.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2v-2.28A2 2 0 0 0 22 15V9c0-0.74-0.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h6v2H5z"}],["circle",{"cx":"16","cy":"12","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
