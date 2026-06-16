import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-published-with-changes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPublishedWithChanges {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.6 19.5H21v2h-6v-6h2v2.73c1.83-1.47 3-3.71 3-6.23 0-4.07-3.06-7.44-7-7.93V2.05c5.050.5 9 4.76 9 9.95 0 2.99-1.32 5.67-3.4 7.5zM4 12c0-2.52 1.17-4.77 3-6.23V8.5h2v-6H3v2h2.4A9.97 9.97 0 0 0 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-0.49-7-3.86-7-7.93zm12.24-3.89-5.66 5.66-2.83-2.83-1.41 1.41 4.24 4.24 7.07-7.07-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPublishedWithChanges;
