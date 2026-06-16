<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM80-160v-640h800v640H80Zm60-60h680v-436H140v436Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
