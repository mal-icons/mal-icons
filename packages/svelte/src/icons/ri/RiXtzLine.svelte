<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 6V2H7V6H4.5V8H7V13C7 15.21 8.79 17 11 17C12.02 17 12.96 16.61 13.67 15.98L12.33 14.49C11.98 14.81 11.51 15 11 15C9.9 15 9 14.1 9 13V8H15.62L11.5 11.97L11.5 13.5H12.5C15.57 13.5 17.5 15.68 17.5 17.5C17.5 19.38 15.87 21 13.75 21C11.93 21 10.46 19.8 10.09 18.27L8.15 18.73C8.74 21.21 11.05 23 13.75 23C16.87 23 19.5 20.59 19.5 17.5C19.5 14.93 17.47 12.57 14.59 11.78L19 7.53V6H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
