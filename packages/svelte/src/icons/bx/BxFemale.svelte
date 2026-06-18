<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"4","r":"2"}],["path",{"d":"M14.95 7.68A11 0 0 0 14 7h-4a11 0 0 0-0.950.68l-2 6 1.780.59L8 18h2v4h4v-4h2l-0.83-3.72 1.78-0.59-2-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
