import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-chess",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrChess {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-140h600v-120H180v120Zm132-180h336l-24-170H336l-24 170ZM150-80q-12.75 0-21.37-8.62T120-110v-150q0-24.75 17.63-42.37T180-320h72l24-170h-76q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T200-550h560q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T760-490h-76l24 170h72q24.75 0 42.38 17.63T840-260v150q0 12.75-8.62 21.38T810-80H150Zm123-470-73-330q31 30 68 46.5t75.42 16.5Q380-817 414.5-833q34.5-16 65.5-47 31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-73 330h-62l46-213q-16 3-30.5 5t-28.5 2q-36 0-69-10.5T480-797q-30 20-63 30.5T348-756q-14 0-28.5-2t-30.5-5l46 213h-62Zm207 60Zm0-60Zm0 410Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrChess;
