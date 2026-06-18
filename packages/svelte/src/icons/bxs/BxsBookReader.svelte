<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 8v11.53S6.62 19.36 12 22c5.38-2.64 10-2.47 10-2.47V8s-5.45 0-10 2.47C7.45 8 2 8 2 8z"}],["circle",{"cx":"12","cy":"5","r":"3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
