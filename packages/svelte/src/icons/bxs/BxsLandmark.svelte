<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 17h-2V9h2V7a11 0 0 0-0.59-0.91l-9.43-4.19-8.42 4.21A1 1 0 0 0 2 7v2h2v8H2v4h19v-4zm-5-8v8h-3V9h3zM7 9h3v8H7V9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
