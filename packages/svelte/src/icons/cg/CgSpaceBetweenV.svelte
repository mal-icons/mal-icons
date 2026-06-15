<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5V9H19V5H17V7H7V5H5Z","fill":"currentColor"}],["path",{"d":"M5 19V15H19V19H17V17H7V19H5Z","fill":"currentColor"}],["path",{"d":"M7 11H17V13H7V11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
