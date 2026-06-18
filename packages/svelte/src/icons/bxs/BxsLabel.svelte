<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.81 4.42A11 0 0 0 16 4H3a1 1 0 0 0-0.81 1.58L6.77 12l-4.58 6.42A1 1 0 0 0 3 20h13a11 0 0 0 0.81-0.42l5-7a11 0 0 0 0-1.16l-5-7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
