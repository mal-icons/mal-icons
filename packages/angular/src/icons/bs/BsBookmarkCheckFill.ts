import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bookmark-check-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBookmarkCheckFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a0.50.5 0 0 1-0.740.44L8 13.07l-5.26 2.87A0.50.5 0 0 1 2 15.5m8.85-9.65a0.50.5 0 0 0-0.71-0.71L7.5 7.79 6.35 6.65a0.50.5 0 1 0-0.710.71l1.5 1.5a0.50.5 0 0 0 0.71 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBookmarkCheckFill;
