<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 5H4V7H16V5Z","fill":"currentColor"}],["path",{"d":"M16 9H4V11H16V9Z","fill":"currentColor"}],["path",{"d":"M4 13H12V15H4V13Z","fill":"currentColor"}],["path",{"d":"M20 16L14 13V19L20 16Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
