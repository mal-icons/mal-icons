<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2H8c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM8 20V4h8l0 16H8zM3 7h2V5H3v0.5H2v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zM3 11h2V9H3v0.5H2v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zM3 15h2v-2H3v0.5H2v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zM3 19h2v-2H3v0.5H2v1h1zm18-2h-2v2h2v-0.5h1v-1h-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
