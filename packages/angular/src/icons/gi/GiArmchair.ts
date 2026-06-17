import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-armchair",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArmchair {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m409.3 439.47-1.11 31.6c-18.420.37-33.22-6.7-39.35-31.52zm-306.59 0 1.11 31.6c18.430.37 33.22-6.7 39.35-31.52zm325.61-21.25H83.69l-3.9-25.05h352.43zM256 303.98c76.92 0 99.53 22.23 99.53 22.23l-4.79 45.44H161.26l-4.79-45.44S179.08 303.98 256 303.98zm118.19 67.67s11.78-82.26 15.23-109.12c7.47-58.14 96.66-36.05 89.91 11.16-4.33 30.29-39.08 25.98-39.08 25.98l-9.45 71.98zm-236.38 0s-11.78-82.26-15.23-109.12c-7.47-58.14-96.66-36.05-89.91 11.16 4.33 30.29 39.08 25.98 39.08 25.98l9.45 71.98zM256 40.92c88.11 0 185.77 20.55 174.5 169.05-30.95-4.27-59.12 3.8-63 31.9-1.49 10.81-7.78 57.68-7.78 57.68S322.78 282.12 256 282.12s-103.73 17.43-103.73 17.43-6.29-46.87-7.78-57.68c-3.87-28.1-32.04-36.17-62.99-31.9C70.23 61.47 167.89 40.92 256 40.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArmchair;
