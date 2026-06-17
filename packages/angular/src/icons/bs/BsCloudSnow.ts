import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-snow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudSnow {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.41 4.28a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 0.41-5.97M8.5 1.25a4 4 0 0 1 3.98 3.560.50.5 0 0 0 0.50.45H13a2 2 0 0 10 4H3.5a2.5 2.5 0 1 1 0.61-4.930.50.5 0 0 0 0.6-0.33A4 4 0 0 1 8.5 1.25M2.63 11.5a0.250.25 0 0 1 0.250.25v0.57l0.5-0.29a0.250.25 0 0 1 0.250.43l-0.490.280.50.28a0.250.25 0 0 1-0.250.43l-0.5-0.29v0.57a0.250.25 0 1 1-0.5 0v-0.57l-0.50.29a0.250.25 0 0 1-0.25-0.43l0.5-0.28-0.49-0.28a0.250.25 0 0 1 0.25-0.43l0.50.29v-0.57a0.250.25 0 0 1 0.25-0.25m2.75 2a0.250.25 0 0 1 0.250.25v0.57l0.5-0.29a0.250.25 0 0 1 0.250.43l-0.490.280.50.28a0.250.25 0 0 1-0.250.43l-0.5-0.29v0.57a0.250.25 0 1 1-0.5 0v-0.57l-0.50.29a0.250.25 0 0 1-0.25-0.43l0.5-0.28-0.49-0.28a0.250.25 0 0 1 0.25-0.43l0.50.29v-0.57a0.250.25 0 0 1 0.25-0.25m5.5 0a0.250.25 0 0 1 0.250.25v0.57l0.5-0.29a0.250.25 0 0 1 0.250.43l-0.490.280.50.28a0.250.25 0 0 1-0.250.43l-0.5-0.29v0.57a0.250.25 0 1 1-0.5 0v-0.57l-0.50.29a0.250.25 0 0 1-0.25-0.43l0.5-0.28-0.49-0.28a0.250.25 0 0 1 0.25-0.43l0.50.29v-0.57a0.250.25 0 0 1 0.25-0.25m-2.75-2a0.250.25 0 0 1 0.250.25v0.57l0.5-0.29a0.250.25 0 0 1 0.250.43l-0.490.280.50.28a0.250.25 0 0 1-0.250.43l-0.5-0.29v0.57a0.250.25 0 1 1-0.5 0v-0.57l-0.50.29a0.250.25 0 0 1-0.25-0.43l0.5-0.28-0.49-0.28a0.250.25 0 0 1 0.25-0.43l0.50.29v-0.57a0.250.25 0 0 1 0.25-0.25m5.5 0a0.250.25 0 0 1 0.250.25v0.57l0.5-0.29a0.250.25 0 0 1 0.250.43l-0.490.280.50.28a0.250.25 0 0 1-0.250.43l-0.5-0.29v0.57a0.250.25 0 1 1-0.5 0v-0.57l-0.50.29a0.250.25 0 0 1-0.25-0.43l0.5-0.28-0.49-0.28a0.250.25 0 0 1 0.25-0.43l0.50.29v-0.57a0.250.25 0 0 1 0.25-0.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudSnow;
