import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-droplet-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDropletFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16a6 6 0 0 0 6-6c0-1.65-1.12-2.9-2.43-4.36C10.25 4.18 8.75 2.5 8 0c0 0-6 5.69-6 10a6 6 0 0 0 6 6M6.65 4.65l0.710.71c-0.290.29-1.13 1.31-1.91 2.87l-0.89-0.45c0.82-1.64 1.72-2.75 2.09-3.13"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDropletFill;
