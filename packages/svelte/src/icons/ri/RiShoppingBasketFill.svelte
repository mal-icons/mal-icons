<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C15.32 2 18 4.69 18 8V9H22V11H20.84L20.08 20.08C20.04 20.6 19.6 21 19.08 21H4.93C4.4 21 3.97 20.6 3.93 20.08L3.17 11H2V9H6V8C6 4.69 8.69 2 12 2ZM13 13H11V17H13V13ZM9 13H7V17H9V13ZM17 13H15V17H17V13ZM12 4C9.86 4 8.11 5.68 8.01 7.8L8 8V9H16V8C16 5.86 14.32 4.11 12.2 4L12 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
