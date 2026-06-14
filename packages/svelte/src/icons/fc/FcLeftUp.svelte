<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#3F51B5","points":"7,7 25,7 7,25"}],["rect",{"x":"22.6","y":"10.3","transform":"matrix(-.707 .707 -.707 -.707 64.28 26.626)","fill":"#3F51B5","width":"8","height":"32.7"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
