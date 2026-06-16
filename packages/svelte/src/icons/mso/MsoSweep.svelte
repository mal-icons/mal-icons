<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M411-240v-60h222v60H411Zm-170 0L15-466l43-42 183 183 395-395 42 43-437 437Zm332-175v-60h225v60H573Zm165-175v-60h222v60H738Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
