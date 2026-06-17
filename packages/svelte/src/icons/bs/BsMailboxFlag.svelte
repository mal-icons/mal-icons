<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.5 8.5V3.71l0.85-0.85A0.50.5 0 0 0 11.5 2.5v-2A0.50.5 0 0 0 11 0H9.5a0.50.5 0 0 0-0.50.5v8zM5 7c0 0.33-0.160.26-0.410.16C4.42 7.09 4.22 7 4 7s-0.420.09-0.580.16C3.16 7.26 3 7.33 3 7a1 1 0 0 1 2 0"}],["path",{"d":"M4 3h4v1H6.65A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
