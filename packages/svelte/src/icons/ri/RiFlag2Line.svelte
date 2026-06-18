<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.14 3C21.41 3 21.64 3.22 21.64 3.5C21.64 3.59 21.62 3.67 21.57 3.75L18 10L21.57 16.25C21.71 16.49 21.63 16.8 21.39 16.93C21.31 16.98 21.23 17 21.14 17H4V22H2V3H21.14ZM18.55 5H4V15H18.55L15.7 10L18.55 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
