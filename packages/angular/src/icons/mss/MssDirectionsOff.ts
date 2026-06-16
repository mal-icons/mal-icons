import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-directions-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDirectionsOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M833-41 652-222 480-50 50-480l172-172L26-848l43-43L876-84l-43 43ZM609-265 265-609 136-480l344 344 129-129Zm129-43-43-43 129-129-344-344-129 129-43-43 172-172 430 430-172 172ZM511-536Zm-74 99Zm-117 77v-190h90l60 60h-90v130h-60Zm283-83 77-77-116-116v86h-68l107 107Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDirectionsOff;
