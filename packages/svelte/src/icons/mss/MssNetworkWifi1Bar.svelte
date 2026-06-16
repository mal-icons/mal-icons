<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-120 0-600q97-93 220-146.5T480-800q137 0 260 53.5T960-600L480-120ZM344-338q29-23 63.5-36t72.5-13q38 0 72.5 13t63.5 36l256-256q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l256 256Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
