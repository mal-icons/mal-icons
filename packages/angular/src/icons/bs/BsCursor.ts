import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cursor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCursor {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.08 2.18a0.50.5 0 0 1 0.10.56L8.53 15.47a0.50.5 0 0 1-0.92-0.01L5.57 10.690.8 8.65a0.50.5 0 0 1-0.01-0.92l12.73-5.66a0.50.5 0 0 1 0.560.1zM2.25 8.18l3.9 1.67a0.50.5 0 0 1 0.260.26l1.67 3.9L12.74 3.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCursor;
