<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 9H3V7H7V3H9V9Z","fill":"currentColor"}],["path",{"d":"M9 15H3V17H7V21H9V15Z","fill":"currentColor"}],["path",{"d":"M21 15H15V21H17V17H21V15Z","fill":"currentColor"}],["path",{"d":"M15 9H21V7H17V3H15V9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
