<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6C20.45 6 20 6.45 20 7V17C20 17.55 20.45 18 21 18C21.55 18 22 17.55 22 17V7C22 6.45 21.55 6 21 6Z","fill":"currentColor"}],["path",{"d":"M4 14C5.1 14 6 13.1 6 12C6 10.9 5.1 10 4 10C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14Z","fill":"currentColor"}],["path",{"d":"M12 12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12C8 10.9 8.9 10 10 10C11.1 10 12 10.9 12 12Z","fill":"currentColor"}],["path",{"d":"M16 14C17.1 14 18 13.1 18 12C18 10.9 17.1 10 16 10C14.9 10 14 10.9 14 12C14 13.1 14.9 14 16 14Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
