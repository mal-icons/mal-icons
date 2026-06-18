<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 10.67v2.67L13.33 24h-2.67L0 13.33v-2.67L10.67 0h2.67L24 10.67Zm-12 6.87a5.54 5.54 0 1 0 0-11.07 5.54 5.54 0 0 0 0 11.07Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
