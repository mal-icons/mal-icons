import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-escalator-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEscalatorWarning {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm9 7.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5S17.83 8 17 8s-1.50.67-1.5 1.5zm-1.29 3.36-0.92 1.32L9.72 8c-0.35-0.62-1.01-1-1.73-1H3v8h1.5v7h5V11.61L12.03 16h2.2l0.77-1.1V22h4v-5h1v-5h-4.15c-0.66 0-1.270.32-1.640.86z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEscalatorWarning;
