<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"6","cy":"6","r":"5","fill-rule":"evenodd","stroke":"currentColor"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {defaultAttr} {...props} />
