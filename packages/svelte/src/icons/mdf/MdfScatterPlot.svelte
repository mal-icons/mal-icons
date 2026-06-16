<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"7","cy":"14","r":"3"}],["circle",{"cx":"11","cy":"6","r":"3"}],["circle",{"cx":"16.6","cy":"17.6","r":"3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
