import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-k3s",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiK3s {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.46 2.17H2.54A2.55 2.55 0 0 0 0 4.71v14.58a2.55 2.55 0 0 0 2.54 2.54h18.92a2.55 2.55 0 0 0 2.54-2.54V4.71a2.55 2.55 0 0 0-2.54-2.54ZM10.14 16.47 5.52 19.15a1.24 1.24 0 1 1-1.24-2.14L8.9 14.33a1.24 1.24 0 1 1 1.24 2.14zm1.82-4.09h-0.01a1.24 1.24 0 0 1-1.23-1.24l0.02-5.32a1.24 1.24 0 0 1 1.24-1.23h0.01a1.24 1.24 0 0 1 1.23 1.24l-0.02 5.32a1.24 1.24 0 0 1-1.24 1.23zm8.17 6.32a1.24 1.24 0 0 1-1.690.45l-4.62-2.67a1.24 1.24 0 1 1 1.24-2.14l4.62 2.67a1.24 1.24 0 0 1 0.45 1.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiK3s;
