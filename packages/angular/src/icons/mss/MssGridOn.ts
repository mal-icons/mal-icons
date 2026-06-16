import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-grid-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGridOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm60-60h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160ZM180-400h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160ZM180-620h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGridOn;
