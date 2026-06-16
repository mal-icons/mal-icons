<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m120-227-53-27 243-479 53 27-243 479Zm264 0-53-27 243-479 53 27-243 479Zm264 0-53-27 243-479 53 27-243 479Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
