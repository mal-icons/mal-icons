<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 5h14v2H7z"}],["circle",{"cx":"4","cy":"6","r":"1.5"}],["path",{"d":"M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c0.82 0 1.5-0.68 1.5-1.5s-0.67-1.5-1.5-1.5-1.50.68-1.5 1.50.68 1.5 1.5 1.5z"}],["circle",{"cx":"4","cy":"12","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
