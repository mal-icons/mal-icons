<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.21 7 22 8.79 22 11ZM20 14V11C20 9.9 19.1 9 18 9H14V14H20ZM8 11C8.55 11 9 10.55 9 10C9 9.45 8.55 9 8 9C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11ZM8 13C6.34 13 5 11.66 5 10C5 8.34 6.34 7 8 7C9.66 7 11 8.34 11 10C11 11.66 9.66 13 8 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
