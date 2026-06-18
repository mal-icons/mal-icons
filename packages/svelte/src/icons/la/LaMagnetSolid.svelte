<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 9.94 5 5 9.94 5 16 L 5 27 L 13 27 L 13 16 C 13 14.33 14.33 13 16 13 C 17.67 13 19 14.33 19 16 L 19 27 L 27 27 L 27 16 C 27 9.94 22.06 5 16 5 Z M 16 7 C 20.98 7 25 11.02 25 16 L 25 21 L 21 21 L 21 16 C 21 13.25 18.75 11 16 11 C 13.25 11 11 13.25 11 16 L 11 21 L 7 21 L 7 16 C 7 11.02 11.02 7 16 7 Z M 7 23 L 11 23 L 11 25 L 7 25 Z M 21 23 L 25 23 L 25 25 L 21 25 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
