<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.66 24V8.96l8.54 3.37V24zm-9.860v-7.52l8.53-3.370 10.89zM2.8 0h8.53l0 11.67-8.53 3.37zm9.86 0h8.54v10.89l-8.53-3.37z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
