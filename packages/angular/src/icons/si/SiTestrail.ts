import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-testrail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTestrail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.27 23.9 4.5 21.12a0.350.35 0 0 1 0-0.5l2.77-2.77a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5l-2.77 2.77a0.350.35 0 0 1-0.5 0H7.27zm4.48-4.48-2.77-2.77a0.350.35 0 0 1 0-0.5l2.77-2.77a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5l-2.77 2.77a0.350.35 0 0 1-0.5 0zm4.48-4.48-2.77-2.77a0.350.35 0 0 1 0-0.5l2.77-2.77a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5l-2.77 2.77a0.350.35 0 0 1-0.5 0h0zm-8.880.08-2.77-2.77a0.350.35 0 0 1 0-0.5l2.77-2.77a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5l-2.77 2.77a0.350.35 0 0 1-0.5 0v0zm4.48-4.48L9.06 7.77a0.350.35 0 0 1 0-0.5l2.77-2.77a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5l-2.77 2.77a0.350.35 0 0 1-0.5 0v00zM7.44 6.15 4.67 3.37a0.350.35 0 0 1 0-0.5L7.440.1a0.350.35 0 0 1 0.5 0l2.77 2.77a0.350.35 0 0 1 0 0.5L7.94 6.14a0.350.35 0 0 1-0.5 0l00.01v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTestrail;
