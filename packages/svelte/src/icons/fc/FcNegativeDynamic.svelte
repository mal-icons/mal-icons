<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"fill":"#00BCD4","x":"19","y":"22","width":"10","height":"20"}],["rect",{"fill":"#00BCD4","x":"6","y":"8","width":"10","height":"34"}],["rect",{"fill":"#00BCD4","x":"32","y":"30","width":"10","height":"12"}],["polygon",{"fill":"#3F51B5","points":"42,12 32,22 42,22"}],["rect",{"fill":"#3F51B5","x":"32","y":"6.9","transform":"matrix(.707 -.707 .707 .707 .059 28.142)","width":"4","height":"14.1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
