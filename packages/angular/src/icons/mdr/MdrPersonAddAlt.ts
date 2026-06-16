import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-person-add-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPersonAddAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 1 17.22V20h16v-2.78c0-1.12-0.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11-3V7c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPersonAddAlt;
