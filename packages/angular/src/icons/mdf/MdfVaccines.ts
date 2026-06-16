import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-vaccines",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfVaccines {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 5.5H8V4h0.5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1H6v1.5H3c-0.55 0-1 0.45-1 1s0.45 1 1 1V15c0 1.10.9 2 2 2h1v4l2 1.5V17h1c1.1 0 2-0.9 2-2V7.5c0.55 0 1-0.45 1-1s-0.45-1-1-1zM9 9H7.25c-0.41 0-0.750.34-0.750.75s0.340.750.750.75H9V12H7.25c-0.41 0-0.750.34-0.750.75s0.340.750.750.75H9V15H5V7.5h4V9zm10.5 1.5V10c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5c-0.55 0-1 0.45-1 1s0.45 1 1 1v0.5c0 0.5-1.5 1.16-1.5 3V20c0 1.10.9 2 2 2h4c1.1 0 2-0.9 2-2v-6.5c0-1.84-1.5-2.5-1.5-3zm-3 0V10h1v0.5c0 1.6 1.5 2 1.5 3v0.5h-4v-0.5c0-1 1.5-1.4 1.5-3zM15 20v-1.5h4V20h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfVaccines;
