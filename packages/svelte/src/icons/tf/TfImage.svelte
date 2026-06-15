<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 1v15h15v-15h-15zM15 15h-13v-2h13v2zM2 12v-10h13v10h-13zM14.2 10.16l-0.7 0.72-2.42-2.35-1.55 1.68-2.49-4.41-3.4 4.97-0.83-0.56 4.31-6.3 2.6 4.62 1.32-1.42 3.15 3.06z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
