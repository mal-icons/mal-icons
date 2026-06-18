import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-asset",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAsset {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14.22 17.98l6.62 -12.17"}],["path",{"d":"M6.08 9.76l12.22 -6.63"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAsset;
