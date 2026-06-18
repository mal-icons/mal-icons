import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-pnpm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandPnpm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17h4v4h-4l0 -4"}],["path",{"d":"M10 17h4v4h-4l0 -4"}],["path",{"d":"M17 17h4v4h-4l0 -4"}],["path",{"d":"M17 10h4v4h-4l0 -4"}],["path",{"d":"M17 3h4v4h-4l0 -4"}],["path",{"d":"M10 10h4v4h-4l0 -4"}],["path",{"d":"M10 3h4v4h-4l0 -4"}],["path",{"d":"M3 3h4v4h-4l0 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandPnpm;
