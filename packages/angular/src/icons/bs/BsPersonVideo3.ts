import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-video3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonVideo3 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 0.80.80.80.80.8h6.4s0.8 0 0.8-0.8-0.8-3.2-4-3.2-4 2.4-4 3.2"}],["path",{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.24c0.12-0.330.3-0.670.53-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c0.350.230.660.50.910.78Q16 12.31 16 12V4a2 2 0 0 0-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonVideo3;
