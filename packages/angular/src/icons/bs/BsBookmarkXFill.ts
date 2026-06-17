import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bookmark-x-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBookmarkXFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a0.50.5 0 0 1-0.740.44L8 13.07l-5.26 2.87A0.50.5 0 0 1 2 15.5M6.85 5.15a0.50.5 0 1 0-0.710.71L7.29 7 6.15 8.15a0.50.5 0 1 0 0.710.71L8 7.71l1.15 1.15a0.50.5 0 1 0 0.71-0.71L8.71 7l1.15-1.15a0.50.5 0 0 0-0.71-0.71L8 6.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBookmarkXFill;
