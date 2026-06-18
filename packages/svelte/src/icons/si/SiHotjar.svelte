<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.12 9.81C12.9 8.27 16.7 6.16 16.7 0h-4.61c0 3.44-1.68 4.38-4.21 5.79C5.1 7.33 1.3 9.44 1.3 15.6h4.61c0-3.44 1.68-4.38 4.21-5.79zM18.1 8.4c0 3.44-1.68 4.38-4.21 5.79-2.78 1.54-6.58 3.66-6.58 9.82h4.61c0-3.44 1.68-4.38 4.21-5.79 2.78-1.54 6.59-3.66 6.59-9.81h-4.61z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
