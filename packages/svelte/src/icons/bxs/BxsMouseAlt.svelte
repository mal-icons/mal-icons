<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 2v8h6V8c0-3.31-2.69-6-6-6zM5 16c0 3.31 2.69 6 6 6h2c3.31 0 6-2.69 6-6v-4H5v4zm0-8v2h6V2C7.69 2 5 4.69 5 8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
