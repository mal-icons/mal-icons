<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.36 0A1.87 1.87 0 4.49 1.87V24h5.96V0zm7.11 0v12h4.17a1.87 1.87 0 1.87-1.87V0zm0 18.04V24h4.17a1.87 1.87 0 1.87-1.87v-4.1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
