<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m411-305-43-43 102-102H120v-60h348L366-612l43-43 176 176-174 174Zm78 185v-60h291v-600H489v-60h351v720H489Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
