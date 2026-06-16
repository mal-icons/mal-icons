<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-200v-560h292v80H160v138h255v342H80Zm80-80h175v-182H160v182Zm422 0h218v-400H582v400Zm-80 80v-560h378v560H502Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
