<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M452-202h60v-201l82 82 42-42-156-152-154 154 42 42 84-84v201ZM160-80v-800h421l219 219v581H160Zm391-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
