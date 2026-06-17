import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-standing-dress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonStandingDress {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-0.5 12.25V12h1v3.25a0.750.75 0 0 0 1.5 0V12h1l-1-5v-0.21a0.280.28 0 0 1 0.56-0.08l0.79 2.78a0.710.71 0 1 0 1.36-0.4l-1.06-3.46A3 3 0 0 0 8.78 3.5H7.22a3 3 0 0 0-2.87 2.12L3.28 9.08a0.710.71 0 1 0 1.370.41l0.79-2.78a0.280.28 0 0 1 0.560.08V7l-1 5h1v3.25a0.750.75 0 0 0 1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonStandingDress;
