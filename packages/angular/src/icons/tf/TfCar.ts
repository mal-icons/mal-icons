import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-car",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCar {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 9.98l-1.96 0-2.05-3.99h-7.95l-2.97 4-2.07 0v4.98h2c0 0.010 0.020 0.02 0 1.1 0.9 2 2 2s2-0.9 2-2c0-0.010-0.010-0.02h5.01c0 0.010 0.020 0.02 0 1.1 0.9 2 2 2s2-0.9 2-2c0-0.010-0.010-0.02h2v-4.99zM13.92 9.99l-3.9 0v-2.99h2.36l1.54 2.99zM5.54 7h3.48v2.99l-5.7 0.01 2.22-3zM4 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM13 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM16 13.98h-1.29c-0.35-0.58-0.98-0.98-1.71-0.98s-1.36 0.4-1.71 0.98h-5.58c-0.35-0.58-0.98-0.98-1.71-0.98s-1.36 0.4-1.71 0.98h-1.29v-2.98l15-0.01v2.99z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCar;
