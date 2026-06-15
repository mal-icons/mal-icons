<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6H13V18H11V6Z","fill":"currentColor"}],["path",{"d":"M7 13H9V18H7V13Z","fill":"currentColor"}],["path",{"d":"M15 9H17V18H15V9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
