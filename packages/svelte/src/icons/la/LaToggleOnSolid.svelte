<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 9 7 C 4.04 7 0 11.04 0 16 C 0 20.96 4.04 25 9 25 L 23 25 C 27.96 25 32 20.96 32 16 C 32 11.04 27.96 7 23 7 Z M 23 9 C 26.88 9 30 12.12 30 16 C 30 19.88 26.88 23 23 23 C 19.12 23 16 19.88 16 16 C 16 12.12 19.12 9 23 9 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
