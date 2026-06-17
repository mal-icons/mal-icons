import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-brightness-alt-high-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBrightnessAltHighFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 3a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-1 0v-2A0.50.5 0 0 1 8 3m8 8a0.50.5 0 0 1-0.50.5h-2a0.50.5 0 0 1 0-1h2a0.50.5 0 0 1 0.50.5m-13.50.5a0.50.5 0 0 0 0-1h-2a0.50.5 0 0 0 0 1zm11.16-6.16a0.50.5 0 0 1 0 0.71l-1.41 1.41a0.50.5 0 1 1-0.71-0.71l1.41-1.41a0.50.5 0 0 1 0.71 0m-9.9 2.12a0.50.5 0 0 0 0.71-0.71L3.05 5.34a0.50.5 0 1 0-0.710.71zM8 7a4 4 0 0 0-4 4 0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5 4 4 0 0 0-4-4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBrightnessAltHighFill;
