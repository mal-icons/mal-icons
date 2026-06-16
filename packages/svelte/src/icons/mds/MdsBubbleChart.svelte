<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"7.2","cy":"14.4","r":"3.2"}],["circle",{"cx":"14.8","cy":"18","r":"2"}],["circle",{"cx":"15.2","cy":"8.8","r":"4.8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
