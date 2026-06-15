<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.49 20H19.49C20.59 20 21.49 19.1 21.49 18V6C21.49 4.9 20.59 4 19.49 4H15.49V6H19.49V18H15.49V20Z","fill":"currentColor"}],["path",{"d":"M10.16 17.39L8.74 15.98L12.66 12.02L3.51 12.02C2.96 12.02 2.51 11.58 2.51 11.02C2.51 10.47 2.96 10.02 3.51 10.02L12.68 10.02L8.7 6.08L10.1 4.66L16.5 10.99L10.16 17.39Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
