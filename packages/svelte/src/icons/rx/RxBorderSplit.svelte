<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"7","y":"5.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"3.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"13.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"1.02","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"5","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"3","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"9","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"11","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"9.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"11.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"7.03","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 1.5C1 1.22 1.22 1 1.5 1H6V2H2V6H1V1.5ZM13 2H9V1H13.5C13.78 1 14 1.22 14 1.5V6H13V2ZM1 13.5V9H2V13H6V14H1.5C1.22 14 1 13.78 1 13.5ZM13 13V9H14V13.5C14 13.78 13.78 14 13.5 14H9.5V13H13Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
