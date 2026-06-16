import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-gradient",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGradient {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M437-438v-86h85v86h-85Zm-86 86v-86h86v86h-86Zm171 0v-86h86v86h-86Zm86-86v-86h86v86h-86Zm-342 0v-86h85v86h-85ZM120-120v-720h720v720H120Zm146-60h85v-86h-85v86Zm171 0h85v-86h-85v86Zm343 0v-86 86Zm-600-86h85.6v-86h85.6v86h85.6v-86h85.6v86H608v-86h86v86h86v-86h-86v-86h86v-342H180v342.4h85.71v85.6H180v86Zm0 86v-600 600Zm600-258v86-86ZM608-266v86h86v-86h-86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGradient;
