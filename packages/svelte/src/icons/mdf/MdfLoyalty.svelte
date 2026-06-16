<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 0.9-2 2v7c0 0.550.22 1.050.59 1.42l9 9c0.360.360.860.58 1.410.580.55 0 1.05-0.22 1.41-0.59l7-7c0.37-0.360.59-0.860.59-1.41 0-0.55-0.23-1.06-0.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27A2.5 2.5 0 0 1 10.5 11c0.69 0 1.320.28 1.770.74l0.730.720.73-0.73a2.5 2.5 0 0 1 3.54 3.54z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
