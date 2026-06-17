import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-snow2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSnow2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16a0.50.5 0 0 1-0.5-0.5v-1.29l-0.650.65a0.50.5 0 0 1-0.71-0.71L7.5 12.79v-1.09l-0.650.65a0.50.5 0 0 1-0.71-0.71L7.5 10.29V8.87l-1.240.71-0.49 1.85a0.50.5 0 1 1-0.97-0.26l0.24-0.88-0.940.54-0.5 1.85a0.50.5 0 1 1-0.97-0.26l0.24-0.88-1.120.65a0.50.5 0 0 1-0.5-0.87l1.12-0.65-0.88-0.24a0.50.5 0 1 1 0.26-0.97l1.850.50.94-0.54-0.88-0.24a0.50.5 0 1 1 0.26-0.97l1.850.5L7 8l-1.24-0.71-1.850.5a0.50.5 0 1 1-0.26-0.97l0.88-0.24-0.94-0.54-1.850.5a0.50.5 0 0 1-0.26-0.97l0.88-0.24-1.12-0.65a0.50.5 0 1 1 0.5-0.87l1.120.65-0.24-0.88a0.50.5 0 0 1 0.97-0.26l0.5 1.850.940.54-0.24-0.88a0.50.5 0 0 1 0.97-0.26l0.5 1.85 1.240.71V5.71L6.15 4.35a0.50.5 0 1 1 0.71-0.71l0.650.65V3.21L6.15 1.85a0.50.5 0 1 1 0.71-0.71l0.650.65V0.5a0.50.5 0 0 1 1 0v1.29l0.65-0.65a0.50.5 0 1 1 0.710.71L8.5 3.21v1.09l0.65-0.65a0.50.5 0 1 1 0.710.71L8.5 5.71v1.43l1.24-0.710.5-1.85a0.50.5 0 1 1 0.970.26l-0.240.880.94-0.540.5-1.85a0.50.5 0 1 1 0.970.26l-0.240.88 1.12-0.65a0.50.5 0 0 1 0.50.87l-1.120.650.880.24a0.50.5 0 1 1-0.260.97l-1.85-0.49-0.940.540.880.24a0.50.5 0 1 1-0.260.97l-1.85-0.49L9 8l1.240.71 1.85-0.49a0.50.5 0 0 1 0.260.97l-0.880.240.940.54 1.85-0.49a0.50.5 0 0 1 0.260.97l-0.880.24 1.120.65a0.50.5 0 0 1-0.50.87l-1.12-0.650.240.88a0.50.5 0 1 1-0.970.26l-0.49-1.85-0.94-0.540.240.88a0.50.5 0 0 1-0.970.26L9.74 9.58 8.5 8.87v1.43l1.35 1.35a0.50.5 0 0 1-0.710.71l-0.65-0.65v1.09l1.35 1.35a0.50.5 0 0 1-0.710.71l-0.65-0.65V15.5a0.50.5 0 0 1-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSnow2;
