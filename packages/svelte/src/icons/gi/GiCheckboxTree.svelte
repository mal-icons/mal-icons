<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M249.28 106.28V250h-77.19v-56.25H22.47V319.41h149.62v-50.72h77.19v148.41h18.69V357.22h71.69v50.72H489.28V282.28H339.66v56.25H267.97V189.41h71.69v50.72H489.28V114.47H339.66V170.72H267.97v-64.44h-18.69zm109.06 26.88h112.25v88.28h-112.25v-88.28zm-317.19 79.28h112.25v88.28H41.16v-88.28zm317.19 88.53h112.25v88.28h-112.25v-88.28z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
