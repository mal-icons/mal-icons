<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22s8.03-5.56 8-12c0-4.41-3.59-8-8-8S4 5.59 4 9.99C3.97 16.44 11.7 21.78 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
