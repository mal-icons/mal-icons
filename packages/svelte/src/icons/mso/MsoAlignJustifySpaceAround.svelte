<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M820-80v-800h60v800h-60ZM80-80v-800h60v800H80Zm530-210v-380h100v380H610Zm-360 0v-380h100v380H250Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
