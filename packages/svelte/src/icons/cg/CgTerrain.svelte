<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 10L3 18H13L8 10Z","fill":"currentColor"}],["path",{"d":"M10.53 10.75L13.5 6L21 18H15.06L10.53 10.75Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
