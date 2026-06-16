import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-circles",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCircles {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M690-390q28-1 55-6t53-13q-15 140-117.5 234.5T438-80q-74 0-139.5-28t-114-76.5Q136-233 108-298.5T80-438q0-142 95-245.5T412-798q-12 26-16.5 54t-5.5 57q-89 21-147 89.5T185-438q0 106 73.5 179.5T438-185q91 0 161.5-57.5T690-390Zm-5-530q97.5 0 165.75 68.35t68.25 166Q919-588 850.65-519.5q-68.35 68.5-166 68.5T518.5-519.54Q450-588.08 450-686q0-97.5 68.54-165.75Q587.08-920 685-920Zm-0.5 364q51.5 0 90.5-39t39-90.5q0-51.5-39-90.5t-90.5-39q-51.5 0-90.5 39t-39 90.5q0 51.5 39 90.5t90.5 39Zm0.5-130ZM439-437Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCircles;
