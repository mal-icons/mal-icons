<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M240-240v-140h500v-340h140v639L721-240H240ZM80-280v-600h600v440H240L80-280Zm540-220v-320H140v320h480Zm-480 0v-320 320Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
