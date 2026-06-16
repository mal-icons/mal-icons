<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M246-324h312v-123l157 123v-312L558-513v-123H246v312ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0-520v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
