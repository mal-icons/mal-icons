<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.64 0C0.73 0 0 0.73 0 1.64v16.5c0 0.90.73 1.64 1.64 1.64h3.96v3.32c0 0.80.97 1.21 1.540.64l3.96-3.96h11.27c0.9 0 1.64-0.73 1.64-1.64V5.59L18.41 0Zm3.96 5.59h12.82v8.59H8.46l-2.86 2.86Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
