<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M50 37.5A37.5 37.5 0 0 1 87.5 0h175A37.5 37.5 0 0 1 300 37.5V200H87.5A37.5 37.5 0 0 1 50 162.5zM300 200h212.5a37.5 37.5 0 0 1 37.5 37.5v125a37.5 37.5 0 0 1-37.5 37.5H300zM50 437.5A37.5 37.5 0 0 1 87.5 400H300v162.5a37.5 37.5 0 0 1-37.5 37.5h-175A37.5 37.5 0 0 1 50 562.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
