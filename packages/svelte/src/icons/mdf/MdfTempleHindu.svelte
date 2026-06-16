<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.6 11h10.8l-0.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
