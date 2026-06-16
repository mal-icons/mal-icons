<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.5 9c-0.42 0-0.830.04-1.240.11L1.01 3 1 10l9 2-9 2 0.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"}],["path",{"d":"m18.27 14.03-1.77 1.76-1.77-1.76-0.70.7 1.76 1.77-1.76 1.770.70.7 1.77-1.76 1.77 1.760.7-0.7-1.76-1.77 1.76-1.77z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
