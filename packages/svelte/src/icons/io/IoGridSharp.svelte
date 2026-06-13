<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M240,240H32V32H240Z"}],["path",{"d":"M480,240H272V32H480Z"}],["path",{"d":"M240,480H32V272H240Z"}],["path",{"d":"M480,480H272V272H480Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
