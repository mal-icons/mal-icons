<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M242-120v-176H80v-352h790v60H140v232h102v-76h428v60H302v192h368v60H242Zm0-528v-192h476v192h-60v-132H302v132h-60Zm517.83 528Q747-120 738.5-129t-8.5-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.63T790-150q0 12-8.68 21-8.68 9-21.5 9ZM730-250v-278h60v278h-60ZM140-588h730-730Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
