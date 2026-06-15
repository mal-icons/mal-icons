import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-maximize-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMaximizeAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H9V5H6.46L11.3 9.84L9.89 11.26L5 6.37V9H3V3Z","fill":"currentColor"}],["path",{"d":"M3 21H9V19H6.38L11.3 14.07L9.89 12.66L5 17.55V15H3V21Z","fill":"currentColor"}],["path",{"d":"M15 21H21V15H19V17.52L14.13 12.66L12.72 14.07L17.65 19H15V21Z","fill":"currentColor"}],["path",{"d":"M21 3H15V5H17.56L12.72 9.84L14.13 11.26L19 6.39V9H21V3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMaximizeAlt;
