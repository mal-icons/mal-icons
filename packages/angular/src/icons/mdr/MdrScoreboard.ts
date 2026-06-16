import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-scoreboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrScoreboard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.5 13.5H16v-3h1.5v3zM16 2c-0.55 0-1 0.45-1 1v1H9V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-3V3c0-0.55-0.45-1-1-1zM9.5 14.25c0 0.41-0.340.75-0.750.75H6c-0.55 0-1-0.45-1-1v-1.5c0-0.550.45-1 1-1h2v-1H5.75c-0.41 0-0.75-0.34-0.75-0.75S5.34 9 5.75 9H8.5c0.55 0 1 0.45 1 1v1.5c0 0.55-0.45 1-1 1h-2v1h2.25c0.41 0 0.750.340.750.75zM19 14c0 0.55-0.45 1-1 1h-2.5c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1H18c0.55 0 1 0.45 1 1v4zm-6.25-7.25c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75S11.59 6 12 6s0.750.340.750.75zm0 3.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.750.34-0.750.75-0.750.750.340.750.75zm0 3.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.750.34-0.750.75-0.750.750.340.750.75zm0 3.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.750.34-0.750.75-0.750.750.340.750.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrScoreboard;
