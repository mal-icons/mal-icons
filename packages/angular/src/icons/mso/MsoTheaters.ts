import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-theaters",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTheaters {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120v-720h60v60h120v-60h280v60h120v-60h60v720h-60v-60H620v60H340v-60H220v60h-60Zm60-120h120v-120H220v120Zm0-180h120v-120H220v120Zm0-180h120v-120H220v120Zm400 360h120v-120H620v120Zm0-180h120v-120H620v120Zm0-180h120v-120H620v120ZM400-180h160v-600H400v600Zm0-600h160-160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTheaters;
