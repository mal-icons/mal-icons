<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.37 8L13.87 10.6V9H6.89V13H4.89V7H13.87V5.4L18.37 8Z","fill":"currentColor"}],["path",{"d":"M10.13 17H19.11V11H17.11V15H10.13V13.4L5.63 16L10.13 18.6V17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
