<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.53 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22ZM8.5 14V16H11V18H13V16H14C15.39 16 16.5 14.88 16.5 13.5C16.5 12.12 15.39 11 14 11H10C9.73 11 9.5 10.78 9.5 10.5C9.5 10.23 9.73 10 10 10H15.5V8H13V6H11V8H10C8.62 8 7.5 9.12 7.5 10.5C7.5 11.88 8.62 13 10 13H14C14.28 13 14.5 13.23 14.5 13.5C14.5 13.78 14.28 14 14 14H8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
