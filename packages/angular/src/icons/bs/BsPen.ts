import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPen {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.50.80.15-0.15a1.21 1.21 0 1 1 1.71 1.71l-0.150.15a1.5 1.5 0 0 1-0.06 2.06L4.85 14.85a0.50.5 0 0 1-0.230.13l-4 1a0.50.5 0 0 1-0.61-0.61l1-4a0.50.5 0 0 1 0.13-0.23l9.64-9.64a0.50.5 0 0 0-0.640.06L6.85 4.85a0.50.5 0 1 1-0.71-0.71L9.440.85A1.5 1.5 0 0 1 11.50.8a1.5 1.5 0 0 1 20m-0.640.77a0.50.5 0 0 0-0.71 0L1.95 11.76l-0.76 3.06 3.06-0.76L14.44 3.85a0.50.5 0 0 0 0-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPen;
