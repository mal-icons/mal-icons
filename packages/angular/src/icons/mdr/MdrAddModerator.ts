import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-moderator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddModerator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 10c1.08 0 2.090.25 3 0.68v-4.3a2 2 0 0 0-1.3-1.87l-6-2.25c-0.45-0.17-0.95-0.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.910.03-0.010.05-0.020.08-0.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7z"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-2h-2c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h2v-2c0-0.280.22-0.50.5-0.5s0.50.220.50.5v2h2c0.28 0 0.50.220.50.5s-0.220.5-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddModerator;
