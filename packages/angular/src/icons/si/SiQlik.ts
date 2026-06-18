import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-qlik",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQlik {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.75 20.14-3.13-2.63c1.09-1.73 1.73-3.77 1.73-5.97 0-6.17-5.01-11.18-11.18-11.18S0 5.37 0 11.54c0 6.17 5.01 11.18 11.18 11.18 2.39 0 4.62-0.76 6.44-2.04l3.33 2.8s0.50.420.92-0.07l1.99-2.36c-0.02 0 0.39-0.5-0.11-0.9zm-5.71-8.6c0 3.79-3.07 6.87-6.87 6.87-3.79 0-6.87-3.07-6.87-6.87 0-3.79 3.08-6.87 6.87-6.87 3.79 0 6.87 3.07 6.87 6.87zm-11.29 0c0-2.43 1.97-4.4 4.4-4.4 2.43 0 4.4 1.97 4.4 4.4 0 2.43-1.97 4.4-4.4 4.4-2.43 0-4.4-1.97-4.4-4.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQlik;
