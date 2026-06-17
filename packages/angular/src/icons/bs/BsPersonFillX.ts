import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-fill-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonFillX {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.26A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.54-3.39Q8.84 9 8 9c-5 0-6 3-6 4"}],["path",{"d":"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-0.65-4.850.650.650.65-0.65a0.50.5 0 0 1 0.710.71l-0.650.650.650.65a0.50.5 0 0 1-0.710.71l-0.65-0.65-0.650.65a0.50.5 0 0 1-0.71-0.71l0.65-0.65-0.65-0.65a0.50.5 0 0 1 0.71-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonFillX;
