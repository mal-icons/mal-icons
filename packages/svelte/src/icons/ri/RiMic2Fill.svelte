<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1C14.76 1 17 3.24 17 6V12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12V6C7 3.24 9.24 1 12 1ZM2.19 13.96L4.15 13.57C4.88 17.24 8.12 20 12 20C15.88 20 19.12 17.24 19.85 13.57L21.81 13.96C20.9 18.55 16.85 22 12 22C7.15 22 3.1 18.55 2.19 13.96Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
