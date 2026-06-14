<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#42A5F5","d":"M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z"}],["rect",{"x":"8","y":"3","fill":"#90CAF9","width":"32","height":"34"}],["rect",{"fill":"#1976D2","x":"18","y":"15","width":"16","height":"2"}],["rect",{"fill":"#1976D2","x":"18","y":"19","width":"16","height":"2"}],["rect",{"fill":"#1976D2","x":"18","y":"23","width":"16","height":"2"}],["rect",{"fill":"#1976D2","x":"18","y":"27","width":"16","height":"2"}],["rect",{"fill":"#1976D2","x":"18","y":"31","width":"16","height":"2"}],["rect",{"fill":"#1976D2","x":"14","y":"15","width":"2","height":"2"}],["rect",{"fill":"#1976D2","x":"14","y":"19","width":"2","height":"2"}],["rect",{"fill":"#1976D2","x":"14","y":"23","width":"2","height":"2"}],["rect",{"fill":"#1976D2","x":"14","y":"27","width":"2","height":"2"}],["rect",{"fill":"#1976D2","x":"14","y":"31","width":"2","height":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
