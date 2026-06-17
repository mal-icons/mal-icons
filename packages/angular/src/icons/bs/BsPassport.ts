import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-passport",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPassport {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-0.5 4a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1z"}],["path",{"d":"M3.23 1.78A1.5 1.5 0 0 0 2 3.25v10.95c0 0.450.190.840.49 1.110.370.420.910.69 1.510.69h8a2 2 0 0 0 2-2V4a2 2 0 0 0-1-1.73v-0.47A1.5 1.5 0 0 0 11.230.32l-8 1.45ZM4 3h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPassport;
