import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wikimediafoundation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWikimediafoundation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.07 3.13C22.49 5.32 24 8.49 24 12c0 6.62-5.38 12-12 12S0 18.62 0 12c0-3.51 1.51-6.68 3.93-8.87l2.27 2.27C4.36 7.01 3.2 9.37 3.2 12c0 4.86 3.94 8.8 8.8 8.8s8.8-3.94 8.8-8.8c0-2.63-1.16-4.99-2.99-6.61zm-3.4 3.4C18.22 7.85 19.2 9.81 19.2 12c0 3.7-2.8 6.76-6.4 7.16V10.4zM11.2 19.16C7.6 18.76 4.8 15.7 4.8 12c0-2.190.98-4.15 2.53-5.47L11.2 10.4zM12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWikimediafoundation;
