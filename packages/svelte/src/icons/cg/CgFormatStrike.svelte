<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 7H17V5H7V7H11V10H13V7Z","fill":"currentColor"}],["path",{"d":"M11 19V14H13V19H11Z","fill":"currentColor"}],["path",{"d":"M5 13H19V11H5V13Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
