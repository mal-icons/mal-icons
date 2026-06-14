import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-unlock-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUnlock24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 7.25V9h11a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9H6V7.25C6 3.85 8.5 1 12 1c2.79 0 4.97 1.83 5.72 4.31a0.750.75 0 1 1-1.440.43C15.71 3.84 14.08 2.5 12 2.5c-2.58 0-4.5 2.08-4.5 4.75Zm-3 4.25v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUnlock24;
