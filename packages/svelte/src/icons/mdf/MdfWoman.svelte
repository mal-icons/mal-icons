<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.620.52-1.94 1.31L7 16h3v6h4v-6h3l-3.06-7.69z"}],["circle",{"cx":"12","cy":"4","r":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
