import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-stacked-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStackedView {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 2C3.45 2 3 2.45 3 3V14C3 14.55 3.45 15 4 15H20C20.55 15 21 14.55 21 14V3C21 2.45 20.55 2 20 2H4ZM5 13V4H19V13H5ZM4 17C3.45 17 3 17.45 3 18V22H5V19H19V22H21V18C21 17.45 20.55 17 20 17H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStackedView;
