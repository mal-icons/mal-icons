<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.91 4.44L0 10.74v2.52L8.73 8.22v10.08l2.18 1.26zM6.55 12l-4.36 2.52 4.36 2.52zm6.55-2.52L17.45 12l-4.36 2.52zm0-5.04L24 10.74v2.52l-10.91 6.3v-2.52L21.82 12 13.09 6.96z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
