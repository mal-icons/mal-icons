<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M224-140h510L479-395 224-140ZM845-29l-51-51H80l357-357-328-328 43-43L888-72l-43 43Zm35-137-60-60v-510L565-481l-42-42 357-357v714ZM693-354Zm-86 86Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
