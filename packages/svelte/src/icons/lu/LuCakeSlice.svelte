<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 13H3"}],["path",{"d":"M16 17H3"}],["path",{"d":"m7.2 7.9-3.39 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.65c0-2-2.44-6.03-6.44-8.03a1 1 0 0 0-1.080.06L10.4 5.6"}],["circle",{"cx":"9","cy":"7","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
