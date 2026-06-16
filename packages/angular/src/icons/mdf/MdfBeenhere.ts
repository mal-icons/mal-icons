import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-beenhere",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfBeenhere {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 1H5c-1.1 0-1.990.9-1.99 2L3 15.93c0 0.690.35 1.30.88 1.66L12 23l8.11-5.41c0.53-0.360.88-0.970.88-1.66L21 3c0-1.1-0.9-2-2-2zm-9 15-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfBeenhere;
