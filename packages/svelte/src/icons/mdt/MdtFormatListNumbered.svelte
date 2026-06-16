<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v0.9h3zm2-8h14v2H7zM5 16H2v1h2v0.5H3v1h1v0.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
