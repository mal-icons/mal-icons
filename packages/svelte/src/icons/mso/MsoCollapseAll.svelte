<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m290-85-42-42 232-232 232 232-42 42-190-190L290-85Zm190-517L248-834l42-42 190 190 190-190 42 42-232 232Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
