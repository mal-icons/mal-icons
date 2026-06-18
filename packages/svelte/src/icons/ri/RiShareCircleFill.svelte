<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 2.05V4.06C7.05 4.55 4 7.92 4 12C4 16.42 7.58 20 12 20C16.08 20 19.45 16.95 19.94 13H21.95C21.45 18.05 17.19 22 12 22C6.48 22 2 17.52 2 12C2 6.81 5.95 2.55 11 2.05ZM18.71 6.71L12 13.41L10.59 12L17.29 5.29L14 2H22V10L18.71 6.71Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
