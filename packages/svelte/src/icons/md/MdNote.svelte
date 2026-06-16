<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4H4c-1.1 0-2 0.9-2 2v12.01c0 1.10.9 1.99 2 1.99h16c1.1 0 2-0.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
