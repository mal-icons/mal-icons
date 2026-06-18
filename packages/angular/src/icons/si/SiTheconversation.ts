import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-theconversation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTheconversation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 10.54c-0.13-4.91-4.29-8.77-9.2-8.77H9.01a9 9 0 0 0-5.96 15.75L1.05 22.23l4.94-2.98c0.950.36 1.960.52 3.010.52h6.02c5.04 0 9.1-4.16 8.97-9.23zm-8.94 5.96H9.07c-2.59 0-5.2-2.03-5.7-4.58a5.72 5.72 0 0 1 5.63-6.87h5.99c2.59 0 5.21 2.03 5.7 4.580.69 3.67-2.1 6.88-5.63 6.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTheconversation;
