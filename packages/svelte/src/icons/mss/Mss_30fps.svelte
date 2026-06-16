<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-200v-80h255v-160H83v-80h252v-160H80v-80h335v560H80Zm502-80h218v-400H582v400Zm-80 80v-560h378v560H502Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
