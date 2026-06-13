<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"256","r":"48"}],["circle",{"cx":"416","cy":"256","r":"48"}],["circle",{"cx":"96","cy":"256","r":"48"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
