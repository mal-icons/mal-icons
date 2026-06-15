<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 8.98L16.24 4.73L14.83 3.32L12 6.15L9.17 3.32L7.76 4.73L12 8.98Z","fill":"currentColor"}],["path",{"d":"M5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13H6C5.45 13 5 12.55 5 12Z","fill":"currentColor"}],["path",{"d":"M12 15.02L7.76 19.27L9.17 20.68L12 17.85L14.83 20.68L16.24 19.27L12 15.02Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
