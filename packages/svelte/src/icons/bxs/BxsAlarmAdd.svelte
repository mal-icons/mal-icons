<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9 9-4.12 9-9-4.12-9-9-9zm4 10h-3v3h-2v-3H8v-2h3V9h2v3h3v2zm1.28-10.29 1.41-1.42 3.01 3-1.41 1.42zM5.28 2.29 6.7 3.71l-2.99 3-1.42-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
