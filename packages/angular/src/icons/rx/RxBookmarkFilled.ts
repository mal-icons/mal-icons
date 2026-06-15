import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-bookmark-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBookmarkFilled {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 2C3.22 2 3 2.22 3 2.5V13.5C3 13.68 3.1 13.85 3.26 13.94C3.42 14.03 3.61 14.02 3.77 13.92L7.5 11.59L11.24 13.92C11.39 14.02 11.58 14.03 11.74 13.94C11.9 13.85 12 13.68 12 13.5V2.5C12 2.22 11.78 2 11.5 2H3.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBookmarkFilled;
