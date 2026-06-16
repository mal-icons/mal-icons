import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cached",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCached {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-158q-131 0-225.5-94.5T161-478v-45l-80 80-39-39 149-149 149 149-39 39-80-80v45q0 107 76.5 183.5T481-218q29 0 55-5t49-15l43 43q-36 20-72.5 28.5T481-158Zm289-169L621-476l40-40 79 79v-41q0-107-76.5-183.5T480-738q-29 0-55 5.5T376-719l-43-43q36-20 72.5-28t74.5-8q131 0 225.5 94.5T800-478v43l80-80 39 39-149 149Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCached;
