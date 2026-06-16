<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M276-324h252q12.75 0 21.38-8.62T558-354v-93l121 95q11 9 23.5 2.5T715-370v-220q0-14-12.5-20.5T679-608l-121 95v-93q0-12.75-8.62-21.37T528-636H276q-12.75 0-21.37 8.63T246-606v252q0 12.75 8.63 21.38T276-324ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0-520v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
