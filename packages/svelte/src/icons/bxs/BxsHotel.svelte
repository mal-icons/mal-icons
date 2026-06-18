<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"8","cy":"11","r":"3"}],["path",{"d":"M18.2 7H12v8H4V6H2v14h2v-3h16v3h2v-4c0-0.010-0.020-0.02H22V11c0-2.1-1.7-4-3.79-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
