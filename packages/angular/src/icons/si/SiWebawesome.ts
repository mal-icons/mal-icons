import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-webawesome",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWebawesome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.96 4.95c0 0.78-0.46 1.46-1.13 1.77L16.8 10.2l3.91-0.78A1.8 1.8 0 0 1 20.4 8.4a1.8 1.8 0 1 1 1.86 1.8l-4.22 9.39A2.4 2.4 0 0 1 15.85 21H8.15c-0.94 0-1.8-0.56-2.19-1.41l-4.22-9.38a1.8 1.8 0 1 1 1.55-0.78L7.2 10.2l3.98-3.48a1.95 1.95 0 0 1-1.12-1.77 1.95 1.95 0 0 1 3.9 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWebawesome;
