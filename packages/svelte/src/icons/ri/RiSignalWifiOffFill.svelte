<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.81 1.39L20.49 19.07L19.07 20.49L15.39 16.8L12 21L0.69 7C1.6 6.26 2.59 5.61 3.64 5.05L1.39 2.81L2.81 1.39ZM12 3C16.28 3 20.22 4.5 23.31 7L17.9 13.69L7.73 3.51C9.1 3.18 10.53 3 12 3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
