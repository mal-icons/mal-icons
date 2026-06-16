<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-80v-560h800v560H80Zm60-60h680v-440H140v440Zm267-71 221-149-221-148v297ZM149-700v-60h662v60H149Zm131-120v-60h400v60H280ZM140-140v-440 440Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
