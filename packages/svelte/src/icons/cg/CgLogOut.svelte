<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.51 20H4.51C3.41 20 2.51 19.1 2.51 18V6C2.51 4.9 3.41 4 4.51 4H8.51V6H4.51V18H8.51V20Z","fill":"currentColor"}],["path",{"d":"M13.84 17.39L15.26 15.98L11.34 12.02L20.49 12.02C21.04 12.02 21.49 11.58 21.49 11.02C21.49 10.47 21.04 10.02 20.49 10.02L11.32 10.02L15.3 6.08L13.9 4.66L7.5 10.99L13.84 17.39Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
