<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 13h1v7c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-7h1a1 1 0 0 0 0.71-1.71l-9-9a11 0 0 0-1.41 0l-9 9A1 1 0 0 0 3 13zm9-8.59 6 6V15l0 5H6v-9.59l6-6z"}],["path",{"d":"M12 17c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
