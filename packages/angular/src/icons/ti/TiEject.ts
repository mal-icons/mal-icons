import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-eject",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiEject {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 17.5c-2.48 0-4.5-2.02-4.5-4.5 0-0.55-0.45-1-1-1s-1 0.45-1 1c0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5-2.92-6.5-6.5-6.5c-0.55 0-1 0.45-1 1s0.45 1 1 1c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5zM10.66 4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-3.24l1.71 1.71 4.09 4.09c0.390.390.39 1.020 1.42-0.190.19-0.440.29-0.710.29s-0.52-0.1-0.71-0.29l-4.09-4.09-1.71-1.71v3.24c0 0.55-0.45 1-1 1s-1-0.45-1-1v-6.66h6.66"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiEject;
