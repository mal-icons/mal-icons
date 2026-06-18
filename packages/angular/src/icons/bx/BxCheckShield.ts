import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-check-shield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCheckShield {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6.9a11 0 0 0-0.55-0.79l-8-4a1 1 0 0 0-0.89 0l-8 4a1 1 0 0 0-0.550.8c-0.010.11-0.96 10.77 8.59 15.01a0.990.99 0 0 0 0.81 0c9.55-4.25 8.6-14.91 8.59-15.01zM12 19.9C5.23 16.63 4.91 9.64 4.97 7.64L12 4.12l7.03 3.52c0.04 1.99-0.33 9.02-7.03 12.26z"}],["path",{"d":"m11 12.59-2.29-2.29-1.41 1.41L11 15.41l5.71-5.71-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCheckShield;
