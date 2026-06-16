<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3v18a9 9 0 0 0 0-18z"}],["circle",{"cx":"6","cy":"14","r":"1"}],["circle",{"cx":"6","cy":"18","r":"1"}],["circle",{"cx":"6","cy":"10","r":"1"}],["circle",{"cx":"3","cy":"10","r":"0.5"}],["circle",{"cx":"6","cy":"6","r":"1"}],["circle",{"cx":"3","cy":"14","r":"0.5"}],["circle",{"cx":"10","cy":"21","r":"0.5"}],["circle",{"cx":"10","cy":"3","r":"0.5"}],["circle",{"cx":"10","cy":"6","r":"1"}],["circle",{"cx":"10","cy":"14","r":"1.5"}],["circle",{"cx":"10","cy":"10","r":"1.5"}],["circle",{"cx":"10","cy":"18","r":"1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
