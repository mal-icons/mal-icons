<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C16.97 2 21 6.03 21 11V18.5C21 20.43 19.43 22 17.5 22C16.3 22 15.24 21.4 14.61 20.48C14.1 21.39 13.12 22 12 22C10.88 22 9.9 21.39 9.39 20.48C8.76 21.4 7.7 22 6.5 22C4.63 22 3.1 20.54 3.01 18.69L3 18.5V11C3 6.03 7.03 2 12 2ZM16 13H14C14 14.1 13.1 15 12 15C10.95 15 10.08 14.18 10.01 13.15L10 13H8L8 13.2C8.11 15.32 9.86 17 12 17C14.14 17 15.89 15.32 16 13.2L16 13ZM12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
