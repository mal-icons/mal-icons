import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nest-protect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNestProtect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-120q-84 0-142-58t-58-142v-320q0-84 58-142t142-58h320q84 0 142 58t58 142v320q0 84-58 142t-142 58H320Zm0-80h320q48 0 84-36t36-84v-320q0-48-36-84t-84-36H320q-48 0-84 36t-36 84v320q0 48 36 84t84 36Zm160-80q-84 0-142-58t-58-142q0-84 58-142t142-58q84 0 142 58t58 142q0 84-58 142t-142 58Zm0-80q48 0 84-36t36-84q0-48-36-84t-84-36q-48 0-84 36t-36 84q0 48 36 84t84 36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNestProtect;
