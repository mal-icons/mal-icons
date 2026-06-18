<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 12C20.09 12 21.12 12.29 22 12.8V6C22 5.45 21.55 5 21 5H12.41L10.41 3H3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H13.8C13.29 20.12 13 19.09 13 18C13 14.69 15.69 12 19 12ZM20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.54L15.46 20.12L17.59 18L15.46 15.88L16.88 14.46L19 16.59L21.12 14.46L22.54 15.88L20.41 18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
