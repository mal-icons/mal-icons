<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 4C7.55 4 8 4.45 8 5V11.33L18.22 4.52C18.45 4.37 18.76 4.43 18.92 4.66C18.97 4.74 19 4.84 19 4.93V19.07C19 19.34 18.78 19.57 18.5 19.57C18.4 19.57 18.3 19.54 18.22 19.48L8 12.67V19C8 19.55 7.55 20 7 20C6.45 20 6 19.55 6 19V5C6 4.45 6.45 4 7 4ZM17 7.74L10.61 12L17 16.26V7.74Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
