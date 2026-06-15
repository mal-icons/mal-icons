<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.55 8C12 8 11.55 8.45 11.55 9C11.55 9.55 12 10 12.55 10H16.55C17.1 10 17.55 9.55 17.55 9C17.55 8.45 17.1 8 16.55 8H12.55Z","fill":"currentColor","fill-opacity":"0.5"}],["path",{"d":"M12.55 17C12 17 11.55 17.45 11.55 18C11.55 18.55 12 19 12.55 19H16.55C17.1 19 17.55 18.55 17.55 18C17.55 17.45 17.1 17 16.55 17H12.55Z","fill":"currentColor","fill-opacity":"0.5"}],["path",{"d":"M12.55 5C12 5 11.55 5.45 11.55 6C11.55 6.55 12 7 12.55 7H20.55C21.1 7 21.55 6.55 21.55 6C21.55 5.45 21.1 5 20.55 5H12.55Z","fill":"currentColor","fill-opacity":"0.8"}],["path",{"d":"M12.55 14C12 14 11.55 14.45 11.55 15C11.55 15.55 12 16 12.55 16H20.55C21.1 16 21.55 15.55 21.55 15C21.55 14.45 21.1 14 20.55 14H12.55Z","fill":"currentColor","fill-opacity":"0.8"}],["path",{"d":"M3.45 4C2.9 4 2.45 4.45 2.45 5V10C2.45 10.55 2.9 11 3.45 11H8.45C9 11 9.45 10.55 9.45 10V5C9.45 4.45 9 4 8.45 4H3.45Z","fill":"currentColor"}],["path",{"d":"M3.45 13C2.9 13 2.45 13.45 2.45 14V19C2.45 19.55 2.9 20 3.45 20H8.45C9 20 9.45 19.55 9.45 19V14C9.45 13.45 9 13 8.45 13H3.45Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
