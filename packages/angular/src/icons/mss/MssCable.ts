import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cable",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCable {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120v-80h-40v-180h80v-310q0-64 47-107t113-43q63 0 106.5 43.5T510-690v420q0 38 26 64t64 26q41 0 70.5-25.5T700-270v-310h-80v-180h40v-80h140v80h40v180h-80v310q0 64-47 107t-113 43q-63 0-106.5-43.5T450-270v-420q0-38-26-64t-64-26q-41 0-70.5 25.5T260-690v310h80v180h-40v80H160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCable;
