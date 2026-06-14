<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 22v-8"}],["path",{"d":"M2.34 8.89 10 14l11.72-7.03"}],["path",{"d":"M22 14a2 2 0 0 1-0.97 1.72l-10 6a2 2 0 0 1-2.14-0.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 0.97-1.71l10-6a2 2 0 0 1 2.140.05l6 4A2 2 0 0 1 22 8z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
