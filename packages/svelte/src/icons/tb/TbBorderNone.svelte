<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 4l0 0.01"}],["path",{"d":"M8 4l0 0.01"}],["path",{"d":"M12 4l0 0.01"}],["path",{"d":"M16 4l0 0.01"}],["path",{"d":"M20 4l0 0.01"}],["path",{"d":"M4 8l0 0.01"}],["path",{"d":"M12 8l0 0.01"}],["path",{"d":"M20 8l0 0.01"}],["path",{"d":"M4 12l0 0.01"}],["path",{"d":"M8 12l0 0.01"}],["path",{"d":"M12 12l0 0.01"}],["path",{"d":"M16 12l0 0.01"}],["path",{"d":"M20 12l0 0.01"}],["path",{"d":"M4 16l0 0.01"}],["path",{"d":"M12 16l0 0.01"}],["path",{"d":"M20 16l0 0.01"}],["path",{"d":"M4 20l0 0.01"}],["path",{"d":"M8 20l0 0.01"}],["path",{"d":"M12 20l0 0.01"}],["path",{"d":"M16 20l0 0.01"}],["path",{"d":"M20 20l0 0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
