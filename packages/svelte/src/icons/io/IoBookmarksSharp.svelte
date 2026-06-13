<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"points":"112 0 112 48 416 48 416 416 464 448 464 0 112 0"}],["polygon",{"points":"48 80 48 512 216 388 384 512 384 80 48 80"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
