import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-virus-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbVirusSearch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 12a5 5 0 1 0 -5 5"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M11 3h2"}],["path",{"d":"M15.54 8.46l2.83 -2.83"}],["path",{"d":"M17.66 4.93l1.41 1.41"}],["path",{"d":"M17 12h4"}],["path",{"d":"M21 11v2"}],["path",{"d":"M12 17v4"}],["path",{"d":"M13 21h-2"}],["path",{"d":"M8.47 15.54l-2.83 2.83"}],["path",{"d":"M6.34 19.07l-1.41 -1.41"}],["path",{"d":"M7 12h-4"}],["path",{"d":"M3 13v-2"}],["path",{"d":"M8.46 8.46l-2.83 -2.83"}],["path",{"d":"M4.93 6.34l1.41 -1.41"}],["path",{"d":"M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M19.5 19.5l2.5 2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbVirusSearch;
