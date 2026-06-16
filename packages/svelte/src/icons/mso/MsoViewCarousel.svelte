<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-675h140v390H80v-390Zm200-85h400v560H280v-560Zm60 60v440-440Zm400 25h140v390H740v-390Zm-400-25v440h280v-440H340Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
