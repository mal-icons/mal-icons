import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-arrow-back-ios",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrArrowBackIos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a11 0 0 0 0 1.41l8.31 8.31c0.490.49 1.280.49 1.77 0s0.49-1.28 0-1.77L9.38 12l7.25-7.25c0.48-0.480.48-1.28-0.01-1.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrArrowBackIos;
