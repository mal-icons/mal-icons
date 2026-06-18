<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0 1.61 6v12L12 24l10.39-6V6ZM8.54 18v-8L5.07 12V8L12 4l3.46 2-3.46 2v12Zm6.93 0v-8l3.46-2v8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
