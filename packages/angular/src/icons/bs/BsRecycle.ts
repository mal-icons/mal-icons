import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-recycle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsRecycle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.3 1.26a1.5 1.5 0 0 0-2.6 0l-1.7 2.98a0.50.5 0 0 0 0.870.5l1.7-2.98a0.50.5 0 0 1 0.87 0l2.54 4.44-1.26-0.34a0.50.5 0 1 0-0.260.97l2.420.65a0.50.5 0 0 0 0.61-0.35l0.65-2.41a0.50.5 0 1 0-0.97-0.26l-0.33 1.24zM2.97 7.77l-1.250.34a0.50.5 0 1 1-0.26-0.97l2.42-0.65a0.50.5 0 0 1 0.610.35l0.65 2.42a0.50.5 0 0 1-0.970.26l-0.33-1.24-2.54 4.45a0.50.5 0 0 0 0.430.75H5a0.50.5 0 0 1 0 1H1.72A1.5 1.5 0 0 1 0.42 12.24zm10.89 1.46a0.50.5 0 1 0-0.870.5l1.72 3a0.50.5 0 0 1-0.430.75h-5.57l0.65-0.65a0.50.5 0 1 0-0.71-0.71l-1.5 1.5a0.50.5 0 0 0 0 0.71l1.5 1.5a0.50.5 0 1 0 0.71-0.71l-0.65-0.65h5.57a1.5 1.5 0 0 0 1.3-2.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsRecycle;
