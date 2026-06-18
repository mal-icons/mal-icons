<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 10 6 C 11.54 7.76 12.28 10.15 12.22 12.61 C 16.18 14.28 22.14 18.73 23.4 25 L 28 25 C 26.05 14.31 14.92 6.77 10 6 z M 8 13 C 12.67 17.91 8.81 24.58 4 25 L 22.97 25 C 21.5 18.29 11.95 13.53 8 13 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
