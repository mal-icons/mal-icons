import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-timer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTimer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 5.07C16.39 5.56 19 8.47 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 9.96 5.87 8.13 7.26 6.85L5.85 5.43C4.09 7.07 3 9.41 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C11.66 3 11.33 3.02 11 3.05V9.09H13V5.07Z","fill":"currentColor"}],["path",{"d":"M7.71 8.71C7.32 9.1 7.32 9.73 7.71 10.12L10.54 12.95C10.93 13.34 11.56 13.34 11.95 12.95C12.34 12.56 12.34 11.93 11.95 11.54L9.12 8.71C8.73 8.32 8.1 8.32 7.71 8.71Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTimer;
