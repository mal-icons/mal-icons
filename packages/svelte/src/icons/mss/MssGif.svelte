<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M468-360v-240h48v240h-48Zm-268 0v-240h192v48H248v144h96v-72h48v120H200Zm388 0v-240h172v48H636v60h81v48h-81v84h-48Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
