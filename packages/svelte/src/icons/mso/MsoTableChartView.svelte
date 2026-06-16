<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m289-87-42-42 269-270 140 140 216-215 42 42-258 258-140-140L289-87Zm-149-33q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h600q24 0 42 18t18 42v198H140v482Zm0-542h600v-138H140v138Zm0 0v-138 138Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
