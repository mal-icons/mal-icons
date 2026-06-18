import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-flathub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFlathub {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.07 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6Zm9.150.08a1.66 1.66 0 0 0-1.65 1.66v8.15a1.66 1.66 0 0 0 2.48 1.43l7.06-4.07a1.66 1.66 0 0 0 0-2.87l-1.04-0.6-6.01-3.47a1.66 1.66 0 0 0-0.83-0.22Zm3.58 13.14a0.820.82 0 0 0-0.820.82v2.45h-2.45a0.820.82 0 1 0 0 1.64h2.45v2.45a0.820.82 0 1 0 1.64 0v-2.45h2.45a0.820.82 0 1 0 0-1.63h-2.45v-2.45a0.820.82 0 0 0-0.82-0.82zM2.87 13.5a2.79 2.79 0 0 0-2.8 2.8v4.9c0 1.55 1.25 2.8 2.8 2.8h4.9c1.55 0 2.8-1.25 2.8-2.8v-4.9c0-1.55-1.25-2.8-2.8-2.8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFlathub;
