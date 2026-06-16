import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-ramp-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRampLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21c-0.55 0-1-0.45-1-1V6.83l-0.880.88A11 0 1 1 8.71 6.3l2.59-2.59a11 0 0 1 1.41 0L15.3 6.3a11 0 1 1-1.41 1.41L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62a0.990.99 0 0 1 0.14 1.53c-0.330.33-0.870.4-1.260.13-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 0.56-0.45 1.01-1 1.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRampLeft;
